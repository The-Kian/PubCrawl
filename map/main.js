//Import stuff from openmap api

import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';





var map = new Map({ //new map
  target: 'map-container', // throw it in map-container
  layers: [
    new TileLayer({
      source: new OSM(), //chuck  map on a layer
    }),
    new VectorLayer({ //layer for details
      source: new VectorSource({       //source for info
          format: new GeoJSON(),  //GeoJSON is a filetype
          url: './data/pubs.json' //pub info
      })
    })
  ],
  view: new View({ //View
    center: fromLonLat([	-1.548567, 	53.801277]), //center on leeds
    zoom: 12, //zoom in 
  }),
});

var markers = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'marker.png'
    })
  })
});

map.addLayer(markers);