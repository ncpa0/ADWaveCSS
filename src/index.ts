export class Box {
  static readonly box = "box";
  static readonly dark = "dark";
}

export class Button {
  static readonly button = "button";
  static readonly primary = "primary";
  static readonly danger = "danger";
  static readonly flat = "flat";
  static readonly pill = "pill";
  static readonly circular = "circular";
  static readonly toggled = "toggled";
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
  static readonly track = "slider-track";
  static readonly progress = "slider-progress";
  static readonly thumb = "slider-thumb";
}

export class Switch {
  static readonly switch = "switch";
  static readonly knob = "switch-knob";
}

export class Typography {
  static readonly text = "text";
  static readonly subtitle = "subtitle";
  static readonly label = "label";
  static readonly header = "header";
}

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

export default {
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
} as const;
