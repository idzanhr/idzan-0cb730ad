# Idzan

Can you build me landing page for showcase all projects which I ever created. Use https://idzan.hr/projects/ as basis for all projects and images. Colors needs to be like this page. Site needs to be static HTML/CSS combo with dark/light mode switch

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://idzan.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1fc5084b-b586-4e41-a505-a703a449db2f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Static HTML/CSS version

`static/` holds a dependency-free copy of the site (`index.html`, `styles.css`, images). It needs no build step: upload the folder to any static host, or open it locally with `python3 -m http.server -d static`. To add a project, copy an `<article>` block in `static/index.html`, give it a new id, and put its image in `static/projects/`.
