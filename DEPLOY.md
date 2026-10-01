# Deploying

Tornado Cones is a static site (one `index.html`, no build step), so hosting
it is just "serve the folder." The included workflow deploys it to GitHub
Pages automatically.

## GitHub Pages (automated)

`.github/workflows/deploy.yml` stages only the runtime files into `_site` and
deploys that directory to GitHub Pages on every push to `main`. Source artwork,
test scripts, and repository-only files are intentionally excluded.

**One-time setup** (can't be done from a workflow file — it's a repo setting):

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The game will be live at `https://<username>.github.io/<repo>/`.

## Any other static host

Netlify, Vercel, Cloudflare Pages, or a plain web server all work the same
way — point them at the repo root with no build command. The only files that
matter at runtime are `index.html`, `manifest.json`, `fonts/`, `images/`, and
the `.mp3` tracks in the root.
