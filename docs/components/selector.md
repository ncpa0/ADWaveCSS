[go back to Docs](../README.md)

# Selector

Selector is a component that allows to select one item from a list.

```html
<div class="selector opened">
  <span class="selected-option">Option 2</span>
  <span class="down-button"></span>
  <div class="options-list">
    <button class="option">Option 1</button>
    <button class="option" aria-selected="true">>Option 2</button>
    <button class="option">Option 3</button>
  </div>
</div>
```

# Class names

- `disabled` - changes the text color of the selected option preview
- `down-button` - a button with a down arrow
- `no-position` - when added to the selector container, the position styling doesn't get applied to the option list
- `opened` - a class that should be added to the selector container when it's opened
- `option` - a button that represents an option
- `options-list` - a container of the option buttons
- `selected-option` - the preview of the selected option that's visible when the selector is closed
- `selector` - container of the selector element
- `top` - a class that should be added to the selector container if the option list should be positioned above the selector, instead of below it as it is by default
