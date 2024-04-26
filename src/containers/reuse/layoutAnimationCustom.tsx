import React, { FC, memo, useMemo } from 'react'
import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native'
import Animated2, {
  FadeIn,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  FadeOutUp,
  FlipInEasyX,
  FlipInEasyY,
  FlipInXDown,
  FlipInXUp,
  FlipInYLeft,
  FlipInYRight,
  Layout,
  RollInLeft,
  RollInRight,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  StretchInX,
  StretchInY,
  ZoomIn,
  ZoomInRotate,
} from 'react-native-reanimated'
import { Constants, EnteringAnimationType, ExitingAnimationType } from '../../utils'

type LayoutAnimationProps = {
  /**
   * Animation entering
   * @property FADE_IN | LEFT | RIGHT | UP | DOWN | FLIP_RIGHT | FLIP_LEFT | FLIP_UP | FLIP_DOWN | FLIP_X_EASY | FLIP_Y_EASY | STRETCH_X | STRETCH_Y | ZOOM_IN | ZOOM_ROTATE | ROLL_LEFT | ROLL_RIGHT
   */
  enteringAnimation?: EnteringAnimationType

  /**
   * Animation exiting
   * @property UNDEFINED | FADE_OUT | FADE_LEFT | FADE_RIGHT | FADE_UP | FADE_DOWN
   */
  exitingAnimation?: ExitingAnimationType
  /**
   * Number of duration
   * @property Constants.ANIM_DURATION | Constants.ANIM_DURATION100 | Constants.ANIM_DURATION250
   *
   */
  duration?: number

  /**
   * Number of milliseconds
   * @property ANIM_DELAY
   */

  delay?: number

  /**
   * @property StyleProps
   */
  style?: StyleProp<ViewStyle>

  /**
   * @property React.ReactNode
   */
  children?: React.ReactNode

  onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}

const LayoutAnimationCustom: FC<LayoutAnimationProps> = memo(
  ({
    enteringAnimation = EnteringAnimationType.LEFT,
    exitingAnimation = ExitingAnimationType.UNDEFINED,
    duration = Constants.ANIM_DURATION,
    delay = Constants.ANIM_DELAY,
    style = {},
    onLayout,
    children,
  }) => {
    const enteringAnimList = useMemo(
      () => ({
        [EnteringAnimationType.FADE_IN]: FadeIn,
        [EnteringAnimationType.LEFT]: SlideInLeft,
        [EnteringAnimationType.RIGHT]: SlideInRight,
        [EnteringAnimationType.UP]: SlideInUp,
        [EnteringAnimationType.DOWN]: SlideInDown,
        [EnteringAnimationType.FLIP_RIGHT]: FlipInYRight,
        [EnteringAnimationType.FLIP_LEFT]: FlipInYLeft,
        [EnteringAnimationType.FLIP_UP]: FlipInXUp,
        [EnteringAnimationType.FLIP_DOWN]: FlipInXDown,
        [EnteringAnimationType.FLIP_X_EASY]: FlipInEasyX,
        [EnteringAnimationType.FLIP_Y_EASY]: FlipInEasyY,
        [EnteringAnimationType.STRETCH_X]: StretchInX,
        [EnteringAnimationType.STRETCH_Y]: StretchInY,
        [EnteringAnimationType.ZOOM_IN]: ZoomIn,
        [EnteringAnimationType.ZOOM_ROTATE]: ZoomInRotate,
        [EnteringAnimationType.ROLL_LEFT]: RollInLeft,
        [EnteringAnimationType.ROLL_RIGHT]: RollInRight,
      }),
      [],
    )
    const exitingAnimList = useMemo(
      () => ({
        [ExitingAnimationType.UNDEFINED]: undefined,
        [ExitingAnimationType.FADE_OUT]: FadeOut,
        [ExitingAnimationType.FADE_DOWN]: FadeOutDown,
        [ExitingAnimationType.FADE_LEFT]: FadeOutLeft,
        [ExitingAnimationType.FADE_RIGHT]: FadeOutRight,
        [ExitingAnimationType.FADE_UP]: FadeOutUp,
      }),
      [],
    )

    return (
      <Animated2.View
        entering={enteringAnimList[enteringAnimation]
          .duration(duration)
          .delay(delay)}
        exiting={exitingAnimList[exitingAnimation]}
        layout={Layout.delay(100)}
        style={style}
        onLayout={onLayout}>
        {children}
      </Animated2.View>
    )
  },
)

export default LayoutAnimationCustom
