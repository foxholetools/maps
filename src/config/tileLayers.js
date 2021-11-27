const tileUrl = 'https://assets.foxhole.tools/tile/clasic';

// Set all tile
let mapList = {};
for (const map of mapsConf)
{
    mapList[map.tile] = L.tileLayer(tileUrl + map.tile + '/{z}/{z}_{x}_{y}.png');
}