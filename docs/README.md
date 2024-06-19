# Documentation

## Components

1. [alert](./components/alert.md)
2. [box](./components/box.md)
3. [breadcrumbs](./components/breadcrumbs.md)
4. [button](./components/button.md)
5. [card](./components/card.md)
6. [checkbox](./components/checkbox.md)
7. [frame](./components/frame.md)
8. [input](./components/input.md)
9. [linked](./components/linked.md)
10. [list](./components/list.md)
11. [message](./components/message.md)
12. [nav-sidebar](./components/nav-sidebar.md)
13. [selector](./components/selector.md)
14. [separator](./components/separator.md)
15. [skeleton](./components/skeleton.md)
16. [slider](./components/slider.md)
17. [suggestions](./components/suggestions.md)
18. [switch](./components/switch.md)
19. [typography](./components/typography.md)

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
