import { vesseldata, savePng } from './data.js';
import { parseShipLine, parseShipPointer, parseIceExtent } from './parseData.js';

export async function drawIceExtent(jsonData){
  let data = await globalThis.d3.csv('/assets/data/chapter1_icedata_topo.csv');
  let min_ext;
  let duration = 40

  let icemap = globalThis.d3.select('#map')
      .append('canvas')
      .attr('id', 'ice')
      .attr('width', globalThis.width + 'px')
      .attr('height', globalThis.height + 'px')

  let icemapCtx = icemap.node().getContext('2d')


  for (let i in jsonData) {

      setTimeout(function () {
        icemapCtx.clearRect(0, 0, globalThis.width, globalThis.height);
        parseIceExtent(jsonData[i], icemapCtx);
      }, i*duration);

  };
}

export async function drawVesselsPointers(save, duration){
  let shipLine = globalThis.d3.select('#map')
      .append('canvas')
      .attr('width', globalThis.width + 'px')
      .attr('height', globalThis.height + 'px')
      .attr('id', 'shipLine');

  let ctx = shipLine.node().getContext('2d')

  let timestamps = await vesseldata('2H/timestamps_2h');
  let christophe = await vesseldata('2H/CHRISTOPHE-DE-MARGERIE_2h');
  let borisdavyd = await vesseldata('2H/Boris-Davydov_2h');
  let borisvilki = await vesseldata('2H/BORIS-VILKITSKY_2h');
  let eduardtoll = await vesseldata('2H/EDUARD-TOLL_2h');
  let fedorlitke = await vesseldata('2H/FEDOR-LITKE_2h');
  let georgiybru = await vesseldata('2H/GEORGIY-BRUSILOV_2h');
  let nikolayzub = await vesseldata('2H/NIKOLAY-ZUBOV_2h');
  let rudolfsamo = await vesseldata('2H/RUDOLF-SAMOYLOVICH_2h');
  let vladimirru = await vesseldata('2H/VLADIMIR-RUSANOV_2h');
  let vladimirvi = await vesseldata('2H/VLADIMIR-VIZE_2h');

  for (let i in timestamps) {
      setTimeout(function () {
          ctx.clearRect(0,0,1920,1080);
          parseShipPointer(christophe, i, duration, '#6699ff', ctx);
          parseShipPointer(borisdavyd, i, duration, '#3366cc', ctx);
          parseShipPointer(borisvilki, i, duration, '#cc99ff', ctx);
          parseShipPointer(eduardtoll, i, duration, '#ffcc00', ctx);
          parseShipPointer(fedorlitke, i, duration, '#5ca482', ctx);
          parseShipPointer(georgiybru, i, duration, '#666600', ctx);
          parseShipPointer(nikolayzub, i, duration, '#ffffff', ctx);
          parseShipPointer(rudolfsamo, i, duration, '#996633', ctx);
          parseShipPointer(vladimirru, i, duration, '#ff0000', ctx);
          parseShipPointer(vladimirvi, i, duration, '#993366', ctx);

          if (save == true) {
            savePng('shipLine','vesselsPointers.png');
          }

      }, i*duration);
  };

}

export async function drawVesselsLines(save, duration){
  let shipLine = globalThis.d3.select('#map')
      .append('canvas')
      .attr('width', globalThis.width + 'px')
      .attr('height', globalThis.height + 'px')
      .attr('id', 'shipLine')

  let ctx = shipLine.node().getContext('2d')

  let timestamps = await vesseldata('2H/timestamps_2h');
  let christophe = await vesseldata('2H/CHRISTOPHE-DE-MARGERIE_2h');
  let borisdavyd = await vesseldata('2H/Boris-Davydov_2h');
  let borisvilki = await vesseldata('2H/BORIS-VILKITSKY_2h');
  let eduardtoll = await vesseldata('2H/EDUARD-TOLL_2h');
  let fedorlitke = await vesseldata('2H/FEDOR-LITKE_2h');
  let georgiybru = await vesseldata('2H/GEORGIY-BRUSILOV_2h');
  let nikolayzub = await vesseldata('2H/NIKOLAY-ZUBOV_2h');
  let rudolfsamo = await vesseldata('2H/RUDOLF-SAMOYLOVICH_2h');
  let vladimirru = await vesseldata('2H/VLADIMIR-RUSANOV_2h');
  let vladimirvi = await vesseldata('2H/VLADIMIR-VIZE_2h');

  for (let i in timestamps) {
      setTimeout(function () {
          parseShipLine(christophe, i, duration, '#6699ff', ctx);
          parseShipLine(borisdavyd, i, duration, '#3366cc', ctx);
          parseShipLine(borisvilki, i, duration, '#cc99ff', ctx);
          parseShipLine(eduardtoll, i, duration, '#ffcc00', ctx);
          parseShipLine(fedorlitke, i, duration, '#5ca482', ctx);
          parseShipLine(georgiybru, i, duration, '#666600', ctx);
          parseShipLine(nikolayzub, i, duration, '#ffffff', ctx);
          parseShipLine(rudolfsamo, i, duration, '#996633', ctx);
          parseShipLine(vladimirru, i, duration, '#ff0000', ctx);
          parseShipLine(vladimirvi, i, duration, '#993366', ctx);

          if (save == true) {
            savePng('shipLine','vesselsPointers.png');
          }

      }, i*duration);
  };

}
