import { Helmet } from 'react-helmet-async'

export default function SEO() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mendestech.com.br/#organization',
        name: 'Mendes Tech',
        url: 'https://mendestech.com.br',
        description: 'Desenvolvimento web e automação de IA para WhatsApp e Instagram para pequenas e médias empresas.',
        areaServed: ['Litoral Sul de SP', 'Brasil'],
        serviceType: ['Desenvolvimento Web', 'Automação WhatsApp', 'Chatbot Instagram', 'Agente de IA'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é automação de IA para WhatsApp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'É um agente de inteligência artificial treinado com as informações do seu negócio que responde, qualifica e atende seus clientes no WhatsApp automaticamente, 24h por dia, 7 dias por semana.',
            },
          },
          {
            '@type': 'Question',
            name: 'A Mendes Tech atende empresas fora do Litoral Sul de SP?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim. Temos forte presença no Litoral Sul de SP (Peruíbe, Itanhaém, Mongaguá, Praia Grande e Santos), mas atendemos empresas em todo o território nacional de forma remota.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo leva para o robô de IA estar funcionando?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Em média, 5 a 10 dias úteis para uma implementação completa, incluindo treinamento do agente com as informações do seu negócio.',
            },
          },
        ],
      },
    ],
  }

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>Mendes Tech</title>
      <meta name="description" content="A Mendes Tech cria sites que vendem e robôs de IA que atendem clientes no WhatsApp e Instagram 24/7. PMEs do Litoral Sul de SP e todo o Brasil. Análise gratuita." />
      <meta name="keywords" content="automação whatsapp, agente IA instagram, desenvolvimento web, chatbot para clínica, robô de atendimento, Mendes Tech, litoral sul SP, peruíbe, itanhaém" />
      <link rel="canonical" href="https://mendestech.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mendes Tech — Automação de IA para WhatsApp e Instagram" />
      <meta property="og:description" content="Pare de perder clientes por demora no atendimento. Robôs de IA no WhatsApp e Instagram + sites de alta conversão para PMEs." />
      <meta property="og:url" content="https://mendestech.com.br/" />
      <meta property="og:locale" content="pt_BR" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
