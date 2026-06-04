# Bogobot Archive

A creative lore / worldbuilding project — the archive of **Bogobot**, its schools,
agents, and the network civilization after the Great Error.

🌐 **Live site:** https://julchernysheva.github.io/bogobot-archive

**About the project:** https://www.artisyou.ru/projects/godbot

<img src="image.png" alt="Bogobot Archive" width="400" />

The content lives in [`content/`](content/) as Markdown:

- `01_CANON/` — canonical stories and lore
- `02_WORLD/` — worldbuilding (economy, culture, calendar, history…)
- `03_SCHOOLS/` — schools, agents, functions, and social roles of nodes

## Local development

```bash
npm ci                         # install dependencies
npx quartz plugin install      # install community plugins
npx quartz build --serve       # dev server at http://localhost:8080
```

## Built with Quartz

This site is built on [**Quartz v5**](https://quartz.jzhao.xyz/), a static-site
generator for digital gardens by [jackyzha0](https://github.com/jackyzha0). The Quartz
engine (`quartz/`) is MIT-licensed — see [`LICENSE.txt`](LICENSE.txt). The content under
`content/` is © Julia Chernysheva.
