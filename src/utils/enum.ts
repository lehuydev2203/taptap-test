enum StatusBarStyle {
  default = 'default',
  lightContent = 'light-content',
  darkContent = 'dark-content',
}
export enum EnteringAnimationType {
  FADE_IN,
  LEFT,
  RIGHT,
  UP,
  DOWN,
  FLIP_RIGHT,
  FLIP_LEFT,
  FLIP_UP,
  FLIP_DOWN,
  FLIP_X_EASY,
  FLIP_Y_EASY,
  STRETCH_X,
  STRETCH_Y,
  ZOOM_IN,
  ZOOM_ROTATE,
  ROLL_LEFT,
  ROLL_RIGHT,
}
export enum ExitingAnimationType {
  UNDEFINED,
  FADE_OUT,
  FADE_LEFT,
  FADE_RIGHT,
  FADE_UP,
  FADE_DOWN,
}
enum PriorityEnum {
  low = 0,
  medium = 1,
  high = 2,
}

export const Enum = {
  StatusBarStyle: StatusBarStyle,
  Priority: PriorityEnum,
  AnimationType: {
    enter: EnteringAnimationType,
    exist: ExitingAnimationType,
  },
};
