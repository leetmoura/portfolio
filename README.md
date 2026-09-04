# letsproduct — portfólio

Portfólio de **Letícia Moura**, Product Manager com foco em fintechs, contas digitais, cartão e crédito.

🔗 **https://leetmoura.github.io/portfolio/**

Feito com React + Vite + Tailwind. Originalmente criado no Base44 e migrado para código próprio.

---

## Publicação

O deploy é automático: todo push na branch `main` dispara o workflow do GitHub Actions
(`.github/workflows/deploy.yml`), que roda o build e publica no GitHub Pages.

Nada precisa ser feito manualmente. Se quiser republicar sem alterar nada,
vá em **Actions → Deploy no GitHub Pages → Run workflow**.

## Rodar localmente

Precisa do [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
```

## Onde mexer

Todo o conteúdo do site está em arquivos separados por seção — é só editar o texto:

| Seção | Arquivo |
|---|---|
| Menu do topo | `src/components/portfolio/Navbar.jsx` |
| Apresentação / foto | `src/components/portfolio/Hero.jsx` |
| Sobre mim, trajetória, tags | `src/components/portfolio/About.jsx` |
| Produtos | `src/components/portfolio/Products.jsx` |
| Cases (lista) | `src/components/portfolio/Cases.jsx` |
| Card de case (layout) | `src/components/portfolio/CaseCard.jsx` |
| Palestras e fotos | `src/components/portfolio/Speaking.jsx` |
| Contato | `src/components/portfolio/Contact.jsx` |
| Rodapé | `src/components/portfolio/Footer.jsx` |

Cores e fontes da marca ficam em `src/index.css` e `tailwind.config.js`.

## Paleta da marca

| Cor | Hex | Uso |
|---|---|---|
| Terracota | `#C4613A` | Acento principal — CTAs, links, ícones |
| Salmon | `#E8957A` | Acento secundário |
| Marrom | `#5C2E1A` | Profundidade, fundos escuros |
| Escuro | `#3A1A0E` | Textos e títulos |
| Off-white | `#FBF0EB` | Fundo padrão |
| Creme | `#F5E6DC` | Fundo de seção alternativo |

Tipografia: **Playfair Display** (títulos) · **DM Sans** (corpo) · **Cormorant Garamond** (citações).

## Pendência conhecida

As imagens (foto de perfil, fotos de palestras) e o PDF do currículo ainda são
carregados do CDN do Base44 (`media.base44.com`). Enquanto o app existir lá, os links
funcionam. Para ficar 100% independente, baixe os arquivos, coloque em `public/img/`
e troque as URLs nos componentes por caminhos locais (ex.: `/portfolio/img/hero.png`).

## Trocar de endereço

O site hoje mora em `leetmoura.github.io/portfolio/`. Se mudar para um domínio próprio
ou para o repositório `leetmoura.github.io`, edite `base` em `vite.config.js` para `'/'`.
