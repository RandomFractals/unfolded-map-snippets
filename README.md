# unfolded-map-snippets

[Unfolded](https://www.unfolded.ai) Snippets [VSCode](https://code.visualstudio.com) extension provides custom [HTML](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/snippets/html.code-snippets), [JavaScript](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/snippets/javascript.code-snippets) and [Python](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/snippets/python.code-snippets) 🐍 code snippets ✂️ for [Unfolded Map](https://docs.unfolded.ai/map-sdk) and [Data SDK](https://docs.unfolded.ai/data-sdk).

Use [Unfolded Studio](https://docs.unfolded.ai/studio) to create your [unfolded.ai](https://www.unfolded.ai) maps 🗺️.

Unfolded Map 🗺️ Snippets ✂️ extension adds code templates 📑 you can use to create custom Unfolded Map 🌐 web apps, and [Jupyter Notebooks](https://docs.unfolded.ai/jupyter) with Python 🐍 in VSCode to manage data uploaded to [Unfolded Studio](https://docs.unfolded.ai/studio).

See [unfolded-maps](https://github.com/RandomFractals/unfolded-maps) 🗺️ code repository for [Observable JS](https://github.com/RandomFractals/unfolded-maps#observable-js-notebooks-) and sample [Python Jupyter Notebooks](https://github.com/RandomFractals/unfolded-maps#jupyter-notebooks-) 📚.

# Unfolded JavaScript Snippets

Use `> Unfolded Snippets` loaded from this extension in the Snippets Viewer Tree View ⎇ to streamline your custom Unfolded map creation and data integration development.

![Unfolded JS Snippets](https://raw.githubusercontent.com/RandomFractals/unfolded-map-snippets/main/docs/images/unfolded-map-snippets.png)

<!-- SNIPPETS_START -->
## JavaScript Snippets

<table><tr><th>Prefix</th><th>Body</th><th>Description</th></tr><tr><td>uf-import-map-sdk</td><td>

```javascript
import {UnfoldedMap, setViewState} from '@unfolded/map-sdk';
```

</td><td>Imports [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk/javascript-map-sdk).</td></tr><tr><td>uf-create-map</td><td>

```javascript
const map = new UnfoldedMap({
	mapUUID: '${1:mapId}', // use: https://www.uuidgenerator.net
	appendToDocument: true,
	embed: true,
	width: window.innerWidth,
	height: window.innerHeight,
});
```

</td><td>Creates a new UnfoldedMap.</td></tr><tr><td>uf-get-map-url</td><td>

```javascript
const mapUrl = UnfoldedMapSDK.getMapUrl('${1:mapId}');
console.log(mapUrl);
```

</td><td>Gets the url for a map created and **published** in Unfolded Studio.</td></tr><tr><td>uf-add-dataset</td><td>

```javascript
map.addDataset({
	uuid: '${1:datasetId}'
	label: '${2:datasetLabel}'
});
```

</td><td>Adds a previously uploaded dataset with the specified id to the map. Datasets can be either uploaded via the [Unfolded Data SDK](https://docs.unfolded.ai/data-sdk) or manually added in [Unfolded Cloud](https://studio.unfolded.ai).</td></tr><tr><td>uf-remove-dataset</td><td>

```javascript
map.removeDataset('${1:datasetId}')
```

</td><td>Removes dataset from the map.</td></tr><tr><td>uf-refresh-map-data</td><td>

```javascript
map.refreshMapData();
```

</td><td>Reloads the data displayed on the map.</td></tr><tr><td>uf-set-map-event-handlers</td><td>

```javascript
map.setMapEventHandlers({
	onLoad: () => {
		console.log('map loaded!');
	},
	onClick: (clickEvent: ClickEvent) => {
		console.log(clickEvent);
	},
	onHover: (hoverEvent: HoverEvent) => {
		console.log(hoverEvent);
	},
	onGeometrySelection: (geometrySelectionEvent: GeometrySelectionEvent) => {
		console.log(geometrySelectionEvent);
	},
	onFilter: (filterChangeEvent: FilterChangeEvent) => {
		console.log(filterChangeEvent);
	},
});
```

</td><td>Sets event handlers to receive notifications for the specified map events.</td></tr><tr><td>uf-set-map-timeline-event-handlers</td><td>

```javascript
map.setMapEventHandlers({
	onTimelineIntervalChange: (timelineInterval) => {
		const startDateTime = new Date(timelineInterval[0]);
		const endDateTime = new Date(timelineInterval[1]);
		console.log('start time: ' + startDateTime);
		console.log('end time: ' + endDateTime);
	},
	onLayerTimelineTimeChange: (currentDateTimeUnix) => {
		const currentDateTime = new Date(currentDateTimeUnix);
		console.log('current layer time: ' + currentDateTime);
	},
});
```

</td><td>Sets timeline interval and layer time change event handlers.</td></tr><tr><td>uf-remove-map-event-handlers</td><td>

```javascript
map.setMapEventHandlers({
	onClick: null
	onHover: null
	onGeometrySelection: null
	onFilter: null
});
```

</td><td>Removes specificied map event handlers.</td></tr><tr><td>uf-remove-map-timeline-event-handlers</td><td>

```javascript
map.setMapEventHandlers({
	onTimelineIntervalChange: null
	onLayerTimelineTimeChange: null
});
```

</td><td>Removes timeline interval and layer time change event handlers.</td></tr><tr><td>uf-remove-all-map-event-handlers</td><td>

```javascript
map.setMapEventHandlers(null);
```

</td><td>Removes all registered map event handlers.</td></tr><tr><td>uf-set-map-view-state</td><td>

```javascript
map.setViewState({
	longitude: -74.006058,
	latitude: 40.712772,
	zoom: ${1:zoomLevel}
});
```

</td><td>Positions the map view on a certain location based on the provided coordinates with a defined zoom level.</td></tr><tr><td>uf-get-map-layers</td><td>

```javascript
map.getLayers().then(data => {
	data.layers.forEach(layer => {
		console.log(layer);
	});
});
```

</td><td>Returns layer `label`, `id`, and `isVisible` properties for each layer on the map.
Make sure to call `map.getLayers()` after the map successfully loads.</td></tr><tr><td>uf-log-map-layers-on-map-load</td><td>

```javascript
onLoad: () => {
	map.getLayers().then(layers => {
		layers.forEach(layer => {
			console.log(`layer:', layer.label`);
			console.log(`	id:', layer.id`);
			console.log(`	isVisible:', layer.isVisible`);
		});
}
```

</td><td>Logs map layer `label`, `id`, and `isVisible` properties for each layer on the loaded map.</td></tr><tr><td>uf-add-points-map-layer</td><td>

```javascript
map.addLayer({
	id: 'pointLayer',
	type: 'point',
	config: {
		dataId: '${1:datasetId}',
		columns: {
			'lat': '${2:latitudeFieldName}',
			'lng': '${3:longitudeFieldName}',
		},
		isVisible: true,
		colorScale: 'quantize',
		colorField: {
			name: '${4:colorFieldName}',
			type: 'real'
		},
		visConfig: {
			colorRange: {
				colors: [
					'#440154','#472777','#3e4989','#30678d','#25828e',
					'#1e9d88','#35b778','#6dce58','#b5dd2b','#fde724'
				]
			}
		}
	}
});
```

</td><td>Adds `point` layer to the map.</td></tr><tr><td>uf-remove-map-layer</td><td>

```javascript
map.removeLayer('${1:layerId});
```

</td><td>Removes a layer from the map.</td></tr><tr><td>uf-set-map-layer-visibility</td><td>

```javascript
map.setLayerVisibility('${1:layerId}', false);
```

</td><td>Shows or hides a map layer with the specified `layerId`.</td></tr><tr><td>uf-set-data-filter</td><td>

```javascript
map.setFilter({
	id: '${1:filterId}'
	dataId: '${2:datasetId}',
	field: '${3:fieldName}',
	value: ${4:filterValue}
});
```

</td><td>Sets data filter value.</td></tr><tr><td>uf-set-map-theme</td><td>

```javascript
map.setTheme('light');
```

</td><td>Changes map theme to `dark` or `light` based on the passed parameter.</td></tr><tr><td>uf-set-map-control-visibility</td><td>

```javascript
const mapConfig = {
	panelId: '${1:mapControlId}',
	isVisible: false
});
```

</td><td>Sets visibility for the built-in map controls: `mapLegend`, `toggle3d`, `splitMap`, and `mapDraw`.</td></tr><tr><td>uf-set-map-timeline-config</td><td>

```javascript
const startTime = new Date('2020.10.10').getTime();
const endTime = new Date('2020.10.18').getTime();
const timelineConfig = {
	idx: 0,
	currentTimeInterval: {
		startTime: startTime,
		endTime: endTime
	},
	timezone: 'America/Chicago', // from: https://momentjs.com/timezone
	timeFormat: 'DD.MM.YYYY. HH:mm' // see: https://momentjs.com
};

map.setTimelineConfig(timelineConfig).then(timelineData => {
	console.log(timelineData);
});
```

</td><td>Sets time filter timeline configuration that allows us to set timeline visibility, play/pause the animation, set the speed, set the time interval, change the time format and timezone.</td></tr><tr><td>uf-get-map-timeline-info</td><td>

```javascript
map.getTimelineInfo(0).then(timelineData => {
	console.log(timelineData);
});
```

</td><td>Gets information object for the time filter timeline map control.</td></tr><tr><td>uf-set-map-layer-timeline-config</td><td>

```javascript
const time = new Date('2020.10.10').getTime();
const timelineConfig = {
	currentTime: time
	timezone: 'America/Chicago', // from: https://momentjs.com/timezone
	timeFormat: 'DD.MM.YYYY. HH:mm' // see: https://momentjs.com
};

map.setLayerTimelineConfig(timelineConfig).then(timelineData => {
	console.log(timelineData);
});
```

</td><td>Sets layer timeline configuration used with `Trips layer` that allows us to set timeline visibility, play/pause the animation, set the speed, set the current time, change the time format and timezone.</td></tr><tr><td>uf-get-map-layer-timeline-info</td><td>

```javascript
map.getLayerTimelineInfo().then(timelineData => {
	console.log(timelineData);
});
```

</td><td>Gets information object for the layer timeline control used with `Trips layer`.</td></tr><tr><td>uf-get-map-config</td><td>

```javascript
map.getLayers().then(mapConfig => {
	console.log(mapConfig);
});
```

</td><td>Gets map configuration object that contains `mapState`, `mapStyle`, and `visState` object properties.</td></tr><tr><td>uf-set-map-config</td><td>

```javascript
map.setMapConfig({
	mapState: {...}
	mapStyle: {...}
	visState: {...}
});
```

</td><td>Sets map configuration with updated `mapState`, `mapStyle`, and `visState` object properties.</td></tr><tr></table>

<!-- SNIPPETS_END --> 

# Unfolded Python Snippets

![Unfolded Py Snippets](https://raw.githubusercontent.com/RandomFractals/unfolded-map-snippets/main/docs/images/unfolded-map-py-snippets.png)

## Python Snippets

<table><tr><th>Prefix</th><th>Body</th><th>Description</th></tr><tr><td>uf-import-map-sdk</td><td>

```python
from unfolded.map_sdk import UnfoldedMap
```

</td><td>Imports [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk/python-map-sdk).</td></tr><tr><td>uf-create-map</td><td>

```python
map = UnfoldedMap(
	mapUUID='${1:map_id}', // use: https://www.uuidgenerator.net
	height=640px
)
```

</td><td>Creates a new UnfoldedMap.</td></tr><tr><td>uf-get-map-url</td><td>

```python
map_url = UnfoldedMap.get_map_url('${1:map_id}')
```

</td><td>Gets the url for a map created and **published** in Unfolded Studio.</td></tr><tr><td>uf-add-dataset</td><td>

```python
map.add_dataset({
	uuid: '${1:dataset_id}'
	label: '${2:dataset_label}'
})
```

</td><td>Adds a previously uploaded dataset with the specified id to the map. Datasets can be either uploaded via the [Unfolded Data SDK](https://docs.unfolded.ai/data-sdk) or manually added in [Unfolded Cloud](https://studio.unfolded.ai).</td></tr><tr><td>uf-remove-dataset</td><td>

```python
map.remove_dataset('${1:dataset_id}')
```

</td><td>Removes dataset from the map.</td></tr><tr><td>uf-refresh-map-data</td><td>

```python
map.refresh_map_data()
```

</td><td>Reloads the data displayed on the map.</td></tr><tr><td>uf-set-map-event-handlers</td><td>

```python

```

</td><td>Sets event handlers to receive notifications for the specified map events.</td></tr><tr><td>uf-set-map-timeline-event-handlers</td><td>

```python
def on_timeline_interval_change(interval: List[int]):
	start_time = interval[0]
	end_time = interval[1]
	# output time interval here

def on_layer_timeline_time_change(current_datetime_unix: int):
	# output current time here

map.set_map_event_handlers({
	'on_timeline_interval_change': on_timeline_interval_change
	'on_layer_timeline_time_change': on_layer_timeline_time_change
})
```

</td><td>Sets timeline interval and layer time change event handlers.</td></tr><tr><td>uf-remove-map-event-handlers</td><td>

```python
map.setMapEventHandlers({
	on_click: None
	on_over: None
	on_geometry_selection: None
	on_filter: None
})
```

</td><td>Removes specificied map event handlers.</td></tr><tr><td>uf-remove-map-timeline-event-handlers</td><td>

```python
map.setMapEventHandlers({
	on_timeline_interval_change: None
	on_layer_timeline_time_change: None
})
```

</td><td>Removes timeline interval and layer time change event handlers.</td></tr><tr><td>uf-remove-all-map-event-handlers</td><td>

```python
map.set_map_event_handlers(None)
```

</td><td>Removes all registered map event handlers.</td></tr><tr><td>uf-set-map-view-state</td><td>

```python
map.set_view_state({
	longitude: -74.006058,
	latitude: 40.712772,
	zoom: ${1:zoom_level}
})
```

</td><td>Positions the map view on a certain location based on the provided coordinates with a defined zoom level.</td></tr><tr><td>uf-get-map-layers</td><td>

```python
layers = unfolded_map.get_layers()
layers.result()
```

</td><td>Returns layer `label`, `id`, and `isVisible` properties for each layer on the map.</td></tr><tr><td>uf-add-points-map-layer</td><td>

```python
map.add_layer({
	id: 'pointLayer',
	type: 'point',
	config: {
		data_id: '${1:dataset_id}',
		columns: {
			'lat': '${2:latitude_field_name}',
			'lng': '${3:longitude_field_name}',
		},
		is_visible: true,
		color_scale: 'quantize',
		color_field: {
			name: '${4:color_field_name}',
			type: 'real'
		},
		vis_config: {
			colorRange: {
				colors: [
					'#440154','#472777','#3e4989','#30678d','#25828e',
					'#1e9d88','#35b778','#6dce58','#b5dd2b','#fde724'
				]
			}
		}
	}
})
```

</td><td>Adds `point` layer to the map.</td></tr><tr><td>uf-remove-map-layer</td><td>

```python
map.remove_layer('${1:layer_id})
```

</td><td>Removes a layer from the map.</td></tr><tr><td>uf-set-map-layer-visibility</td><td>

```python
map.set_layer_visibility(layer_id='${1:layer_id}', is_visible=True)
```

</td><td>Shows or hides a map layer with the specified `layerId`.</td></tr><tr><td>uf-set-data-filter</td><td>

```python
map.set_filter({
	id: '${1:filter_id}'
	field: '${3:field_name}',
	value: ${4:filter_value}
})
```

</td><td>Sets data filter value.</td></tr><tr><td>uf-set-map-theme</td><td>

```python
map.set_theme('light')
```

</td><td>Changes map theme to `dark` or `light` based on the passed parameter.</td></tr><tr><td>uf-get-map-config</td><td>

```python
map_config = map.get_map_config()
map_config.result()
```

</td><td>Gets map configuration object that contains `mapState`, `mapStyle`, and `visState` object properties.</td></tr><tr><td>uf-set-map-config</td><td>

```python
map.set_map_config({
	mapState: {...}
	mapStyle: {...}
	visState: {...}
})
```

</td><td>Sets map configuration with updated `mapState`, `mapStyle`, and `visState` object properties.</td></tr></table>

# Unfolded Html Snippets

![Unfolded Map Html Snippets](https://raw.githubusercontent.com/RandomFractals/unfolded-map-snippets/main/docs/images/unfolded-map-html-snippets.png)

## Html Snippets

<table><tr><th>Prefix</th><th>Body</th><th>Description</th></tr><tr><td>uf-map-html-template</td><td>

```html
<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<meta name='description' content='Unfolded Map'>
		<title>Unfolded Map</title>
		<script src='https://cdn.unfolded.ai/sdk/unfolded-sdk.min.js'></script>
		<style>
			html, body {
				height: 100%;
				overflow: hidden;
			}
			body {
				font-family: 'Graphik Web';
				margin: 0px;
			}
			iframe {
				border: none;
			}
		</style>
	</head>
	<body>
		<script type='text/javascript'>
			const map = UnfoldedMapSDK.createMap({
				mapUrl: '${1:mapUrl}', // try 'https://studio.unfolded.ai/public/80c800cc-5805-4416-94a5-bd8105cab7f7/embed',
				appendToDocument: true,
				width: window.innerWidth,
				height: window.innerHeight,
				onLoad: () => {
					console.log('UnfoldedMapSDK: map loaded!');
				}
			});
			UnfoldedMapSDK.setViewState(map, {
				longitude: -74.006058,
				latitude: 40.712772,
				zoom: 10
			});
			window.addEventListener('resize', () => {
				if (map) {
					map.iframe.style.width = `${window.innerWidth}px`;
					map.iframe.style.height = `${window.innerHeight}px`;
				}
		});
		</script>
	</body>
</html>
```

</td><td>Creates a new Unfolded map html template.</td></tr></table>

# Recommended Extensions

Other extensions you might want to try to help you visualize, map, chart, and share your geo data in [VSCode](https://code.visualstudio.com/):

| Extension | Description |
| --- | --- |
| [Data Preivew 🈸](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview) | Data Preview 🈸 extension for importing 📤 viewing 🔎 slicing 🔪 dicing 🎲 charting 📊 & exporting 📥 large JSON array/config, YAML, Apache Arrow, Avro & Excel data files |
| [GistPad 📘](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs) | VS Code extension for managing and sharing code snippets, notes and interactive samples using GitHub Gists |
| [Geo Data Viewer 🗺️](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) | Geo Data Viewer w/0 Py 🐍, pyWidgets ⚙️, pandas 🐼, or @reactjs ⚛️ required to gen. some snazzy maps 🗺️ with keplerGL ... |
| [Vega Viewer 📈](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-vega-viewer) | VSCode extension for Interactive Preview of Vega & Vega-Lite maps 🗺️ & graphs 📈 |
| [JS Notebook 📓 Inspector 🕵️](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.js-notebook-inspector) | VSCode extension for Interactive Preview of Observable JS Notebooks 📚 & Notebook 📓 Nodes ⎇ & Cells ⌗ source code. |
| [VSCode Map Preview](https://marketplace.visualstudio.com/items?itemName=jumpinjackie.vscode-map-preview) | VSCode extension for visually previewing geospatial file content (GeoJSON, KML, etc) on a map |
| [Geo Tools](https://marketplace.visualstudio.com/items?itemName=SmartMonkey.geotools) | Geo Tools VSCode extension allows you to easily interact with geographical data |
| [Hex Editor](https://marketplace.visualstudio.com/items?itemName=ms-vscode.hexeditor) | Allows Hex Editing inside VS Code |

# Dev Build

Use the following commands to build this Unfolded Snippets extension locally for debugging and submitting pull requests (PRs):

```
$ git clone https://github.com/RandomFractals/unfolded-map-snippets
$ cd unfolded-map-snippets
$ npm install
$ code .
```

Press `F5` in VSCode to start Unfolded Snippets extension debug session.

Use [Snippets Viewer](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.snippets-viewer) to view and test configured Unfolded vscode [snippets](https://github.com/RandomFractals/unfolded-map-snippets/tree/main/snippets).

# Contributing

Any & all test, code || feedback contributions are welcome.

Open an issue || create a pull request to make this VSCode Snippets extension work better for all. 🤗


<!-- COMMANDS_START -->
## Commands (1)

| Command                             | Description                 |
| ----------------------------------- | --------------------------- |
| unfolded.snippets.notebook.examples | Unfolded: Notebook Examples |
<!-- COMMANDS_END -->





<!-- DEPENDENCIES_START -->
## Extension Dependencies (1)

| Extension Name                                                              | Description            |
| --------------------------------------------------------------------------- | ---------------------- |
| [Snippets Viewer](https://github.com/RandomFractals/vscode-snippets-viewer) | VSCode Snippets Viewer |
<!-- DEPENDENCIES_END -->