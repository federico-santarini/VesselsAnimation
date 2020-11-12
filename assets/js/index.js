import { vesseldata,icedata,icedata_fromcsv, savePng } from './data.js';
import { loadMap } from './loadMap.js';
import { drawIceExtent, drawVesselsPointers, drawVesselsLines } from './chapters.js';


globalThis.margin = { top: 0, right: 0, bottom: 0, left: 0 },
    globalThis.height = 1080 - margin.left - margin.right,
    globalThis.width = 1920 - margin.top - margin.bottom;

let basemap = globalThis.d3.select('#map')
    .append('canvas')
    .attr('width', globalThis.width + 'px')
    .attr('height', globalThis.height + 'px')
    .attr('id', 'basemap')

globalThis.basemapCtx = basemap.node().getContext('2d')

globalThis.projection = globalThis.d3.geoOrthographic()
    .translate([globalThis.width / 2, globalThis.height / 2-200])
    .scale(1500)
    .rotate([-83,-90])
    .clipAngle(70)

loadMap(globalThis.projection, globalThis.basemapCtx);

drawVesselsPointers(false, 100);
drawVesselsLines(false, 100);
