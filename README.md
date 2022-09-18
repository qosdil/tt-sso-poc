# tiptip-sso-poc

This app and the `bizcenter-tiptip-sso-poc` app are a proof of concept of Cognito session integration between Tiptip main web app with the upcoming Tiptip Business Center web app.

## Prerequisites

* macOS (Developed on macOS 12)
* Node.js v16
* [Homebrew](https://brew.sh)

## Deployment

Make sure that your system has met the prerequisites above before running the following deployment steps.

### Clone The Repository
    $ git clone <repo_url>

### Install mkcert

Install mkcert by using Homebrew:

    $ brew install mkcert

### Create Local CA

This will make your macOS as a certificate authority.

    $ mkcert -install

### Create a Certificate

From the inside of the repo, create a new certificate:

    $ mkcert tiplocal.studio "*.tiplocal.studio"

### Update macOS Hosts File

Update your system's hosts file by inserting the following lines:

    127.0.0.1	tiplocal.studio
    
### Forward Port 9000 to 443

Run this command for the port forwarding:

    $ echo "
    rdr pass inet proto tcp from any to any port 443 -> 127.0.0.1 port 9000
    " | sudo pfctl -ef -

### Update Credential Values

Use your Javascript editor to open `/src/index.js` and update the credential values listed below with the real values.

    __EMAIL__
    __PASSWORD__
    __USER_POOL_ID__
    __CLIENT_ID__

### Install Packages
    $ npm install

### Run The Application
    $ npx webpack serve --mode=development

## Result

To see the result, use a web browser and visit https://tiplocal.studio. Before clicking the **Biz Center** link, deploy the `bizcenter-tiptip-sso-poc` app, see its Readme file for the guide.

***
&copy; 2022 Tiptip.tv.