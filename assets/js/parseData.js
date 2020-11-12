export async function parseShipLine(vesselName, i, duration, color, context) {

    let element = vesselName[i];
    let previousElement = vesselName[i - 1];

    if (previousElement == undefined) { previousElement = element; };

    globalThis.shipPath = globalThis.d3.geoPath().projection(globalThis.projection).context(context)

    let x1 = element.lon
    let y1 = element.lat
    let x2 = previousElement.lon
    let y2 = previousElement.lat

    context.beginPath()
    globalThis.shipPath({type: 'Feature', geometry:{type: 'LineString', coordinates:[[x2,y2],[x1,y1]]}})
    context.strokeStyle = color
    context.lineWidth = 1
    context.stroke()
    context.globalAlpha = 0.2
    context.closePath();
}

export async function parseShipPointer(vesselName, i, duration, color, context) {

    let element = vesselName[i];
    let previousElement = vesselName[i - 1];

    if (previousElement == undefined) { previousElement = element; };

    globalThis.shipPath = globalThis.d3.geoPath().projection(globalThis.projection).context(context)

    let x1 = element.lon
    let y1 = element.lat
    let x2 = previousElement.lon
    let y2 = previousElement.lat

    var circle = d3.geoCircle().center([x1,y1]).radius(.2)
    context.beginPath()
    globalThis.shipPath(circle())
    context.fillStyle = color
    context.fill()
    context.closePath();

}

export async function parseIceExtent(json, context) {
    //let key = Object.keys(json.objects)[0]

    globalThis.icePath = globalThis.d3.geoPath()
        .projection(globalThis.projection)
        .context(context)


    context.beginPath()
    globalThis.icePath(json)
    context.fillStyle = 'blue'
    context.fill()
    context.closePath();

    // g.selectAll('iceExtent')
    //     .data(topojson.object(json, json.objects[key]).geometries)
    //     .enter()
    //     .append('path')
    //     .attr('d', globalThis.path)
    //     .attr('class', 'iceExtent')

}
