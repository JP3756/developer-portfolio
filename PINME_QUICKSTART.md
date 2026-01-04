# PinMe IPFS Deployment - Quick Reference

## 🚀 1-Minute Setup

### Step 1: Get AppKey
Visit [pinme.eth.limo](https://pinme.eth.limo/) → Connect Wallet → Copy AppKey

### Step 2: Add to GitHub
Settings → Secrets → Actions → New secret:
- Name: `PINME_APPKEY`
- Value: `your-address-jwt-from-pinme`

(Optional) Add another secret for custom domain:
- Name: `PINME_DOMAIN`  
- Value: `jpcabaluna-portfolio` (or your chosen name)

### Step 3: Push to GitHub
```bash
git push origin main
```

Done! Your site deploys automatically to `https://your-domain.pinit.eth.limo`

---

## 📋 Choosing a Domain Name

### Good Examples:
- `jpcabaluna-portfolio` ✅
- `john-paolo-dev` ✅
- `jp-developer` ✅
- `cabaluna-dev` ✅

### Rules:
- Use lowercase letters, numbers, hyphens
- No spaces or special characters
- Make it professional and memorable
- Use your name for personal branding

---

## 🔧 Local Testing (Optional)

```bash
# Install PinMe
npm install -g pinme

# Build
npm run build

# Set AppKey (one time)
pinme set-appkey your-address-jwt

# Deploy
pinme upload ./build --domain your-name
```

---

## 📊 Check Your Deployments

```bash
# View history
pinme list

# View your domains
pinme my-domains

# Remove old deployment
pinme rm <hash-or-domain>
```

---

## 🆘 Troubleshooting

**Build fails?**
- Run `npm run build` locally to test

**Auth error?**
- Check your `PINME_APPKEY` secret is correct
- Get new AppKey from [pinme.eth.limo](https://pinme.eth.limo/)

**Domain taken?**
- Try a different name
- Add year: `jpcabaluna-2026`
- Add variation: `jp-cabaluna-dev`

**Site not loading?**
- Wait 1-2 minutes for IPFS propagation
- Try `.eth.link` instead of `.eth.limo`
- Check Actions tab for deployment status

---

## 📖 Full Documentation

See [PINME_DEPLOYMENT.md](./PINME_DEPLOYMENT.md) for complete guide.

---

## 💡 Why Use PinMe/IPFS?

For job applications:
- ✅ Shows you understand Web3/decentralized tech
- ✅ Your site won't go down (distributed)
- ✅ Free hosting forever
- ✅ Professional ENS domain
- ✅ Content is tamper-proof
- ✅ Global fast loading

---

**Your URL Format:**
`https://your-domain.pinit.eth.limo`

Example: `https://jpcabaluna-portfolio.pinit.eth.limo`
