// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("./tabs");
require("./map");

// var $ = require("./lib/qsa");

// scroll content

// var debounce = require("./lib/debounce");
// var Camera = require("savage-camera");
// var savage = require("savage-query");

// var keyStage = document.querySelector(".scroll-content");
// var intro = document.querySelector(".backdrop svg");
// var camera = new Camera(intro);
// var stages = $(".layer").reverse();
// var current = null;
// var existing = document.querySelector("#Existing");

// var onScroll = function() {
//   var scrollBounds = keyStage.getBoundingClientRect();
//   for (var i = 0; i < stages.length; i++) {
//     var stage = stages[i];
//     var bounds = stage.getBoundingClientRect();
//     if (bounds.top < window.innerHeight && bounds.bottom > 0) {
//       var layerID = stage.getAttribute("data-layer");
//       if (layerID == current) return;
//       var layer = document.querySelector("#" + layerID);
//       if (!layer) return;
//       if (layerID != "Existing") {
//         savage(intro).addClass("zoomed");
//       } else {
//         savage(intro).removeClass("zoomed");
//       }
//       var active = document.querySelector(".activated");
//       if (active) savage(active).removeClass("activated");
//       savage(layer).addClass("activated");
//       current = layerID;
//       camera.zoomTo(layer);
//       return;
//     }
//   }
// }

// window.addEventListener("scroll", debounce(onScroll, 500));
// onScroll();

