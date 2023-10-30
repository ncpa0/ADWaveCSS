[go back to Docs](../README.md)

# Suggestions

The suggestions component is used to display a list of suggestions for a given input field.

```html
<div class="suggestions">
  <div class="suggestions-option">Option 1</div>
  <div class="suggestions-option">Option 2</div>
  <div class="suggestions-option">Option 3</div>
</div>
```

Depending on whether the suggestions will be displayed above or below the input, the `top` class name can be added to change which corners are rounded.

```html
<div class="suggestions top">
  <div class="suggestions-option">Option 1</div>
  <div class="suggestions-option">Option 2</div>
  <div class="suggestions-option">Option 3</div>
</div>
```

# Class Names

- `active` - currently highlighted suggestion option
- `suggestions-option` - a suggestion option element
- `suggestions` - a container element for the suggestions
