# bagchaserkash.com

Static site. No build step, no database, no dependencies.

## Files
- `config.js` — **all platform links live here.** Paste a URL to show a platform, leave `""` to hide it.
- `index.html` — page structure
- `styles.css` — design and animation
- `app.js` — reads `config.js` and draws the links
- `assets/` — album cover, background, icons

## Preview on your computer
In this folder, run one of these, then open http://localhost:3000
```
npx serve -l 3000
```
or
```
python3 -m http.server 3000
```
(Opening index.html by double-clicking won't load images, because paths start with `/`.)

To test on your phone, connect it to the same Wi-Fi and open `http://YOUR-COMPUTER-IP:3000`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo. Framework preset: **Other**. Leave build settings empty. Deploy.
3. Project → Settings → Domains → add `bagchaserkash.com` and follow the DNS instructions.

Or, without GitHub: `npm i -g vercel`, then run `vercel` in this folder (`vercel --prod` to go live).

Every time you edit `config.js` and push, Vercel redeploys automatically.
