# Gaming Activation ROI Brief Generator
### Moonrock AI Toolkit — App 1 of 5

Turns raw event specs into a client-ready ROI brief with projected KPIs, benchmark context, risk flags, and a CMO-legible summary. Built to replicate the exact deliverables produced for SDCC (100K attendees), PUBG Mobile, and Samsung Galaxy activations at Moonrock Agency.

**Powered by:** Claude (Anthropic) · Deployed on Vercel

---

## Deploy in 5 Steps

### 1. Create a Vercel account
Go to [vercel.com](https://vercel.com) and sign up free with your GitHub account.

### 2. Push this folder to GitHub
```bash
cd gaming-roi-brief
git init
git add .
git commit -m "Initial commit"
gh repo create gaming-roi-brief --public --push
```
Or create a repo manually on github.com and push.

### 3. Import to Vercel
- Go to [vercel.com/new](https://vercel.com/new)
- Click **"Import Git Repository"**
- Select your `gaming-roi-brief` repo
- Click **Deploy** (default settings are fine)

### 4. Add your API key as an environment variable
- In Vercel dashboard → your project → **Settings → Environment Variables**
- Add:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** `sk-ant-api03-...` (your key from console.anthropic.com)
- Click **Save**

### 5. Redeploy
- Go to **Deployments** tab → click the three dots on your latest deploy → **Redeploy**
- Your app is now live at `https://gaming-roi-brief.vercel.app`

---

## Project Structure
```
gaming-roi-brief/
├── api/
│   └── generate.js     ← Serverless function (holds API key securely)
├── public/
│   └── index.html      ← Frontend (no API key needed)
├── vercel.json         ← Routing config
└── README.md
```

---

## Local Development
```bash
npm i -g vercel
vercel dev
```
Then visit `http://localhost:3000`. You'll be prompted to link to your Vercel project on first run.

---

## Cost
Each brief generation uses ~1,500–2,000 tokens. At current Claude Sonnet pricing that's roughly **$0.01–0.02 per brief**. Vercel free tier handles up to 100GB bandwidth and 100k function invocations/month.
