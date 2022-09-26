//Import stuff from openmap api

import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


new Map({ //new map
  target: 'map-container', // throw it in map-container
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer({ //
      source: new VectorSource({
        source: new VectorSource({
          format: new GeoJSON(),
          url: './data/countries.json'
        })
      })
    })
  ],
  view: new View({
    center: fromLonLat([	-1.548567, 	53.801277]),
    zoom: 12,
  }),
});
