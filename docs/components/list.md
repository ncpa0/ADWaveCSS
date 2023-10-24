[go back to Docs](../README.md)

# List

List is a container that has significant border radius and applies special styling to all of it's children with the `list-element` class name.

```html
<div class="list">
  <div class="list-element">
    <!-- content -->
  </div>
  <div class="list-element">
    <!-- content -->
  </div>
  <div class="list-element">
    <!-- content -->
  </div>
</div>
```

### Activable elements

When an element is `activable`, hovering over it will change it's background color.

```html
<div class="list">
  <div class="list-element activable">
    <!-- content -->
  </div>
</div>
```

# Class Names

- `activable` - a class that should be added to the list element if it should change it's background color when hovered over
- `list-element` - a class that should be added to all of the list elements
- `list` - a container that houses the list elements, changes the background color and adds border radius
