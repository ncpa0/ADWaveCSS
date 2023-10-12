[go back to Docs](../README.md)

# Switch

Switch element consist of two classes. The `switch` container class and the `switch-knob` class that should go inside the `switch` element.

```html
<div class="switch">
  <div class="switch-knob"></div>
</div>
```

Switch can be toggled by adding and removing an `active` class to the container.

```html
<div class="switch active">
  <div class="switch-knob"></div>
</div>
```

# Class Names

- `switch` - a container element for the switch
- `switch-knob` - a knob or thumb element that should be placed inside the switch container
- `active` - a class that should be added to the switch container when the switch is toggled on, changes the background color and the position of the knob/thumb element inside
