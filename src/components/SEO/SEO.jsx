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
        logo: 'https://mendestech.com.br/logo.png',
        telephone: '+55-48-9144-3698',
        email: 'contato@mendestech.com.br',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'SP',
          addressCountry: 'BR',
          description: 'Litoral Sul de SP — Atendimento Nacional',
        },
        description: 'Desenvolvimento web, SEO local e automação de IA para WhatsApp e Instagram para empresas.',
        areaServed: ['Litoral Sul de SP', 'Brasil'],
        serviceType: [
          'Desenvolvimento Web',
          'Automação de WhatsApp',
          'Chatbot para Instagram',
          'Agente de Inteligência Artificial',
          'Otimização de SEO Local',
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://mendestech.com.br/#solucoes',
        name: 'Soluções de Automação de IA e Desenvolvimento Web — Método CONECTA',
        provider: { '@id': 'https://mendestech.com.br/#organization' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Soluções Mendes Tech',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Diagnóstico e Mapeamento Digital',
                description: 'Auditoria completa de SEO, posicionamento no Google, velocidade do site e tempo de resposta no WhatsApp.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Planejamento Estratégico Sob Medida',
                description: 'Estruturação do fluxo de vendas ideal, priorização de canais de atração e estratégias customizadas.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Estrutura Digital & SEO Local',
                description: 'Construção e refatoração de websites focados em conversão e otimização do Google Meu Negócio.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Atendimento Inteligente e Agentes de IA 24/7',
                description: 'Implantação de agentes de inteligência artificial no WhatsApp para triagem, qualificação e agendamento autônomo.',
              },
            },
          ],
        },
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
      <title>Mendes Tech — Automação de IA e Sites para Empresas</title>
      <meta name="description" content="A Mendes Tech desenvolve sites de alta conversão e robôs de IA para atendimento 24/7 no WhatsApp. Aumente as vendas da sua empresa. Agende um diagnóstico!" />
      <meta name="keywords" content="automação whatsapp, agente IA instagram, desenvolvimento web, chatbot para clínica, robô de atendimento, Mendes Tech, litoral sul SP, peruíbe, itanhaém" />
      <link rel="canonical" href="https://mendestech.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mendes Tech — Automação de IA e Sites para Empresas" />
      <meta property="og:description" content="A Mendes Tech desenvolve sites de alta conversão e robôs de IA para atendimento 24/7 no WhatsApp. Aumente as vendas da sua empresa. Agende um diagnóstico!" />
      <meta property="og:url" content="https://mendestech.com.br/" />
      <meta property="og:locale" content="pt_BR" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

