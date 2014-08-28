var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "*.arabia.io",
  contentStyleFile: self.data.url("github.css"),
  contentScriptFile: [self.data.url("jquery-1.11.1.js"),self.data.url("MathJax.js"),self.data.url("highlight.js"),self.data.url("js.js")]
});
// jquery Library Downloaded From : http://code.jquery.com/jquery-1.11.1.js
// MathJax Library Downloaded From : https://github.com/mathjax/MathJax/blob/master/unpacked/MathJax.js
// highlight Library Downloaded From : https://github.com/isagalaev/highlight.js/blob/master/src/highlight.js