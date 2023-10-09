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
