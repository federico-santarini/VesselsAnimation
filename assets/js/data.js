
// basemap
export const countries = globalThis.d3.json('/assets/json/basemap/10_countries.geojson');
export const boundaries = globalThis.d3.json('/assets/json/basemap/110_boundaries.geojson');
export const glaciatedAreas = globalThis.d3.json('/assets/json/basemap/10_glaciated_areas.geojson');

export function vesseldata(shipname) {
    return globalThis.d3.csv('/assets/data/vessels/'+ shipname +'.csv');
}

export async function icedata(date) {
    return globalThis.d3.json('/assets/json/ice_ext/N_'+ date +'_extent.geojson');
}

export async function icedata_fromcsv(csvFile) {
  console.log('start importing files from',csvFile);
  let filenames = [];
  let jsonList = [];
  let csv = await globalThis.d3.csv('/assets/data/' + csvFile, function(d) {filenames.push(String(d.filename));});

  for (let i in filenames) {

    console.log(filenames[i]);

    let json = await globalThis.d3.json(filenames[i]);
    jsonList.push(json);
  };
  console.log(csvFile,' files  imported');
  return jsonList
}

export async function savePng(elementId, filename) {
  var canvas = document.getElementById(elementId);
  canvas.toBlob(function(blob) {
      saveAs(blob, filename);
  });

}
