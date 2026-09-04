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

## Imagens e currículo

Ficam em `public/` e são servidos pelo próprio site — nenhuma dependência externa.

```
public/curriculo-leticia-moura.pdf   → botão "Currículo" no topo
public/img/hero.jpg                  → foto de perfil
public/img/palestra1-1.jpg  ...      → carrossel de cada palestra
```

Para trocar uma imagem, substitua o arquivo mantendo o mesmo nome. Para adicionar uma
palestra nova, coloque as fotos em `public/img/` e adicione o item no array `events`
em `src/components/portfolio/Speaking.jsx`.

Nos componentes os caminhos usam `` `${import.meta.env.BASE_URL}img/arquivo.jpg` `` —
assim continuam funcionando se o endereço do site mudar.

## Trocar de endereço

O site hoje mora em `leetmoura.github.io/portfolio/`. Se mudar para um domínio próprio
ou para o repositório `leetmoura.github.io`, edite `base` em `vite.config.js` para `'/'`.
