var $ = require("./lib/qsa");
var xhr = require("./lib/xhr");
var dot = require("./lib/dot");
// require("component-leaflet-map");

// var popupTemplate = dot.compile(require("./_popup.html"));
// var legendTemplate = dot.compile(require("./_legend.html"));

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

// var mapElement = $.one("leaflet-map.community-centers");
// var map = mapElement.map;
// var leaflet = mapElement.leaflet;

// var geojson = {
//   community_centers: null,
//   under18_pop: null
// };

// var markerLayer = new leaflet.FeatureGroup();

// var mapColorsAndLegend = function() {
//   var opacity= 0.5;
//   var thresholds = [0, 0.05, 0.1, 0.15, 0.2, 0.25];
//   var colors = ['#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b'];

//   // Draw legend
//   $.one('aside.legend').innerHTML = legendTemplate({ thresholds, colors, interval: 5, opacity });

//   // descending for thresholds.findIndex
//   thresholds.reverse();
//   colors.reverse();

//   return [thresholds, colors, opacity];
// };

// var init = function() {
//   if (!geojson.community_centers || !geojson.under18_pop) return;

//   // add community centers
//   geojson.community_centers.features.forEach(function(feature) {
//     var coords = feature.geometry.coordinates.reverse();
//     var { name, TeenBudget, Budget } = feature.properties;
//     var marker = new leaflet.Marker(coords, {
//       icon: new leaflet.DivIcon({
//         className: "center-marker",
//         iconSize: [8, 8],
//       }),
//       keyboard: false,
//       interactive: false,
//     });
//     marker.addTo(markerLayer);
//   });
//   markerLayer.addTo(map);

//   //add youth data
//   var [thresholds, colors, fillOpacity] = mapColorsAndLegend();
//   var youthValues = geojson.under18_pop.features.map(f => Number(f.properties["Under18%"]));
//   var style = function(feature) {
//     var popPercent = +feature.properties["Under18%"];
//     var colorIndex = thresholds.findIndex(t => (popPercent >= t));
//     var fillColor = colors[colorIndex];
//     var weight = 1;
//     var opacity = 0.1;
//     if (feature.properties.NEIGHNAME === "South Park") { // highlight South Park with border
//       weight = 2;
//       opacity = 1;
//     }
//     return {
//       fillColor,
//       fillOpacity,
//       weight,
//       color: "black",
//       opacity,
//     }
//   };
//   var onEachFeature = function(feature, layer) {
//     layer.bindPopup(popupTemplate({
//       name: feature.properties.NEIGHNAME,
//       youthPercent: Math.round(10000 * feature.properties["Under18%"]) / 100,
//       pop: insertCommas(feature.properties.Pop)
//     }));
//     layer.on({
//       mouseover() {
//         layer.setStyle({ fillOpacity: 1 });
//       },
//       mouseout() {
//         layer.setStyle({ fillOpacity });
//       }
//     })
//   };
//   var youthLayer = new leaflet.GeoJSON(geojson.under18_pop, { style, onEachFeature });
//   youthLayer.addTo(map);
//   map.fitBounds(youthLayer.getBounds());
//   map.scrollWheelZoom.disable();
// };

// Object.keys(geojson).forEach(k => xhr(`./assets/${k}.geo.json`, (err, data) => {
//   geojson[k] = data;
//   init();
// }));

// var canopyMaps = $(".canopy-map");
// var canopyToggle = $.one("#canopy-toggle");
// var otherMessage = "Show<br>South<br>Park"
// canopyToggle.addEventListener("click", () => {
//   canopyMaps.forEach((cm) => {
//     cm.classList.toggle('hidden');
//   });
//   [canopyToggle.innerHTML, otherMessage] = [otherMessage, canopyToggle.innerHTML];
// })
