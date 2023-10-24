[go back to Docs](../README.md)

# Navigation Sidebar

Navigation sidebar is a container for a list of navigation buttons. It is intended to be used vertically only.

```html
<div class="nav-sidebar">
  <button class="nav-sidebar-btn">
    <span>Home Page</span>
  </button>
  <button class="nav-sidebar-btn">
    <span>About Page</span>
  </button>
  <button class="nav-sidebar-btn">
    <span>Contact Page</span>
  </button>
</div>
```

When a `nav-sidebar-btn` has the `active` class name, it's background color will change.

To create sections of the sidebar a [separator](./separator.md) can be used.

# Class Names

- `active` - a class that should be added to the navigation button when it is active, changes the background color of that button
- `nav-sidebar-btn` - a navigation button
- `nav-sidebar` - a container for the navigation buttons
- `separator` - creates a horizontal line that separates different sections of the sidebar
