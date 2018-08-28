const express = require('express');
const os = require('os');
const session = require('express-session');
const genomeLink = require('genomelink-node');

const app = express();

app.use(express.static('dist'));

app.use(session({
  secret: 'YOURSECRET',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));


app.get('/api/getreports', async (req, res) => {
  const scope = 'report:alcohol-drinking-behavior report:caffeine-consumption report:conscientiousness report:depression report:endurance-performance report:extraversion report:hearing-function report:mathematical-ability report:novelty-seeking report:openness report:reading-and-spelling-ability report:word-reading-ability';
  const authorizeUrl = genomeLink.OAuth.authorizeUrl({ scope: scope });

  // Fetching a protected resource using an OAuth2 token if exists.
  let reports = [];
  if (req.session.oauthToken) {
    const scopes = scope.split(' ');
    reports = await Promise.all(scopes.map( async (name) => {
      return await genomeLink.Report.fetch({
        name: name.replace(/report:/g, ''),
        population: 'european',
        token: req.session.oauthToken
      });
    }));
  }

  res.send({
    authorize_url: authorizeUrl,
    reports: reports,
  });
});

app.get('/callback', async (req, res) => {
  // The user has been redirected back from the provider to your registered
  // callback URL. With this redirection comes an authorization code included
  // in the request URL. We will use that to obtain an access token.
  req.session.oauthToken = await genomeLink.OAuth.token({ requestUrl: req.url });

  // At this point you can fetch protected resources but lets save
  // the token and show how this is done from a persisted token in index page.
  res.redirect('/');
});


app.listen(8080, () => console.log('Listening on port 8080!'));
