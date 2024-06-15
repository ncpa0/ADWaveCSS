[go back to Docs](../README.md)

# Breadcrumbs


```html
<div class="breadcrumbs">
  <button class="breadcrumb-item activable">Root</button>
  <span class="breadcrumb-separator"></span>
  <button class="breadcrumb-item activable">Documents</button>
  <span class="breadcrumb-separator"></span>
  <button class="breadcrumb-item active">ADWaveCSS</button>
</div>
```

## Activable Breadcrumb Item

An activable breadcrumb item has a highlight effect when hovered similar to a button.

```html
<button class="breadcrumb-item activable">Content</button>
```

## Active Breadcrumb Item

Active breadcrumb item will ignore hover state and be always highlighted.

```html
<button class="breadcrumb-item active">Content</button>
```

# Class Names

- `breadcrumbs` - a container element for breadcrumb items
- `breadcrumb-item` - a breadcrumb item element
- `breadcrumb-separator` - a separator element between breadcrumb items
- `activable` - adds hover effect to the breadcrumb item
- `active` - highlights the breadcrumb item
