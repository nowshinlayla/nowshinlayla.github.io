# Nowshin Layla - Personal Website

Portfolio website for **Nowshin Layla**, built with Next.js and deployed on GitHub Pages.

## Live Site

https://nowshinlayla.github.io

## Local Development

```bash
git clone https://github.com/nowshinlayla/nowshinlayla.github.io.git
cd nowshinlayla.github.io
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for Production

```bash
npm run build
```

Static files are exported to `dist/` for GitHub Pages.

## Customize

1. **Photo** — Replace `public/prof_pic.png` with a portrait photo.
2. **Resume** — Add `public/Nowshin_Layla_Resume.pdf` or set `resumeExternalUrl` in `app/metadata.ts`.
3. **Bio & education** — Edit `src/About/About.tsx`.
4. **Experience** — Edit `src/Experience/Experience.tsx`.
5. **Certifications** — Edit `src/Awards/Awards.tsx`.
6. **News** — Edit `src/News/News.tsx`.
7. **Contact form** — Add a free key from [web3forms.com](https://web3forms.com) to `app/metadata.ts` or GitHub secret `WEB3FORMS_ACCESS_KEY`.
8. **Links** — Update email, LinkedIn, etc. in `app/metadata.ts`.

## Technologies

- Next.js 14
- React 18
- TypeScript
- Material-UI
- Font Awesome
