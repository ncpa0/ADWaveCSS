# ADWaveCSS

Adwaita/GTK inspired CSS for the web.

See [examples here](https://ncpa0.github.io/adwave-docs).

## Usage

CSS styles are located in the `dist/styles.css` file. If used with esbuild or webpack and css loader or something similar it can be imported like this from a JavaScript file:

```js
import "adwavecss/dist/styles.css";
```

### JavaScript class name bindings

```js
import ADWave from "adwavecss";

// Primary button
const button = document.createElement("button");
button.classList.add(ADWave.Button.button);
button.classList.add(ADWave.Button.primary);

// Switch
const switchElem = document.createElement("div");
const knob = document.createElement("div");
switchElem.classList.add(ADWave.Switch.switch);
knob.classList.add(ADWave.Switch.knob);
switchElem.appendChild(knob);

const toggleSwitch = () => {
  switchElem.classList.toggle(ADWave.Switch.active);
};
```

## Components

See all components [here](./docs/README.md).
