[go back to Docs](../README.md)

# Slider

There are four classes that can be used to construct a custom slider component: `slider`, `slider-track`, `slider-progress` and `slider-thumb`.

Here's how it could be constructed:

```html
<div class="slider">
  <span class="slider-track"></span>
  <span class="slider-progress"></span>
  <span class="slider-thumb">
    <input type="range" />
  </span>
</div>
```

`slider` has a relative position and the others have the absolute position, a `no-position` class can be added to them to have those elements not include any position property.

# Class Names

- `slider` - a container for the slider elements
- `slider-track` - a track that spans the entire width of the slider
- `slider-progress` - a progress bar that spans the slider up to the thumb
- `slider-thumb` - a container for the thumb element, that is the knob that can be dragged to change the value of the slider
- `no-position` - when added to the slider container, the position styling doesn't get applied to the internal elements
