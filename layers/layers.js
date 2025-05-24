ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([119.491837, 10.811478, 119.516642, 10.823280]);
var wms_layers = [];

var format_poblacion_pois_0 = new ol.format.GeoJSON();
var features_poblacion_pois_0 = format_poblacion_pois_0.readFeatures(json_poblacion_pois_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_pois_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_pois_0.addFeatures(features_poblacion_pois_0);
var lyr_poblacion_pois_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_pois_0, 
                style: style_poblacion_pois_0,
                popuplayertitle: 'poblacion_pois',
                interactive: true,
                title: '<img src="styles/legend/poblacion_pois_0.png" /> poblacion_pois'
            });
var format_Poblacion_Taytaygadm41_phl_3_1 = new ol.format.GeoJSON();
var features_Poblacion_Taytaygadm41_phl_3_1 = format_Poblacion_Taytaygadm41_phl_3_1.readFeatures(json_Poblacion_Taytaygadm41_phl_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_Taytaygadm41_phl_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_Taytaygadm41_phl_3_1.addFeatures(features_Poblacion_Taytaygadm41_phl_3_1);
var lyr_Poblacion_Taytaygadm41_phl_3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_Taytaygadm41_phl_3_1, 
                style: style_Poblacion_Taytaygadm41_phl_3_1,
                popuplayertitle: 'Poblacion_Taytay — gadm41_phl_3',
                interactive: false,
                title: '<img src="styles/legend/Poblacion_Taytaygadm41_phl_3_1.png" /> Poblacion_Taytay — gadm41_phl_3'
            });
var format_poblacion_building_2 = new ol.format.GeoJSON();
var features_poblacion_building_2 = format_poblacion_building_2.readFeatures(json_poblacion_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_building_2.addFeatures(features_poblacion_building_2);
var lyr_poblacion_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_building_2,
maxResolution:4.852893939525475,
 
                style: style_poblacion_building_2,
                popuplayertitle: 'poblacion_building',
                interactive: true,
                title: '<img src="styles/legend/poblacion_building_2.png" /> poblacion_building'
            });
var format_poblacion_transport_3 = new ol.format.GeoJSON();
var features_poblacion_transport_3 = format_poblacion_transport_3.readFeatures(json_poblacion_transport_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_transport_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_transport_3.addFeatures(features_poblacion_transport_3);
var lyr_poblacion_transport_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_transport_3,
maxResolution:4.8531739841869985,
 
                style: style_poblacion_transport_3,
                popuplayertitle: 'poblacion_transport',
                interactive: true,
                title: '<img src="styles/legend/poblacion_transport_3.png" /> poblacion_transport'
            });
var format_poblacion_roads_4 = new ol.format.GeoJSON();
var features_poblacion_roads_4 = format_poblacion_roads_4.readFeatures(json_poblacion_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_roads_4.addFeatures(features_poblacion_roads_4);
var lyr_poblacion_roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_roads_4,
maxResolution:3.2524386989237044,
 
                style: style_poblacion_roads_4,
                popuplayertitle: 'poblacion_roads',
                interactive: true,
                title: '<img src="styles/legend/poblacion_roads_4.png" /> poblacion_roads'
            });
var format_poblacion_water_5 = new ol.format.GeoJSON();
var features_poblacion_water_5 = format_poblacion_water_5.readFeatures(json_poblacion_water_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_water_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_water_5.addFeatures(features_poblacion_water_5);
var lyr_poblacion_water_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_water_5,
maxResolution:8.571606999884342,
 
                style: style_poblacion_water_5,
                popuplayertitle: 'poblacion_water',
                interactive: true,
                title: '<img src="styles/legend/poblacion_water_5.png" /> poblacion_water'
            });
var format_poblacion_waterways_6 = new ol.format.GeoJSON();
var features_poblacion_waterways_6 = format_poblacion_waterways_6.readFeatures(json_poblacion_waterways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_waterways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_waterways_6.addFeatures(features_poblacion_waterways_6);
var lyr_poblacion_waterways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_waterways_6, 
                style: style_poblacion_waterways_6,
                popuplayertitle: 'poblacion_waterways',
                interactive: true,
                title: '<img src="styles/legend/poblacion_waterways_6.png" /> poblacion_waterways'
            });

lyr_poblacion_pois_0.setVisible(true);lyr_Poblacion_Taytaygadm41_phl_3_1.setVisible(true);lyr_poblacion_building_2.setVisible(true);lyr_poblacion_transport_3.setVisible(true);lyr_poblacion_roads_4.setVisible(true);lyr_poblacion_water_5.setVisible(true);lyr_poblacion_waterways_6.setVisible(true);
var layersList = [lyr_poblacion_pois_0,lyr_Poblacion_Taytaygadm41_phl_3_1,lyr_poblacion_building_2,lyr_poblacion_transport_3,lyr_poblacion_roads_4,lyr_poblacion_water_5,lyr_poblacion_waterways_6];
lyr_poblacion_pois_0.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Poblacion_Taytaygadm41_phl_3_1.set('fieldAliases', {'fid': 'fid', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_poblacion_building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_poblacion_transport_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_poblacion_roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_poblacion_water_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_poblacion_waterways_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_poblacion_pois_0.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Poblacion_Taytaygadm41_phl_3_1.set('fieldImages', {'fid': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_poblacion_building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_poblacion_transport_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_poblacion_roads_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_poblacion_water_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_poblacion_waterways_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_poblacion_pois_0.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Poblacion_Taytaygadm41_phl_3_1.set('fieldLabels', {'fid': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'header label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_poblacion_building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'header label - visible with data', 'type': 'inline label - visible with data', });
lyr_poblacion_transport_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_poblacion_roads_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'header label - visible with data', 'ref': 'no label', 'oneway': 'inline label - visible with data', 'maxspeed': 'inline label - visible with data', 'layer': 'no label', 'bridge': 'inline label - visible with data', 'tunnel': 'no label', });
lyr_poblacion_water_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_poblacion_waterways_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'width': 'no label', 'name': 'header label - visible with data', });
lyr_poblacion_waterways_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});