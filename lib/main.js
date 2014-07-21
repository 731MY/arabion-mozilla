var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "*.arabia.io",
  contentStyleFile: self.data.url("github.css"),
  contentScriptFile: [self.data.url("jquery.js"),self.data.url("MathJax.js"),self.data.url("highlight.pack.js"),self.data.url("js.js")]
});