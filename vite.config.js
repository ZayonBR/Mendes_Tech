import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

/**
 * Plugin customizado para pré-renderização SSG no Vite sem Next.js.
 * Garante que o index.html final em dist/ contenha todo o HTML pré-renderizado.
 */
function prerenderPlugin() {
  return {
    name: 'vite-plugin-prerender-ssg',
    apply: 'build',
    closeBundle: {
      sequential: true,
      async handler() {
        if (process.env.VITE_PRERENDER === 'false' || process.env.IS_PRERENDER_BUILD === 'true') {
          return
        }
        console.log('\n⚡ [Vite Prerender Plugin] Executando pós-processamento de pré-renderização estática...')
        try {
          execSync('node scripts/prerender.js', {
            stdio: 'inherit',
            env: { ...process.env, IS_PRERENDER_BUILD: 'true' },
          })
        } catch (err) {
          console.error('❌ Falha ao executar o script de pré-renderização:', err.message)
        }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
})
