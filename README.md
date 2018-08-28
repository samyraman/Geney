# Geney


A genome-based Meetup recommendation engine built on React, Node.js, Express and Webpack. It uses the [Genomelink](https://genomelink.io/developers/) and Meetup APIs.

## How to run

### Register your app

Visit "My apps" console and set

- Name: as you like
- Redirect uris: `http://127.0.0.1:8080/callback`

Set scopes (whitelists) in "Authorization scopes" panel.
- [x] report:endurance-performance
- [x] report:alcohol-drinking-behavior
- [x] report:caffeine-consumption
- [x] report:reading-and-spelling-ability
- [x] report:word-reading-ability
- [x] report:mathematical-ability
- [x] report:hearing-function
- [x] report:novelty-seeking
- [x] report:depression
- [x] report:openness
- [x] report:conscientiousness
- [x] report:extraversion

### Run your app

```
$ npm install
$ export GENOMELINK_CLIENT_ID=<your_client_id>
$ export GENOMELINK_CLIENT_SECRET=<your_client_secret>
$ export GENOMELINK_CALLBACK_URL="http://127.0.0.1:8080/callback"
$ npm start
```

then, visit `http://127.0.0.1:8080`
