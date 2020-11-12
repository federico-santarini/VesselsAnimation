
import { countries as countriesPromise } from './data.js';
import { boundaries as boundariesPromise } from './data.js';
import { glaciatedAreas as glaciatedAreasPromise } from './data.js';

export async function loadMap(projection,basemapCtx) {

/* Load Resources */
    const countries = await countriesPromise;
    const boundaries = await boundariesPromise;
    const glaciatedAreas = await glaciatedAreasPromise;


/* Projection & graticula */
    globalThis.path = globalThis.d3.geoPath()
        .projection(globalThis.projection)
        .context(basemapCtx)

    var graticule = globalThis.d3.geoGraticule()
         .step([30, 30]);

/* Elements */
    basemapCtx.clearRect(0, 0, globalThis.width, globalThis.height);

    basemapCtx.beginPath()
    globalThis.path({ type: "Sphere" })
    basemapCtx.strokeStyle = 'white'
    basemapCtx.fillStyle = 'black'
    basemapCtx.stroke()
    basemapCtx.fill()

    basemapCtx.beginPath()
    globalThis.path(graticule())
    basemapCtx.strokeStyle = 'white'
    basemapCtx.lineWidth = .5
    basemapCtx.stroke()

    var circle = d3.geoCircle().center([0, 90]).radius(5)
    basemapCtx.beginPath();
    globalThis.path(circle());
    basemapCtx.strokeStyle = 'white';
    basemapCtx.fillStyle = 'black'
    basemapCtx.lineWidth = .5
    basemapCtx.stroke();
    basemapCtx.fill()

    basemapCtx.beginPath();
    basemapCtx.strokeStyle = 'white';
    basemapCtx.lineWidth = .5;
    globalThis.path({type: 'Feature', geometry: {type: 'LineString', coordinates: [[0, 92], [0, 88]]}});
    basemapCtx.stroke();

    basemapCtx.beginPath();
    basemapCtx.strokeStyle = 'white';
    basemapCtx.lineWidth = 1;
    globalThis.path({type: 'Feature', geometry: {type: 'LineString', coordinates: [[90, 88], [90, 92]]}});
    basemapCtx.stroke();

    basemapCtx.beginPath()
    globalThis.path(countries)
    basemapCtx.strokeStyle = 'white'
    basemapCtx.lineWidth = 1
    basemapCtx.stroke()
    basemapCtx.fill()

    basemapCtx.beginPath()
    globalThis.path(boundaries)
    basemapCtx.strokeStyle = 'white'
    basemapCtx.lineWidth = 1
    basemapCtx.stroke()
    basemapCtx.fill()

    basemapCtx.beginPath()
    globalThis.path(glaciatedAreas)
    basemapCtx.fillStyle = '#c8c8c8'
    basemapCtx.fill()

};
