var size = 0;
var placement = 'point';

var style_poblacion_building_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("name") !== null && resolution > 0 && resolution < 0) {
        labelText = String(feature.get("name"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,13,13,0.9058823529411765)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(184,187,171,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
