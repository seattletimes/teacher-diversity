var $ = require("./lib/qsa");
var xhr = require("./lib/xhr");
var dot = require("./lib/dot");


var insertCommas = function insertCommas(n) {
  var input = String(n).split('');
  var result = [];
  var count = 0;
  while (input.length > 0) {
    if (count === 3) {
      result.push(',');
      count = 0;
    }
    result.push(input.pop());
    count += 1;
  }
  return result.reverse().join('');
};

$(".tabset").forEach(function(container) {

  container.classList.add("ready");

  var onClickTab = function(e) {
    e.preventDefault();
    if (this.classList.contains("selected")) return;
    container.querySelector(".selected").classList.remove("selected");
    this.classList.add("selected");
    container.querySelector(".show").classList.remove("show");
    var selector = this.getAttribute("href");
    var tab = container.querySelector(selector);
    tab.classList.add("show");
  };

  $(".tabs a", container).forEach(a => a.addEventListener("click", onClickTab));

});
