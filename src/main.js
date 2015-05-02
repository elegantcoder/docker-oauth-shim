var connect = require("connect")
var http = require("http")

var oauthShim = require("oauth-shim")

var app = connect()
app.use(oauthShim)
app.listen(80)