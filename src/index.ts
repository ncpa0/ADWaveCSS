export class Theme {
  static readonly dark = "dark-theme";
  static readonly light = "light-theme";
}

export class Box {
  static readonly box = "box";
  static readonly light = "light";
}

export class Button {
  static readonly button = "button";
  static readonly primary = "primary";
  static readonly danger = "danger";
  static readonly flat = "flat";
  static readonly pill = "pill";
  static readonly circular = "circular";
  static readonly square = "square";
  static readonly toggled = "toggled";
  static readonly wrapper = "btn-wrapper";
}

export class Card {
  static readonly card = "card";
  static readonly activable = "activable";
}

export class Checkbox {
  static readonly checkbox = "checkbox";
}

export class Frame {
  static readonly frame = "frame";
}

export class Input {
  static readonly input = "input";
  static readonly linked = "linked";
  static readonly linkedVertical = "vertical";
  static readonly wrapper = "input-wrapper";
}

export class List {
  static readonly list = "list";
  static readonly element = "list-element";
  static readonly activableElement = "activable";
}

export class Message {
  static readonly message = "message";
  static readonly success = "success";
  static readonly alert = "alert";
  static readonly error = "error";
}

export class NavSidebar {
  static readonly navSidebar = "nav-sidebar";
  static readonly button = "nav-sidebar-btn";
  static readonly separator = "separator";
}

export class Slider {
  static readonly slider = "slider";
  static readonly track = "slider-track";
  static readonly progress = "slider-progress";
  static readonly thumb = "slider-thumb";
  static readonly noPosition = "no-position";
}

export class Switch {
  static readonly switch = "switch";
  static readonly knob = "switch-knob";
  static readonly active = "active";
}

export class Typography {
  static readonly text = "text";
  static readonly subtitle = "subtitle";
  static readonly label = "label";
  static readonly header = "header";
}

export class Suggestions {
  static readonly suggestions = "suggestions";
  static readonly option = "suggestions-option";
  static readonly active = "active";
  static readonly top = "top";
}

export class Selector {
  static readonly selector = "selector";
  static readonly selectedOption = "selected-option";
  static readonly downButton = "down-button";
  static readonly opened = "opened";
  static readonly optionsList = "options-list";
  static readonly option = "option";
  static readonly noPosition = "no-position";
}

Object.freeze(Theme);
Object.freeze(Box);
Object.freeze(Button);
Object.freeze(Card);
Object.freeze(Checkbox);
Object.freeze(Frame);
Object.freeze(Input);
Object.freeze(List);
Object.freeze(Message);
Object.freeze(NavSidebar);
Object.freeze(Slider);
Object.freeze(Switch);
Object.freeze(Typography);
Object.freeze(Suggestions);
Object.freeze(Selector);

export default {
  Theme,
  Box,
  Button,
  Card,
  Checkbox,
  Frame,
  Input,
  List,
  Message,
  NavSidebar,
  Slider,
  Switch,
  Typography,
  Suggestions,
  Selector,
} as const;
