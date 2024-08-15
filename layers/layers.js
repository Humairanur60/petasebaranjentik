var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahPasirKaliki_1 = new ol.format.GeoJSON();
var features_WilayahPasirKaliki_1 = format_WilayahPasirKaliki_1.readFeatures(json_WilayahPasirKaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahPasirKaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahPasirKaliki_1.addFeatures(features_WilayahPasirKaliki_1);
var lyr_WilayahPasirKaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahPasirKaliki_1, 
                style: style_WilayahPasirKaliki_1,
                popuplayertitle: "Wilayah Pasir Kaliki",
                interactive: true,
                title: '<img src="styles/legend/WilayahPasirKaliki_1.png" /> Wilayah Pasir Kaliki'
            });
var format_KawasanPenyebaranJentik_2 = new ol.format.GeoJSON();
var features_KawasanPenyebaranJentik_2 = format_KawasanPenyebaranJentik_2.readFeatures(json_KawasanPenyebaranJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPenyebaranJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPenyebaranJentik_2.addFeatures(features_KawasanPenyebaranJentik_2);
var lyr_KawasanPenyebaranJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPenyebaranJentik_2, 
                style: style_KawasanPenyebaranJentik_2,
                popuplayertitle: "Kawasan Penyebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanPenyebaranJentik_2.png" /> Kawasan Penyebaran Jentik'
            });
var format_TitikPerindukanJentik_3 = new ol.format.GeoJSON();
var features_TitikPerindukanJentik_3 = format_TitikPerindukanJentik_3.readFeatures(json_TitikPerindukanJentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukanJentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukanJentik_3.addFeatures(features_TitikPerindukanJentik_3);
var lyr_TitikPerindukanJentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukanJentik_3, 
                style: style_TitikPerindukanJentik_3,
                popuplayertitle: "Titik Perindukan Jentik",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukanJentik_3.png" /> Titik Perindukan Jentik'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WilayahPasirKaliki_1.setVisible(true);lyr_KawasanPenyebaranJentik_2.setVisible(true);lyr_TitikPerindukanJentik_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WilayahPasirKaliki_1,lyr_KawasanPenyebaranJentik_2,lyr_TitikPerindukanJentik_3];
lyr_WilayahPasirKaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_KawasanPenyebaranJentik_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerindukanJentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WilayahPasirKaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_KawasanPenyebaranJentik_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikPerindukanJentik_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WilayahPasirKaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_KawasanPenyebaranJentik_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanJentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanJentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});