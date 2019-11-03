[![Netlify Status](https://api.netlify.com/api/v1/badges/ca099450-2f14-407a-9ce8-2a5ba94485ef/deploy-status)](https://app.netlify.com/sites/room-web/deploys)
[![Maintainability](https://api.codeclimate.com/v1/badges/873d62db9e40af3215f4/maintainability)](https://codeclimate.com/github/roavellarm/room-web/maintainability)


# Room

![meeting room](https://raw.githubusercontent.com/roavellarm/room-web/master/public/images/meeting-room.jpg)

The Room project is a web application that aims to improve the interaction experience of remote workers.

You can get the [Room API](https://github.com/roavellarm/room-api), the [Endpoints documentation](https://github.com/roavellarm/room-api/blob/master/schema/api.md) and the [MVP Process Documentation](https://github.com/roavellarm/room-doc/blob/master/README.md) on github.

Check the working application <a href="https://room-web.netlify.com/" target="_blank">here</a>.

<br>

## Installation (Stand Alone)

Open terminal and run the command below to clone this repository.

```shell
$ git clone git@github.com:roavellarm/room-web.git

$ cd room-web
```

<br />

In the project directory, install dependencies by running:

```
$ yarn install
```

<br />

You'll need to add the ambient variables to the following env files:

```shell
# To add .env.development run
$ cat > ./.env.development << ENDOFFILE
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MIXPANEL_TOKEN=xxxxxxxxxxxxxxxx
ENDOFFILE

# To add .env.test run
$ cat > ./.env.test << ENDOFFILE
REACT_APP_API_URL=<Put_your_staging_Api_url_here>
REACT_APP_MIXPANEL_TOKEN=<Put_your_MixPanel_token_here>
ENDOFFILE

# To add .env.production run
$ cat > ./.env.production << ENDOFFILE
REACT_APP_API_URL=<Put_your_production_Api_url_here>
REACT_APP_MIXPANEL_TOKEN=<Put_your_MixPanel_token_here>
ENDOFFILE
```

<br />

To start the application in the development mode, run:

```
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

<br />

```shell
$ yarn build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
