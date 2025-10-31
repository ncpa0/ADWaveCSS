# Documentation

## Components

1. [alert](./components/alert.md)
2. [box](./components/box.md)
3. [breadcrumbs](./components/breadcrumbs.md)
4. [button](./components/button.md)
5. [card](./components/card.md)
6. [checkbox](./components/checkbox.md)
7. [dialog](./components/dialog.md)
8. [frame](./components/frame.md)
9. [input](./components/input.md)
10. [linked](./components/linked.md)
11. [list](./components/list.md)
12. [message](./components/message.md)
13. [nav-sidebar](./components/nav-sidebar.md)
14. [scrollview](./components/scrollview.md)
15. [selector](./components/selector.md)
16. [separator](./components/separator.md)
17. [skeleton](./components/skeleton.md)
18. [slider](./components/slider.md)
19. [spinner](./components/spinner.md)
20. [suggestions](./components/suggestions.md)
21. [switch](./components/switch.md)
22. [typography](./components/typography.md)

## Themes

A theme must be provided to a container that houses all of the elements.

Themes available: `dark-theme`, `light-theme`.

### Example

```html
<body class="dark-theme">
  <!-- Elements -->
</body>
```

## Accent and Danger colors

Accent and danger colors can be changed via the css variables: `--clr-accent`, `--clr-accent-text`, `--clr-danger`, `--clr-danger-text`. These variables should be defined on the same element as theme or above them.

(Remember to have the `-text` variables with a sufficient contrast to the base color, to keep the text readable)

### Example

```css
.my-accents {
  --clr-accent: #16a085;
  --clr-accent-text: #e6e6e6;
  --clr-danger: #fc88b1;
  --clr-danger-text: #1b1b1b;
}
```

```html
<div class="my-accents dark-theme">
  <!-- Elements -->
</div>
```

## Disabled elements cursor

By default every disabled element will have a `not-allowed` cursor property. This can be changed by either adding a special class name to one of it's parent or changing the CSS variable.

The available class names are:
- `disabled-cursor-none` - disabled elements will have the default cursor when hovered
- `disabled-cursor-pointer` - disabled elements will have the pointer cursor when hovered (same as when enabled)

### Parent class example

```html
<div class="root dark-theme disabled-cursor-none">
  <button class="btn disabled" disabled>Disabled Button</button>
  <input class="input disabled" disabled></input>
</div>
```

### CSS variable example

```html
<style>
.disabled-custom-cursor {
  --disabled-cursor: no-drop;
}
</style>

<div class="root dark-theme disabled-custom-cursor">
  <button class="btn disabled" disabled>Disabled Button</button>
  <input class="input disabled" disabled></input>
</div>
```

## Patterns

### Font size

Since most of all of the elements padding, margins etc. are using the em unit (size relative to the element font-size). It is recommended to have a default font size set on the container element, and have every other element inherit it, if a nested component needs to change the size of it's children, it can then simply define a new font size and all of it's children will automatically get resized.

#### Example

```css
*:not(:is(body, h1, h2, h3, h4, h5, h6)) {
  font-size: inherit;
}

body {
  font-size: 14px;
}
```
