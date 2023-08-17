# Documentation

## Components

1. [box](./components/box.md)
2. [card](./components/card.md)
3. [list](./components/list.md)
4. [separator](./components/separator.md)
5. [nav-sidebar](./components/nav-sidebar.md)
6. [typography](./components/typography.md)
7. [button](./components/button.md)
8. [checkbox](./components/checkbox.md)
9. [frame](./components/frame.md)
10. [input](./components/input.md)
11. [linked](./components/linked.md)
12. [message](./components/message.md)
13. [slider](./components/slider.md)
14. [switch](./components/switch.md)

## Themes

A theme must be provided to a container that houses all of elements decorated with classes provided by this CSS library. Without the theme elements will not be properly styled.

At this moment there is only one theme provided by default, a dark theme, to use it simply add a `dark-theme` class to the container.

### Example

```html
<body class="dark-theme">
  <!-- Elements -->
</body>
```

## Patterns

### Font size

Since most of all of the elements padding, margins etc. are using the `em` unit (size relative to the element `font-size`). It is recommended to have a default font size set on the container element, and have every other element inherit it, if a nested component needs to change the size of it's children, it can then simply define a new font size and all of it's children will automatically get resized.

#### Example

```css
*:not(:is(body, h1, h2, h3, h4, h5, h6)) {
  font-size: inherit;
}

body {
  font-size: 14px;
}
```
