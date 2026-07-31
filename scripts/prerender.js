import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

async function runPrerender() {
  console.log('🚀 [Prerender] Gerando bundle SSR temporário para pré-renderização estática...')
  
  const ssrOutDir = path.resolve(rootDir, '.tmp-ssr')
  
  // Compila a entrada SSR
  await build({
    root: rootDir,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: ssrOutDir,
      emptyOutDir: true,
    },
    logLevel: 'warn',
  })

  // Carrega o módulo compilado SSR
  const ssrModulePath = path.resolve(ssrOutDir, 'entry-server.js')
  const { render } = await import(pathToFileURL(ssrModulePath).href)

  // Lê o index.html compilado do build cliente
  const distIndexPath = path.resolve(rootDir, 'dist', 'index.html')
  if (!fs.existsSync(distIndexPath)) {
    throw new Error('❌ dist/index.html não foi encontrado. Execute vite build cliente antes do prerender.')
  }

  const template = fs.readFileSync(distIndexPath, 'utf-8')

  // Renderiza a Landing Page (rota /)
  console.log('📄 [Prerender] Pré-renderizando HTML da Landing Page (/) ...')
  const { html } = render('/')

  // Injeta o HTML estático gerado dentro da div #root
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  )

  fs.writeFileSync(distIndexPath, finalHtml, 'utf-8')
  console.log('✅ [Prerender] index.html estático pré-preenchido com sucesso!')

  // Também pré-renderiza a rota /solucoes se o diretório existir
  try {
    const { html: solucoesHtml } = render('/solucoes')
    const solucoesDir = path.resolve(rootDir, 'dist', 'solucoes')
    if (!fs.existsSync(solucoesDir)) {
      fs.mkdirSync(solucoesDir, { recursive: true })
    }
    const finalSolucoesHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${solucoesHtml}</div>`
    )
    fs.writeFileSync(path.resolve(solucoesDir, 'index.html'), finalSolucoesHtml, 'utf-8')
    console.log('✅ [Prerender] dist/solucoes/index.html estático pré-preenchido com sucesso!')
  } catch (err) {
    console.warn('⚠️ [Prerender] Aviso ao gerar /solucoes:', err.message)
  }

  // Limpa diretório SSR temporário
  if (fs.existsSync(ssrOutDir)) {
    fs.rmSync(ssrOutDir, { recursive: true, force: true })
  }
}

runPrerender().catch((err) => {
  console.error('❌ Erro durante a pré-renderização:', err)
  process.exit(1)
})
