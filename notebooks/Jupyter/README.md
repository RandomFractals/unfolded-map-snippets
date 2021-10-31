# Jupyter Notebooks

Collection of [Jupyter Notebooks](https://jupyter.org) to illustrate the use of [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk).

## Installation

[Visual Studio Code](https://code.visualstudio.com) provides basic notebook support for [language kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) that are supported in Jupyter Notebooks today. Many language kernels will work with no modification. To enable advanced features, modifications may be needed in the VS Code language extensions.

In order to use Unfolded Map SDK Jupyter Notebook Examples, you need to install [Mircosoft Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) vscode extension. The Jupyter VSCode extension includes the [Jupyter Keymap](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap) and the [Jupyter Notebook Renderers](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers) extensions by default. The Jupyter Keymap extension provides Jupyter-consistent keymaps and the Jupyter Notebook Rendereres extension provides renderers for mime types such as latex, plotly, vega and the like. Both of these extensions can be disabled or uninstalled.

VSCode has public [Notebook API](https://code.visualstudio.com/api/extension-guides/notebook) that describes native notebooks support, and interfaces for running Jupyter Notebooks in vscode, and rendering rich cell outputs.

To use Unfolded Map and Data SDK with Python in Jupyter notebooks, first install them using `pip`:

```
$ pip install unfolded.map-sdk unfolded.data-sdk
```

Unfolded SDKs Jupyter notebook examples with Python also require other packages (libraries). Those dependencies are listed in [`requirements.txt`](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/requirements.txt). 

Install required Python packages with `pip` prior to running demo notebooks:

```
$ pip install -r requirements.txt
```

## Documentation

The official [Unfolded Jupyter Examples](https://docs.unfolded.ai/jupyter/examples) page provides more information about the Juputer notebooks featured as built-in examples in this vscode extension.

| Notebook | Description |
| --- | --- |
| [Introduction.ipynb](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/notebooks/Jupyter/Introduction.ipynb) | Create an Unfolded map, add a dataset, and set the map view. |
| [Local Maps.ipynb](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/notebooks/Jupyter/Local%20Maps.ipynb) | Use local Unfolded maps to visualize [`pandas`](https://pandas.pydata.org) [`DataFrames`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html), [`GeoJSON`](https://geojson.org), [`CSV`](https://en.wikipedia.org/wiki/Comma-separated_values) data and strings. |
| [Published Maps.ipynb](https://github.com/RandomFractals/unfolded-map-snippets/blob/main/notebooks/Jupyter/Published%20Maps.ipynb) | Load published Unfolded maps in Python Jupyter Notebooks. |


