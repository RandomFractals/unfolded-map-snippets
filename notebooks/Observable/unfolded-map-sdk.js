// URL: https://observablehq.com/@randomfractals/unfolded-map-sdk
// Title: Unfolded Map SDK
// Author: Taras Novak (@randomfractals)
// Version: 132
// Runtime version: 1

const m0 = {
  id: "3c2b05bd9a1b89e8@132",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Unfolded Map SDK

Simple example using [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk)
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 1. Import Unfolded Map SDK Module`
)})
    },
    {
      name: "mapSDK",
      value: (function(){return(
import('https://unpkg.com/@unfolded/map-sdk@0.3.1/dist/index.js?module')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 2. Create Unfolded Map Instance`
)})
    },
    {
      name: "unfoldedMap",
      inputs: ["mapSDK","width"],
      value: (function(mapSDK,width){return(
mapSDK.createMap({
    mapUUID: '31b96f3a-92a0-4146-b6c2-c1c48fb128e5',
    embed: false,
    appendToDocument: false,
    width: width,
    height: 600,
  })
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 3. Display Unfolded Map`
)})
    },
    {
      name: "viewof map",
      inputs: ["unfoldedMap"],
      value: (function*(unfoldedMap)
{
  unfoldedMap.setMapEventHandlers({
    onLoad: () => {
      unfoldedMap.setViewState({
        longitude: -96.4247,
        latitude: 31.51073,
        zoom: 1
      });
    }
  });
  yield unfoldedMap.iframe;
}
)
    },
    {
      name: "map",
      inputs: ["Generators","viewof map"],
      value: (G, _) => G.input(_)
    }
  ]
};

const notebook = {
  id: "3c2b05bd9a1b89e8@132",
  modules: [m0]
};

export default notebook;
