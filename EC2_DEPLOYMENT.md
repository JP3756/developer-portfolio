# AWS EC2 Deployment

The `Deploy to AWS EC2` GitHub Actions workflow builds the React app and deploys the Express server to an EC2 instance over SSH.

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