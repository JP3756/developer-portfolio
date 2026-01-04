# PinMe IPFS Deployment Guide

This project is configured for automatic deployment to IPFS using [PinMe](https://pinme.eth.limo/), a zero-config frontend deployment tool.

## 🌐 What is PinMe?

PinMe is a decentralized hosting solution that:
- Deploys your site to IPFS (InterPlanetary File System)
- Provides ENS subdomain URLs (e.g., `yourname.pinit.eth.limo`)
- Requires no servers or accounts
- Makes your site tamper-resistant and highly available
- Is completely free for sites under 1GB

## 🚀 Quick Setup

### 1. Get Your PinMe AppKey

1. Visit [https://pinme.eth.limo/](https://pinme.eth.limo/)
2. Connect your wallet (MetaMask, WalletConnect, etc.)
3. Copy your AppKey (format: `address-jwt`)

### 2. Configure GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **PINME_APPKEY** (Required)
     - Value: Your AppKey from PinMe website
     - Format: `0xYourAddress-jwt_token_here`
   
   - **PINME_DOMAIN** (Optional)
     - Value: Your desired subdomain name
     - Example: `jpcabaluna-portfolio`
     - Default: Uses your repository name if not set
     - This will create: `https://jpcabaluna-portfolio.pinit.eth.limo`

### 3. Deploy Automatically

Push to your `main` or `master` branch:

```bash
git add .
git commit -m "Deploy to PinMe/IPFS"
git push origin main
```

Your site will automatically deploy to IPFS!

### 4. Manual Deployment (Optional)

You can also trigger deployments manually:

1. Go to **Actions** tab in GitHub
2. Select **"Deploy to PinMe (IPFS)"** workflow
3. Click **"Run workflow"**
4. Enter your desired domain name (optional)
5. Click **"Run workflow"** button

## 🔗 Access Your Site

After deployment, your site will be available at:

- **Primary URL:** `https://your-domain.pinit.eth.limo`
- **Alternative URL:** `https://your-domain.pinit.eth.link`
- **IPFS Gateway:** Provided in deployment logs

## 📱 Choosing Your Domain Name

Your domain name should be:
- **Unique:** Not already taken by another user
- **Professional:** Use your name or project name
- **Lowercase:** Only letters, numbers, and hyphens
- **Memorable:** Easy to share with employers

### Good Examples:
- `jpcabaluna-portfolio`
- `john-paolo-dev`
- `jp-developer`
- `cabaluna-portfolio`

### Tips:
- Use your name for personal branding
- Keep it short and professional
- Avoid numbers unless meaningful
- Hyphens are okay for readability

## 🛠️ Local Testing with PinMe CLI

Install PinMe globally:

```bash
npm install -g pinme
```

Build and deploy locally:

```bash
# Build your project
npm run build

# Set your AppKey (one-time setup)
pinme set-appkey your-address-jwt

# Deploy to IPFS with domain
pinme upload ./build --domain your-domain-name

# Or just upload without domain
pinme upload ./build
```

View your upload history:

```bash
pinme list
```

Remove a deployment:

```bash
pinme rm <IPFS-hash-or-domain>
```

## 📊 Deployment Features

✅ Automatic deployment on every push to `main`
✅ Custom domain binding (ENS subdomain)
✅ Build directory auto-detection
✅ Deployment summary with URLs
✅ IPFS content addressing (CID)
✅ Global CDN distribution
✅ No server management needed

## 🔍 Troubleshooting

### Build Fails
- Check that `npm run build` works locally
- Ensure all dependencies are in `package.json`
- Check GitHub Actions logs for specific errors

### Authentication Failed
- Verify `PINME_APPKEY` secret is correct
- Format should be: `address-jwt`
- Get a new AppKey from [PinMe website](https://pinme.eth.limo/)

### Domain Already Taken
- Try a different domain name
- Add your username or year
- Use hyphens for word separation

### Site Not Loading
- Wait 1-2 minutes for IPFS propagation
- Try the alternative `.eth.link` URL
- Clear browser cache
- Check if domain was successfully bound in logs

## 📖 Additional Resources

- **PinMe Website:** [https://pinme.eth.limo/](https://pinme.eth.limo/)
- **PinMe GitHub:** [https://github.com/glitternetwork/pinme](https://github.com/glitternetwork/pinme)
- **IPFS Documentation:** [https://docs.ipfs.tech/](https://docs.ipfs.tech/)
- **Your Domains:** Run `pinme my-domains` to see all your domains

## 🎯 Why IPFS/PinMe?

### For Employment Portfolios:
- **Permanent:** Your site won't disappear if you forget to renew hosting
- **Professional:** Shows you understand decentralized technology
- **Fast:** Global CDN-like distribution
- **Credible:** Content-addressed URLs are tamper-proof
- **Free:** No monthly hosting fees

### Technical Benefits:
- Content-addressed (immutable)
- Distributed globally
- No single point of failure
- Censorship-resistant
- Version controlled (each CID is unique)

## 🔄 Updating Your Site

Every time you push changes to `main`, GitHub Actions will:

1. Build your project
2. Upload to IPFS (new CID)
3. Update your domain to point to new CID
4. Provide new URLs in deployment summary

Your domain stays the same, but points to the latest version!

## 💡 Pro Tips

1. **Use Environment Variables:** Store sensitive data in GitHub Secrets
2. **Test Locally First:** Always run `npm run build` locally before pushing
3. **Monitor Deployments:** Check Actions tab for deployment status
4. **Update Domain:** You can change your domain anytime via workflow dispatch
5. **Multiple Sites:** You can deploy multiple projects to different domains
6. **Share CID:** Each deployment gets a unique CID you can share directly

## 📞 Support

- **GitHub Issues:** Report problems in your repository
- **PinMe Support:** [pinme@glitterprotocol.io](mailto:pinme@glitterprotocol.io)
- **IPFS Community:** [https://discuss.ipfs.tech/](https://discuss.ipfs.tech/)

---

**Ready to deploy?** Just push your changes and watch GitHub Actions do the rest! 🚀
