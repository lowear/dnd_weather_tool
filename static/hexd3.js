var data = [
    {title: "Radial Tidy Tree", url: "https://observablehq.com/@d3/radial-tidy-tree"},
    {title: "Factorisation Diagrams", url: "https://www.jasondavies.com/factorisation-diagrams/"},
    {title: "Phylogenetic Tree of Life", url: "https://observablehq.com/@mbostock/tree-of-life"},
    {title: "Geographic Clipping", url: "https://www.jasondavies.com/maps/clip/"},
    {title: "Les Misérables Co-occurrence Matrix", url: "https://bost.ocks.org/mike/miserables/"},
    {title: "L*a*b* and HCL color spaces", url: "https://bl.ocks.org/mbostock/3014589"},
    {title: "Treemap", url: "https://observablehq.com/@d3/treemap"},
    {title: "Map Projection Transitions", url: "https://www.jasondavies.com/maps/transition/"},
    {title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html"},
    {title: "Rotating Voronoi", url: "https://observablehq.com/@mbostock/rotating-voronoi"},
    {title: "Zoomable Geography", url: "https://bl.ocks.org/mbostock/2374239"},
    {title: "Fisheye Distortion", url: "https://bost.ocks.org/mike/fisheye/"},
    {title: "Geodesic Rainbow", url: "https://observablehq.com/@mbostock/geodesic-rainbow"},
    {title: "Hierarchical Bar Chart", url: "https://bl.ocks.org/mbostock/1283663"},
    {title: "Exoplanets", url: "https://observablehq.com/@mbostock/exoplanets"},
    {title: "Crossfilter", url: "http://square.github.io/crossfilter/"},
    {title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming"},
    {title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/"},
    {title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html"},
    {title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html"},
    {title: "Reprojected Raster Tiles", url: "https://www.jasondavies.com/maps/raster/"},
    {title: "Hive Plots", url: "https://bost.ocks.org/mike/hive/"},
    {title: "Donut Transitions", url: "https://bl.ocks.org/mbostock/4341417"},
    {title: "Non-Contiguous Cartogram", url: "https://bl.ocks.org/mbostock/4055908"},
    {title: "Tadpoles", url: "https://observablehq.com/@mbostock/tadpoles"},
    {title: "Zoomable Circle Packing", url: "https://observablehq.com/@d3/zoomable-circle-packing"},
    {title: "Transform Transitions", url: "https://bl.ocks.org/mbostock/1345853"},
    {title: "Scatterplot Matrix", url: "https://observablehq.com/@d3/scatterplot-matrix"},
    {title: "Janet L. Yellen, on the Economy’s Twists and Turns", url: "http://www.nytimes.com/interactive/2013/10/09/us/yellen-fed-chart.html"},
    {title: "Front Row to Fashion Week", url: "http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html"},
    {title: "Interrupted Sinu-Mollweide", url: "https://observablehq.com/@d3/interrupted-sinu-mollweide"},
    {title: "Streamgraph", url: "https://observablehq.com/@mbostock/streamgraph-transitions"},
    {title: "Force-Directed Graph", url: "https://observablehq.com/@d3/force-directed-graph"},
    {title: "Zoomable Icicle", url: "https://observablehq.com/@d3/zoomable-icicle"},
    {title: "Collision Detection", url: "https://bl.ocks.org/mbostock/3231298"},
    {title: "Waterman Butterfly", url: "https://bl.ocks.org/mbostock/4458497"},
    {title: "Airocean projection", url: "https://observablehq.com/@fil/airocean-projection"},
    {title: "Countries by Area", url: "https://www.jasondavies.com/maps/countries-by-area/"},
    {title: "Zoomable Sunburst", url: "https://observablehq.com/@d3/zoomable-sunburst"},
    {title: "Map Zooming", url: "https://bl.ocks.org/mbostock/6242308"},
    {title: "Fisher–Yates Shuffle", url: "https://bost.ocks.org/mike/shuffle/"},
    {title: "Sphere Spirals", url: "https://www.jasondavies.com/maps/sphere-spirals/"},
    {title: "World Tour", url: "https://observablehq.com/@mbostock/world-tour"},
    {title: "Zoomable Treemaps", url: "https://bost.ocks.org/mike/treemap/"},
    {title: "Clipped Map Tiles", url: "https://bl.ocks.org/mbostock/4150951"},
    {title: "Horizon Chart", url: "https://observablehq.com/@d3/horizon-chart"},
    {title: "Voronoi Labels", url: "https://observablehq.com/@mbostock/d3-voronoi-labels"},
    {title: "Hexbin Map", url: "https://observablehq.com/@d3/hexbin-map"},
    {title: "OMG Particles!", url: "https://bl.ocks.org/mbostock/1062544"},
    {title: "Calendar View", url: "https://observablehq.com/@d3/calendar-view"},
    {title: "The Wealth & Health of Nations", url: "https://bost.ocks.org/mike/nations/"},
    {title: "Collapsible Tree", url: "https://observablehq.com/@d3/collapsible-tree"},
    {title: "Hexagonal Binning", url: "https://observablehq.com/@d3/hexbin"},
    {title: "Over the Decades, How States Have Shifted", url: "http://www.nytimes.com/interactive/2012/10/15/us/politics/swing-history.html"},
    {title: "China Still Dominates, but Some Manufacturers Look Elsewhere", url: "http://www.nytimes.com/interactive/2013/04/08/business/global/asia-map.html"},
    {title: "Strikeouts on the Rise", url: "http://www.nytimes.com/interactive/2013/03/29/sports/baseball/Strikeouts-Are-Still-Soaring.html?ref=baseball"},
    {title: "Epicyclic Gearing", url: "https://observablehq.com/@mbostock/epicyclic-gearing"},
    {title: "Voronoi Particles", url: "https://observablehq.com/@mbostock/voronoi-particles"},
    {title: "The state of our union is … dumber", url: "http://www.guardian.co.uk/world/interactive/2013/feb/12/state-of-the-union-reading-level"},
    {title: "Chord Dependency Diagram", url: "https://observablehq.com/@d3/chord-dependency-diagram"},
    {title: "Floating Landmasses", url: "https://observablehq.com/@mbostock/floating-landmasses"},
    {title: "How the Tax Burden Has Changed", url: "http://www.nytimes.com/interactive/2012/11/30/us/tax-burden.html"},
    {title: "Prime Number Patterns", url: "https://www.jasondavies.com/primos/"},
    {title: "Koalas to the Max", url: "http://www.koalastothemax.com/"},
    {title: "Constellations of Directors and Their Stars", url: "http://www.nytimes.com/newsgraphics/2013/09/07/director-star-chart/index.html"},
    {title: "Drought and Deluge in the Lower 48", url: "http://www.nytimes.com/interactive/2012/08/11/sunday-review/drought-history.html"},
    {title: "Animated Bézier Curves", url: "https://www.jasondavies.com/animated-bezier/"},
    {title: "Histogram", url: "https://observablehq.com/@d3/histogram"},
    {title: "Stacked-to-Grouped Bars", url: "https://observablehq.com/@d3/stacked-to-grouped-bars"},
    {title: "Force-Directed States of America", url: "https://bl.ocks.org/mbostock/1073373"},
    {title: "Faux-3D Arcs", url: "http://bl.ocks.org/dwtkns/4973620"},
    {title: "512 Paths to the White House", url: "http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html"},
    {title: "Polar Clock", url: "https://observablehq.com/@mbostock/polar-clock"},
    {title: "Population Pyramid", url: "https://observablehq.com/@mbostock/u-s-population-by-age-and-sex/3"},
    {title: "The America’s Cup Finale: Oracle’s Path to Victory", url: "http://www.nytimes.com/interactive/2013/09/25/sports/americas-cup-course.html"},
    {title: "Rainbow Worm", url: "https://observablehq.com/@mbostock/rainbow-worm"},
    {title: "Four Ways to Slice Obama’s 2013 Budget Proposal", url: "http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html"},
    {title: "Quadtree", url: "https://bl.ocks.org/mbostock/4343214"},
    {title: "Bubble Chart", url: "https://observablehq.com/@d3/bubble-chart"},
    {title: "Women as Academic Authors, 1665-2010", url: "http://chronicle.com/article/Woman-as-Academic-Authors/135192/"},
    {title: "Choropleth", url: "https://observablehq.com/@d3/choropleth"},
    {title: "Gilbert’s Two-World Perspective", url: "https://www.jasondavies.com/maps/gilbert/"},
    {title: "For Eli Manning, 150 Games and Counting", url: "http://www.nytimes.com/newsgraphics/2013/09/28/eli-manning-milestone/index.html"},
    {title: "Word Tree", url: "https://www.jasondavies.com/wordtree/"},
    {title: "Mobile Patent Suits", url: "https://bl.ocks.org/mbostock/1153292"},
    {title: "Mitchell’s Best-Candidate", url: "https://bl.ocks.org/mbostock/1893974"},
    {title: "Sankey Diagrams", url: "https://observablehq.com/@d3/sankey-diagram"},
    {title: "van Wijk Smooth Zooming", url: "https://bl.ocks.org/mbostock/3828981"},
    {title: "Bryce Harper: A swing of beauty", url: "http://www.washingtonpost.com/wp-srv/special/sports/bryce-harper-swing-of-beauty/"},
    {title: "Dissecting a Trailer: The Parts of the Film That Make the Cut", url: "http://www.nytimes.com/interactive/2013/02/19/movies/awardsseason/oscar-trailers.html"},
    {title: "Violence and guns in best-selling video games", url: "http://www.guardian.co.uk/world/interactive/2013/apr/30/violence-guns-best-selling-video-games"},
    {title: "Hierarchical Edge Bundling", url: "https://observablehq.com/@d3/hierarchical-edge-bundling"},
    {title: "Geographic Bounding Boxes", url: "https://www.jasondavies.com/maps/bounds/"},
    {title: "Live Results: Massachusetts Senate Special Election", url: "http://elections.huffingtonpost.com/2013/massachusetts-senate-results"},
    {title: "Zoomable Map Tiles", url: "https://bl.ocks.org/mbostock/4132797"},
    {title: "D3 Show Reel", url: "https://bl.ocks.org/mbostock/1256572"},
    {title: "Building Hamiltonian Graphs from LCF Notation", url: "http://christophermanning.org/projects/building-cubic-hamiltonian-graphs-from-lcf-notation"},
    {title: "Sequences sunburst", url: "https://bl.ocks.org/kerryrodden/766f8f6d31f645c39f488a0befa1e3c8"},
    {title: "Azimuth and Distance from London", url: "https://www.jasondavies.com/maps/azimuth-distance/"},
    {title: "Parallel Sets", url: "https://www.jasondavies.com/parallel-sets/"}
];

data.forEach(function(d, i) {
  d.i = i % 10;
  d.j = i / 10 | 0;
});

var height = 460, // THIS BIT SETS THE HEIGHT OF THE HEX GRID! ****************
    radius = 50,  // THIS BIT TOGGLES THE HEX SIZE! ***************************
    depth = 4;

var currentFocus = [innerWidth / 2, height / 2],
    desiredFocus,
    idle = true;

var hexbin = d3.hexbin()
    .radius(radius);

if (!("ontouchstart" in document)) d3.select("#examples")
    .on("mousemove", mousemoved);

var deep = d3.select("#examples-deep");

var canvas = deep.append("canvas")
    .attr("height", height);

var context = canvas.node().getContext("2d");

var svg = deep.append("svg")
    .attr("height", height);

var mesh = svg.append("path")
    .attr("class", "example-mesh");

var anchor = svg.append("g")
      .attr("class", "example-anchor")
    .selectAll("a");

var graphic = deep.selectAll("svg,canvas");

d3.select(window)
    .on("resize", resized)
    .each(resized);

function drawImage(d) {
  context.save();
  context.beginPath();
  context.moveTo(0, -radius);

  for (var i = 1; i < 6; ++i) {
    var angle = i * Math.PI / 3,
        x = Math.sin(angle) * radius,
        y = -Math.cos(angle) * radius;
    context.lineTo(x, y);
  }
}

function resized() {
  var deepWidth = innerWidth * (depth + 1) / depth,
      deepHeight = height * (depth + 1) / depth,
      centers = hexbin.size([deepWidth, deepHeight]).centers();

  desiredFocus = [innerWidth / 2, height / 2];
  moved();

  graphic
      .style("left", Math.round((innerWidth - deepWidth) / 2) + "px")
      .style("top", Math.round((height - deepHeight) / 2) + "px")
      .attr("width", deepWidth)
      .attr("height", deepHeight);

  centers.forEach(function(center, i) {
    center.j = Math.round(center[1] / (radius * 1.5));
    center.i = Math.round((center[0] - (center.j & 1) * radius * Math.sin(Math.PI / 3)) / (radius * 2 * Math.sin(Math.PI / 3)));
    context.save();
    context.translate(Math.round(center[0]), Math.round(center[1]));
    drawImage(center.example = data[(center.i % 10) + ((center.j + (center.i / 10 & 1) * 5) % 10) * 10]);
    context.restore();
  });

  mesh.attr("d", this.hexbin.mesh);

  anchor = this.anchor.data(centers, function(d) { return d.i + "," + d.j; });

  anchor.exit().remove();

  var anchorEnter = this.anchor.enter().append("a")
      .attr("xlink:href", function(d) { return d.example.url; })
      .attr("xlink:title", function(d) { return d.example.title; });

  anchorEnter.append("path")
      .attr("d", this.hexbin.hexagon());

  this.anchor = anchorEnter.merge(this.anchor)
      .attr("transform", function(d) { return "translate(" + d + ")"; });
}

function mousemoved() {
  var m = d3.mouse(this);

  desiredFocus = [
    Math.round((m[0] - innerWidth / 2) / depth) * depth + innerWidth / 2,
    Math.round((m[1] - height / 2) / depth) * depth + height / 2
  ];

  moved();
}

function moved() {
  if (idle) d3.timer(function() {
    if (idle = Math.abs(desiredFocus[0] - currentFocus[0]) < .5 && Math.abs(desiredFocus[1] - currentFocus[1]) < .5) currentFocus = desiredFocus;
    else currentFocus[0] += (desiredFocus[0] - currentFocus[0]) * .14, currentFocus[1] += (desiredFocus[1] - currentFocus[1]) * .14;
    return idle;
  });
}