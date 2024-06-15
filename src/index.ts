export class Theme {
  static readonly dark = "dark-theme";
  static readonly light = "light-theme";
  static readonly light2 = "light-theme-2";

  static className(params: { type?: "dark" | "light" | "light2" }) {
    switch (params.type) {
      case "light":
        return Theme.light;
      case "light2":
        return Theme.light2;
    }
    return Theme.dark;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md
 */
export class Box {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md#ClassNames
   */
  static readonly box = "box";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md#ClassNames
   */
  static readonly rounded = "rounded";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md#ClassNames
   */
  static readonly bg2 = "bg-level-2";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md#ClassNames
   */
  static readonly bg3 = "bg-level-3";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/box.md#ClassNames
   */
  static readonly bg4 = "bg-level-4";

  static className(params: { rounded?: boolean; bg?: 1 | 2 | 3 | 4 }) {
    let className = Box.box;
    if (params.rounded) {
      className += ` ${Box.rounded}`;
    }
    if (params.bg) {
      switch (params.bg) {
        case 4:
          className += ` ${Box.bg4}`;
          break;
        case 3:
          className += ` ${Box.bg3}`;
          break;
        case 2:
          className += ` ${Box.bg2}`;
          break;
      }
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md
 */
export class Button {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly button = "btn";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly disabled = "disabled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly primary = "primary";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly danger = "danger";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly flat = "flat";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly pill = "pill";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly circular = "circular";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly square = "square";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly toggled = "toggled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly wrapper = "btn-wrapper";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/button.md#ClassNames
   */
  static readonly adaptive = "adaptive";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/linked.md
   */
  static readonly linked = "linked";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/linked.md
   */
  static readonly linkedVertical = "vertical";

  static className(params: {
    disabled?: boolean;
    color?: "primary" | "danger";
    shape?: "circular" | "square";
    flat?: boolean;
    pill?: boolean;
    toggled?: boolean;
    adaptive?: boolean;
    linked?: boolean;
    linkedVertical?: boolean;
  }) {
    let className = Button.button;
    if (params.disabled) {
      className += ` ${Button.disabled}`;
    }
    if (params.color) {
      switch (params.color) {
        case "primary":
          className += ` ${Button.primary}`;
          break;
        case "danger":
          className += ` ${Button.danger}`;
          break;
      }
    }
    if (params.shape) {
      switch (params.shape) {
        case "circular":
          className += ` ${Button.circular}`;
          break;
        case "square":
          className += ` ${Button.square}`;
          break;
      }
    }
    if (params.flat) {
      className += ` ${Button.flat}`;
    }
    if (params.pill) {
      className += ` ${Button.pill}`;
    }
    if (params.toggled) {
      className += ` ${Button.toggled}`;
    }
    if (params.adaptive) {
      className += ` ${Button.adaptive}`;
    }
    if (params.linked) {
      className += ` ${Button.linked}`;
    }
    if (params.linkedVertical) {
      className += ` ${Button.linkedVertical}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/card.md
 */
export class Card {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/card.md#ClassNames
   */
  static readonly card = "card";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/card.md#ClassNames
   */
  static readonly activable = "activable";

  static className(params: { activable?: boolean }) {
    let className = Card.card;
    if (params.activable) {
      className += ` ${Card.activable}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/checkbox.md
 */
export class Checkbox {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/checkbox.md#ClassNames
   */
  static readonly checkbox = "checkbox";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/checkbox.md#ClassNames
   */
  static readonly disabled = "disabled";

  static className(params: { disabled?: boolean }) {
    let className = Checkbox.checkbox;
    if (params.disabled) {
      className += ` ${Checkbox.disabled}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/frame.md
 */
export class Frame {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/frame.md#ClassNames
   */
  static readonly frame = "frame";

  static className() {
    return Frame.frame;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/input.md
 */
export class Input {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/input.md#ClassNames
   */
  static readonly input = "input";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/input.md#ClassNames
   */
  static readonly disabled = "disabled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/linked.md
   */
  static readonly linked = "linked";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/linked.md
   */
  static readonly linkedVertical = "vertical";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/input.md#ClassNames
   */
  static readonly wrapper = "input-wrapper";

  static className(params: {
    disabled?: boolean;
    linked?: boolean;
    linkedVertical?: boolean;
  }) {
    let className = Input.input;
    if (params.disabled) {
      className += ` ${Input.disabled}`;
    }
    if (params.linked) {
      className += ` ${Input.linked}`;
    }
    if (params.linkedVertical) {
      className += ` ${Input.linkedVertical}`;
    }
    return className;
  }

  static wrapperClassName() {
    return Input.wrapper;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/list.md
 */
export class List {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/list.md#ClassNames
   */
  static readonly list = "list";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/list.md#ClassNames
   */
  static readonly element = "list-element";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/list.md#ClassNames
   */
  static readonly activableElement = "activable";

  static className() {
    let className = List.list;
    return className;
  }

  static elementClassName(params: { activable?: boolean }) {
    let className = List.element;
    if (params.activable) {
      className += ` ${List.activableElement}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/message.md
 */
export class Message {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/message.md#ClassNames
   */
  static readonly message = "message";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/message.md#ClassNames
   */
  static readonly success = "success";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/message.md#ClassNames
   */
  static readonly warning = "warning";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/message.md#ClassNames
   */
  static readonly error = "error";

  static className(params: { type?: "success" | "warning" | "error" }) {
    let className = Message.message;
    if (params.type) {
      switch (params.type) {
        case "success":
          className += ` ${Message.success}`;
          break;
        case "warning":
          className += ` ${Message.warning}`;
          break;
        case "error":
          className += ` ${Message.error}`;
          break;
      }
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/nav-sidebar.md
 */
export class NavSidebar {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/nav-sidebar.md#ClassNames
   */
  static readonly navSidebar = "nav-sidebar";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/nav-sidebar.md#ClassNames
   */
  static readonly button = "nav-sidebar-btn";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/nav-sidebar.md#ClassNames
   */
  static readonly separator = "separator";
  static readonly active = "active";

  static className() {
    return NavSidebar.navSidebar;
  }

  static btnClassName(params: { active?: boolean }) {
    let className = NavSidebar.button;
    if (params.active) {
      className += ` ${NavSidebar.active}`;
    }
    return className;
  }

  static separatorClassName() {
    return NavSidebar.separator;
  }
}

export class ScrollView {
  static readonly scrollView = "scrollview";

  static className() {
    return ScrollView.scrollView;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md
 */
export class Selector {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly selector = "selector";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly disabled = "disabled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly selectedOption = "selected-option";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly downButton = "down-button";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly opened = "opened";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly optionsList = "options-list";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly option = "option";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly top = "top";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/selector.md#ClassNames
   */
  static readonly noPosition = "no-position";

  static className(params: {
    disabled?: boolean;
    opened?: boolean;
    noPosition?: boolean;
    position?: "top" | "bottom";
  }) {
    let className = Selector.selector;
    if (params.disabled) {
      className += ` ${Selector.disabled}`;
    }
    if (params.opened) {
      className += ` ${Selector.opened}`;
    }
    if (params.noPosition) {
      className += ` ${Selector.noPosition}`;
    }
    if (params.position === "top") {
      className += ` ${Selector.top}`;
    }
    return className;
  }

  static optionClassName() {
    let className = Selector.option;
    return className;
  }

  static selectedOptionClassName() {
    let className = Selector.selectedOption;
    return className;
  }

  static listClassName() {
    let className = Selector.optionsList;
    return className;
  }

  static downButtonClassName() {
    let className = Selector.downButton;
    return className;
  }
}

export class Separator {
  static readonly separator = "separator";
  static readonly vertical = "vertical";

  static className(params: { vertical?: boolean }) {
    let className = Separator.separator;
    if (params.vertical) {
      className += ` ${Separator.vertical}`;
    }
    return className;
  }
}

export class Skeleton {
  static readonly skeleton = "skeleton";

  static className() {
    return Skeleton.skeleton;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md
 */
export class Slider {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly slider = "slider";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly disabled = "disabled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly track = "slider-track";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly progress = "slider-progress";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly thumb = "slider-thumb";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/slider.md#ClassNames
   */
  static readonly noPosition = "no-position";

  static className(params: { disabled?: boolean; noPosition?: boolean }) {
    let className = Slider.slider;
    if (params.disabled) {
      className += ` ${Slider.disabled}`;
    }
    if (params.noPosition) {
      className += ` ${Slider.noPosition}`;
    }
    return className;
  }

  static trackClassName() {
    let className = Slider.track;
    return className;
  }

  static progressClassName() {
    let className = Slider.progress;
    return className;
  }

  static thumbClassName() {
    let className = Slider.thumb;
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/suggestions.md
 */
export class Suggestions {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/suggestions.md#ClassNames
   */
  static readonly suggestions = "suggestions";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/suggestions.md#ClassNames
   */
  static readonly option = "suggestions-option";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/suggestions.md#ClassNames
   */
  static readonly active = "active";

  static className() {
    let className = Suggestions.suggestions;
    return className;
  }

  static optionClassName(params: { active?: boolean }) {
    let className = Suggestions.option;
    if (params.active) {
      className += ` ${Suggestions.active}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/switch.md
 */
export class Switch {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/switch.md#ClassNames
   */
  static readonly switch = "switch";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/switch.md#ClassNames
   */
  static readonly disabled = "disabled";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/switch.md#ClassNames
   */
  static readonly knob = "switch-knob";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/switch.md#ClassNames
   */
  static readonly active = "active";

  static className(params: { disabled?: boolean; active?: boolean }) {
    let className = Switch.switch;
    if (params.disabled) {
      className += ` ${Switch.disabled}`;
    }
    if (params.active) {
      className += ` ${Switch.active}`;
    }
    return className;
  }
}

/**
 * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/typography.md
 */
export class Typography {
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/typography.md#ClassNames
   */
  static readonly text = "text";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/typography.md#ClassNames
   */
  static readonly subtitle = "subtitle";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/typography.md#ClassNames
   */
  static readonly label = "label";
  /**
   * Read more at @link https://github.com/ncpa0/ADWaveCSS/blob/master/docs/components/typography.md#ClassNames
   */
  static readonly header = "header";

  static className(params: { type?: "subtitle" | "label" | "header" }) {
    switch (params.type) {
      case "subtitle":
        return Typography.subtitle;
      case "label":
        return Typography.label;
      case "header":
        return Typography.header;
    }
    return Typography.text;
  }
}

export class Alert {
  static readonly alert = "alert";
  static readonly info = "info";
  static readonly success = "success";
  static readonly warning = "warning";
  static readonly error = "error";

  static className(params: { type?: "info" | "success" | "warning" | "error" }) {
    switch (params.type) {
      case "info":
        return `${Alert.alert} ${Alert.info}`;
      case "success":
        return `${Alert.alert} ${Alert.success}`;
      case "warning":
        return `${Alert.alert} ${Alert.warning}`;
      case "error":
        return `${Alert.alert} ${Alert.error}`;
    }
    return Alert.alert;
  }
}

/**
 * All CSS variables with colors provided by the Adwave theme.
 */
export enum Colors {
  Bg = "--clr-bg-1",
  Bg2 = "--clr-bg-2",
  Bg3 = "--clr-bg-3",
  Bg4 = "--clr-bg-4",
  Bg5 = "--clr-bg-5",
  Fg = "--clr-fg",
  Text = "--clr-text",
  Text2 = "--clr-text-secondary",
  InfoText = "--clr-info-text",
  InfoFg = "--clr-info-fg",
  InfoBg = "--clr-info-bg",
  SuccessText = "--clr-success-text",
  SuccessFg = "--clr-success-fg",
  SuccessBg = "--clr-success-bg",
  WarningText = "--clr-warning-text",
  WarningFg = "--clr-warning-fg",
  WarningBg = "--clr-warning-bg",
  ErrorText = "--clr-error-text",
  ErrorFg = "--clr-error-fg",
  ErrorBg = "--clr-error-bg",
  Dimmed = "--clr-dimmed",
  Btn = "--clr-btn",
  BtnToggled = "--clr-btn-toggled",
  BtnHover = "--clr-btn-hover",
  BtnPressed = "--clr-btn-pressed",
  BtnAdaptive = "--clr-btn-adaptive",
  BtnAdaptiveToggled = "--clr-btn-adaptive-toggled",
  BtnAdaptiveHover = "--clr-btn-adaptive-hover",
  BtnAdaptivePressed = "--clr-btn-adaptive-pressed",
  Focus = "--clr-focus",
  Border = "--clr-border",
  PrimaryText = "--clr-primary-text",
  Primary0 = "--clr-primary-000",
  Primary1 = "--clr-primary-100",
  Primary2 = "--clr-primary-200",
  Primary3 = "--clr-primary-300",
  Primary4 = "--clr-primary-400",
  Primary5 = "--clr-primary-500",
  Primary6 = "--clr-primary-600",
  Primary7 = "--clr-primary-700",
  Primary8 = "--clr-primary-800",
  Primary9 = "--clr-primary-900",
  DangerText = "--clr-danger-text",
  Danger0 = "--clr-danger-000",
  Danger1 = "--clr-danger-100",
  Danger2 = "--clr-danger-200",
  Danger3 = "--clr-danger-300",
  Danger4 = "--clr-danger-400",
  Danger5 = "--clr-danger-500",
  Danger6 = "--clr-danger-600",
  Danger7 = "--clr-danger-700",
  Danger8 = "--clr-danger-800",
  Danger9 = "--clr-danger-900",
  ListItem = "--clr-list-elem",
  ListItemHover = "--clr-list-elem-hover",
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
Object.freeze(ScrollView);
Object.freeze(Selector);
Object.freeze(Separator);
Object.freeze(Skeleton);
Object.freeze(Slider);
Object.freeze(Suggestions);
Object.freeze(Switch);
Object.freeze(Theme);
Object.freeze(Typography);
Object.freeze(Alert);
Object.freeze(Colors);

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
  ScrollView,
  Selector,
  Separator,
  Skeleton,
  Slider,
  Suggestions,
  Switch,
  Theme,
  Typography,
  Alert,
  Colors,
} as const;
