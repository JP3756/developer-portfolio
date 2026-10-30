# AWS EC2 Deployment

For this trial project, deploy manually through the Lightsail browser SSH console. The GitHub Actions workflow is retained for later, but is manual-only until GitHub SSH secrets are configured.

## Simple trial deployment

Open your Lightsail instance and click **Connect using SSH**, then run these commands one at a time:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git curl
cd ~
git clone https://github.com/JP3756/developer-portfolio.git
cd developer-portfolio
npm ci
npm run build
sudo npm install --global pm2
PORT=5000 NODE_ENV=production pm2 start server.js --name portfolio
pm2 save
```

In Lightsail **Networking**, add a custom TCP firewall rule for port `5000`, then open `http://YOUR_PUBLIC_IP:5000` in a browser.

To update the trial deployment later:

```bash
cd ~/developer-portfolio
git pull
npm ci
npm run build
pm2 restart portfolio
```

The commands below document the future automated setup.

## EC2 setup

On an Ubuntu EC2 instance, install Node.js, npm, and curl, then create the deployment directory:

```bash
sudo apt-get update
sudo apt-get install -y nodejs npm curl
sudo mkdir -p /var/www/portfolio
sudo chown -R "$USER":"$USER" /var/www/portfolio
```

The workflow installs PM2 automatically on the first deployment. Allow inbound SSH on port `22` and HTTP/HTTPS on ports `80` and `443` in the EC2 security group.

## GitHub Actions secrets

Add these repository secrets under **Settings > Secrets and variables > Actions**:

| Secret | Value |
| --- | --- |
| `EC2_HOST` | Public DNS name or IP address of the instance |
| `EC2_USER` | SSH user, such as `ubuntu` |
| `EC2_SSH_KEY` | Contents of the private SSH key used for the instance |

Optional secrets:

| Secret | Default |
| --- | --- |
| `EC2_PORT` | `22` |
| `EC2_APP_DIR` | `/var/www/portfolio` |
| `EC2_APP_PORT` | `5000` |

Push to `main` or `master` to deploy, or start the workflow manually from the **Actions** tab. The app health check runs at `/api/health` before the workflow succeeds.

## Public access

The Node server listens on port `5000` by default. For a domain and HTTPS, put Nginx in front of it and proxy requests to `http://127.0.0.1:5000`; do not expose port `5000` publicly when Nginx is configured.