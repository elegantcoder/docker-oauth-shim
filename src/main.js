var express = require("express")
var oauthShim = require("oauth-shim")

var oauthShimConfig = JSON.parse(process.env.OAUTH)
if (oauthShimConfig == null) {
  throw new Error("You must define OAUTH environment variable to specify client ID's and secret (see https://www.npmjs.com/package/oauth-shim)")
}

console.log("Client IDs", Object.keys(oauthShimConfig))

oauthShim.init(oauthShimConfig)

var app = express()
app.all('/', function (req, res, next) {
  console.log(req.method + ' ' +req.originalUrl);
  next();
})
app.all('/', oauthShim);
app.listen(80)
