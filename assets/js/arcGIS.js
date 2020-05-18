//load esri modules 
require(["esri/Map", "esri/WebScene","esri/views/SceneView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/symbols/PolygonSymbol3D","esri/symbols/ExtrudeSymbol3DLayer"],
    function(Map, WebScene, SceneView, BasemapToggle, BasemapGallery, Graphic, GraphicsLayer, Sketch, PolygonSymbol3D, ExtrudeSymbol3DLayer){
        /*mapinit*/
        var graphicsLayer = new GraphicsLayer({
            screenSizePerspectiveEnabled: true, //make points further away smaller, increase depth perception
        });
        var map = new Map({
            basemap: "topo-vector", //set default basemap to topographical 
            ground: "world-elevation", //use world elevation service for 3D ground modelling 
            layers: [graphicsLayer]
        });
        var view = new SceneView({
            container: "mapContainer", 
            map: map, 
            camera: {
                position: { 
                x: -3.6066, //long-E-
                y: 56.0607,  //lat-N-
                z: 25000 // altitude in meters -aerial zoom-
                }, 
                tilt: 75  // perspective in degrees
            }
        });
        map.add(graphicsLayer); 
    }
)

