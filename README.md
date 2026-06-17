# HabitFlow — Remote Access Setup

Your app will live at: **https://YOUR-GITHUB-USERNAME.github.io/habitflow**
Accessible from anywhere — phone, laptop, café, travel. No laptop needs to be running.

---

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html`     | The full app |
| `manifest.json`  | Makes it installable on home screen |
| `sw.js`          | Offline caching (works without internet after first load) |
| `icon-192.png`   | App icon (phone home screen) |
| `icon-512.png`   | App icon (splash screen) |
| `apps-script.js` | Paste into Google Apps Script for data sync |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on every save |

---

## STEP 1 — Create a free GitHub account (skip if you have one)

1. Go to https://github.com
2. Click **Sign up** — use any email, it's free

---

## STEP 2 — Create the repository

1. Once logged in, click the **+** button (top right) → **New repository**
2. Repository name: `habitflow` (exactly this, lowercase)
3. Visibility: **Public** ✓ (required for free GitHub Pages)
4. Leave everything else blank
5. Click **Create repository**

---

## STEP 3 — Upload your files

### Option A — Upload via browser (easiest, no Git needed)

1. On the empty repository page, click **uploading an existing file**
2. Drag ALL these files into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apps-script.js`
3. Also upload the folder `.github/workflows/deploy.yml`
   - Click **choose your files**
   - You may need to create the folder structure manually (see Option B for this)
4. Scroll down → click **Commit changes**

### Option B — Upload via terminal (if you have Git installed)

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial HabitFlow deploy"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/habitflow.git
git push -u origin main
```

### For the .github/workflows folder (if using browser upload):

1. In your repository, click **Add file → Create new file**
2. In the filename box type: `.github/workflows/deploy.yml`
3. Paste the contents of the `deploy.yml` file from this folder
4. Click **Commit new file**

---

## STEP 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under "Source", select **GitHub Actions**
4. Click **Save**

GitHub will now automatically deploy every time you update files.

---

## STEP 5 — Wait ~2 minutes, then open your app

1. Click the **Actions** tab in your repository
2. You'll see a workflow running — wait for the ✅ green tick
3. Your app is now live at:
   **https://YOUR-GITHUB-USERNAME.github.io/habitflow**

---

## STEP 6 — Add to Home Screen (now works remotely!)

Since the app is now on HTTPS, "Add to Home Screen" works from anywhere:

### Android (Chrome)
- Open the URL in Chrome
- Tap the **Install HabitFlow** banner that appears
- Or: three-dot menu → **Add to Home Screen**

### iPhone (Safari)
- Open the URL in Safari
- Tap **Share ⎙** → **Add to Home Screen** → **Add**
- A tip appears automatically when you first open the app

---

## STEP 7 — Connect Google Sheets sync

1. Open your Google Sheet:
   https://docs.google.com/spreadsheets/d/1IW_yYpgiK2jz1UqXR8G4s72yVAJmMD8_PoU2-Jt1BWs/edit

2. Click **Extensions → Apps Script**

3. Delete existing code, paste contents of `apps-script.js`, save (Ctrl+S)

4. Click **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy → Authorize access → Allow**

5. Copy the Web app URL

6. Open HabitFlow → tap **🔧 Setup** → paste the URL → **Test Connection**

7. Tap **Push All Data** for the first sync

---

## How sync works from anywhere

```
Your Phone (Chennai)  ──┐
                        ├──► Google Sheets ◄──┬── Your Laptop (home)
Your Phone (abroad)  ──┘                      └── Any device with the URL
```

Every log, streak, and body stat writes to your Google Sheet silently.
When you open the app on any device, it pulls the latest data.
Works on mobile data, hotel WiFi, anywhere with internet.

---

## Updating the app in future

If the app is updated:
1. Download the new `index.html`
2. Go to your GitHub repository → click `index.html` → click the pencil ✏️ icon
3. Select all, paste the new content → **Commit changes**
4. GitHub auto-deploys in ~1 minute

---

## Privacy note

Your habit data lives in **your own Google Sheet** — not on GitHub.
The HTML/JS files on GitHub contain no personal data.
The repository can be made private (requires GitHub Pro) but the app still
works fine as a public repository since your Sheet is private.
