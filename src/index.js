console.log('Hello, world!');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXNobGV5Y29sbGlzIiwiYSI6ImNrMTZseWZ1dDAyZXgzY25vcXcyYzYxNGQifQ.tqo1CssKWX4jxz1qk7Epgg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const doggo = document.createElement('div');
doggo.className = 'marker';
// make a marker for each feature and add to the map

new mapboxgl.Marker(doggo).setLngLat([-74.009151, 40.705086]).addTo(map);
