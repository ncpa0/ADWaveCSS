[go back to Docs](../README.md)

# Dialog

## Dialog element

```html
<div class="dialog">
    <div class="dialog-header">
        <span class="dialog-title">Dialog Title</span>
    </div>
    <div class="dialog-body">
        <p>Dialog Body</p>
    </div>
</div>
```

## Dialog with a &lt;dialog /&gt;

```html
<dialog class="dialog">
    <div class="dialog-header">
        <span class="dialog-title">Dialog Title</span>
    </div>
    <div class="dialog-body">
        <p>Dialog Body</p>
    </div>
</dialog>
```

## Dialog with buttons in header

```html
<dialog class="dialog">
    <div class="dialog-header">
        <button class="btn flat">Cancel</button>
        <span class="dialog-title">Dialog Title</span>
        <button class="btn primary">Confirm</button>
    </div>
    <div class="dialog-body">
        <p>Dialog Body</p>
    </div>
</dialog>
```

# Class Names

- `dialog` - The dialog container, can be any div or dialog element.
- `dialog-header` - The header of the dialog.
- `dialog-title` - The title of the dialog, should be placed inside the header.
- `dialog-body` - The body of the dialog.
