# Minitube App

This app was created to practice building a simple app with React.

It let users search for a keyword to look up on Youtube and instantly return the top 5 results.

![screenshot-localhost-8080-2018 04 12-21-36-09](https://user-images.githubusercontent.com/21099219/38677994-d2e59d82-3e9a-11e8-8c23-d9d7d81201e5.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

* Google Youtube API key
* React
* Webpack+Babel
* Lodash

### Youtube API Key

To get started you also need an API key for Youtube. Create a file under `./config/keys.js`:

```js
module.exports = {
  youtubeAPI: 'Your_Key'
};
```

### Installing

```bash
yarn install
```

### Development

Run webpack development server:

```bash
yarn start
```