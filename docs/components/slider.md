[go back to Docs](../README.md)

# Slider

There are three classes that can be used to construct a custom slider component: `slider-track`, `slider-progress` and `slider-thumb`.

Here's how it could be constructed:

```html
<div class="my-slider">
  <span class="slider-track"></span>
  <span class="slider-progress"></span>
  <span class="slider-thumb">
    <input type="range" />
  </span>
</div>
```

Note that you will still have to manually position these elements correctly and manage the progress and thumb positions as the value changes via JavaScript.
