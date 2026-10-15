# Clínica Vida Plena

Página institucional de clínica com apresentação de serviços, equipe, convênios e canais de contato. O projeto concentra o conteúdo em seções reutilizáveis de uma aplicação React.

## Funcionalidades

- Seções para especialidades, médicos, convênios, benefícios e depoimentos.
- Composição da página a partir de componentes dedicados.
- Animações de entrada com Framer Motion.
- Formulário com validação de campos obrigatórios e notificação visual.
- Mapa incorporado e componente de acesso ao WhatsApp.

## Tecnologias

React 18, Vite 4, Tailwind CSS, Framer Motion, React Helmet e Lucide React.

## Como executar

Requisitos: Node.js e npm compatíveis com as versões de Vite e dos plugins declaradas em `package.json`.

```sh
git clone https://github.com/Felipegaldinos/clinica-vida-plena.git
cd clinica-vida-plena
npm install
```

```sh
npm run dev
```

Abra o endereço exibido no terminal.

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gerar a versão de produção |
| `npm run preview` | Visualizar o build localmente |

O script de build inclui `|| true &&`, cuja compatibilidade depende do shell usado pelo npm. Se houver erro de sintaxe no Windows, execute `node tools/generate-llms.js` e `npx vite build` separadamente e investigue o resultado de cada etapa.

## Organização do código

- `src/App.jsx` — composição das seções.
- `src/components/Specialties.jsx` — especialidades; Doctors.jsx e Insurance.jsx contêm equipe e convênios.
- `src/components/Contact.jsx` — formulário e mapa.
- `src/components/WhatsAppButton.jsx` — atalho de contato.
- `tools/generate-llms.js` — script chamado na etapa de build.

## Roteiro de demonstração

Percorra as seções, teste a navegação em largura de celular e preencha o formulário com dados fictícios. Confira a validação dos campos e a notificação visual.

## Limitações atuais

O formulário de Contact.jsx exibe uma mensagem de sucesso, mas não envia nem salva dados e não agenda consultas. Endereço, telefone e outros conteúdos incluem exemplos. Para disponibilizar o site a uma clínica real, substitua os dados e implemente o atendimento desejado.

## Competências demonstradas

Componentização de uma página institucional com várias seções e pontos de contato.

## Autoria

Projeto disponível no perfil de [Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para verificar os termos de licença aplicáveis.
