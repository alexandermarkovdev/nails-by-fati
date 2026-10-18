# Putting this folder on GitHub

Notes for an AI assistant (Claude Code, Codex) working in this folder. The owner wants this folder, the Nails by Fati website, to become its own new GitHub repository. They are not a developer: explain in plain words and ask before anything that publishes.

## The GitHub account

- Account: `alexandermarkovdev` (the same one that holds https://github.com/alexandermarkovdev/lumina-website).
- On this computer the GitHub CLI is already logged in to that account (checked 2026-10-19 with `gh auth status`: logged in, token kept in the Windows keyring, scopes `repo`, `gist`, `read:org`, git over https). No token or password needs to be typed or stored anywhere.
- Programs: `C:\Program Files\Git\cmd\git.exe` and `C:\Program Files\GitHub CLI\gh.exe`. If `git` or `gh` is "not found", call them by these full paths.
- If `gh auth status` ever says not logged in, ask the owner to type `! gh auth login` in the chat (GitHub.com → HTTPS → log in with a web browser) and follow the browser prompt.

## What this folder is today

- It is already a git repository: branch `main`, about 14 commits (all named "Update Site source"), and **no remote yet**, so nothing is on GitHub.
- The finished website is in `dist/` (`index.html` plus the inner pages, fonts and photos). `.openai/hosting.json` says the same: static site served from `dist`.
- The `*.cjs` files at the top are the scripts that build and check the pages; `DESIGN.md` and `.impeccable/` hold the design notes.
- There is no `.gitignore`. Nothing is over 50 MB (`dist` is about 36 MB), so GitHub will accept it.

## Before the first push: two things to ask the owner

1. **Public or private?** A public repository can be read by anyone. A private one is the safe default; GitHub Pages (a free live address) on a private repo needs a paid plan.
2. **The email in the old commits.** The existing commits carry `alexandermarkov64@googlemail.com`. Once pushed, anyone who can see the repo can see that address. The Lumina repo uses GitHub's private address instead: `326458832+alexandermarkovdev@users.noreply.github.com`. Offer to:
   - set that private address for this folder from now on: `git config user.email 326458832+alexandermarkovdev@users.noreply.github.com`, and
   - if the owner agrees, rewrite the existing commits to it before the first push (only safe now, while nothing has been pushed).

## Creating the repository

Run from this folder, after the owner has answered the questions above. Suggested name: `nails-by-fati`.

```sh
git status                      # commit or ask about any unsaved changes first
gh repo create alexandermarkovdev/nails-by-fati --private --source . --remote origin --push
```

Use `--public` instead of `--private` if that is what the owner chose. This creates the empty repository on GitHub, links it as `origin`, and uploads the `main` branch. Afterwards give the owner the link: https://github.com/alexandermarkovdev/nails-by-fati

Later updates are just:

```sh
git add -A
git commit -m "What changed, in plain words"
git push
```

## Optional: a live address on GitHub Pages

GitHub Pages can only serve a site from the repository root or from a `docs/` folder, not from `dist/`. To publish `dist/` as it is, add a small GitHub Actions workflow (`.github/workflows/pages.yml` using `actions/upload-pages-artifact` with `path: dist` and `actions/deploy-pages`), then turn on Pages with source "GitHub Actions" in the repository settings. The address would be https://alexandermarkovdev.github.io/nails-by-fati/. Every push to `main` is then live within a couple of minutes, so ask the owner before setting this up.

## Rules

- Ask before creating the repository, before pushing, and before making it public. A push to a public repository is published at once.
- Never write tokens, passwords or keys into this file or any other file in the folder.
