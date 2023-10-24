[go back to Docs](../README.md)

# Box

Box is a simple container element. By default comes with a flex display type.

```html
<div class="box">
  <!-- content -->
</div>
```

## Levels

Box elements can have levels between 1-4 (default: 1), each level has a brighter of darker background color (depending on the theme.)

```html
'
<div class="box">
  <div class="box bg-level-2">
    <div class="box bg-level-3">
      <div class="box bg-level-4">
        <!-- content -->
      </div>
    </div>
  </div>
</div>
```

# Class Names

- `box` - a container element with a flex display type
- `bg-level-2` - a class that changes the background color of the box to a darker or lighter shade
- `bg-level-3` - a class that changes the background color of the box to a darker or lighter shade
- `bg-level-4` - a class that changes the background color of the box to a darker or lighter shade
- `rounded` - a class that adds a border radius to the box
