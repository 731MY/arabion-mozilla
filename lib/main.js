var pageMod = require("sdk/page-mod");
var self = require("sdk/self").data;

pageMod.PageMod({
  include: "*.arabia.io",
  contentStyleFile: self.url("github.css"),
  contentScriptFile: [self.url("jquery.js"),self.url("MathJax.js"),self.url("highlight.pack.js"),self.url("js.js")]
});