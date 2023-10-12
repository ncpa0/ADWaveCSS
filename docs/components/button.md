[go back to Docs](../README.md)

# Button

## Regular Button

```html
<button class="btn">Click Me</button>
```

## Primary Button

Primary buttons have blue color instead of the default grey.

```html
<button class="btn primary">Click Me</button>
```

## Danger Button

Danger buttons have red color instead of the default grey.

```html
<button class="btn danger">Click Me</button>
```

## Flat Button

Falt buttons do not have any background color, only when hovered over their background color changes to grey.

```html
<button class="btn flat">Click Me</button>
```

## Pill Button

Pill buttons have a very high border radius, when there's no text inside them they appear as circles.

```html
<button class="btn pill">Click Me</button>
```

## Circular Button

Circualr buttons are always circles of a fixed width and height. Those can be scaled up and down by adjusting the font size.

```html
<button class="btn circular">x</button>
```

## Square Button

Square buttons are always squares of a fixed width and height. Those can be scaled up and down by adjusting the font size.

```html
<button class="btn square">...</button>
```

## Toggled Button

When a button is togglable (similarly to a checkbox), `toggled` class can be used to highlight that button.

```html
<button class="btn toggled">Click Me</button>
```

# Class Names

- `btn` - any button element
- `primary` - a button with the accent color as it's background
- `danger` - a button with the danger color as it's background
- `flat` - a button with no background color when not hovered over or pressed
- `pill` - a button with a very high border radius
- `circular` - a button in a shape of a circle with a fixed width and height
- `square` - a button in a shape of a square with a fixed width and height
- `toggled` - a button that's currently toggled on
- `btn-wrapper` - a container element for the button that enables linking element via the `linked` class name when the button is inside some container rather than being the direct descendant of the `linked` element
