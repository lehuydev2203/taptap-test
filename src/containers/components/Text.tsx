import React from 'react';
import {
  ColorValue,
  Text as RNText,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import { Colors, Fonts } from '../../utils';

type TextProp = {
  fontSize?: number;
  /* The `smaller?: boolean` font size is 12 */
  smaller?: boolean;
  /* The `small?: boolean` font size is 14 */
  small?: boolean;
  /* The `medium?: boolean` font size is 16 */
  medium?: boolean;
  /* The `large?: boolean` font size is 20 */
  large?: boolean;
  /* The `extraLarge?: boolean` font size is 24 */
  extraLarge?: boolean;
  /* The `extraLarger?: boolean` font size is 32 */
  extraLarger?: boolean;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
  regular?: boolean;
  color?: ColorValue | undefined;
  fontFamily?: String;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  children?: string;
  alignSelf?: boolean;
  style?: StyleProp<TextStyle> | undefined;
  lineHeight?: number;
  verticalAlignCenter?: TextProps;
  verticalAlignBottom?: TextProps;
  verticalAlignTop?: TextProps;
  numberOfLines?: number | undefined;
  fontWeight?:
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
};

const Text = (props: TextProp & TextProps) => {
  const {
    fontSize,
    smaller,
    small,
    large,
    extraLarge,
    extraLarger,
    bold,
    semiBold,
    color = Colors.elements.black,
    center,
    right,
    style,
    fontFamily,
    regular,
    lineHeight,
    alignSelf,
    verticalAlignCenter,
    verticalAlignBottom,
    verticalAlignTop,
    italic,
    numberOfLines,
    fontWeight,
    ...otherProps
  } = props;

  // prettier-ignore
  const styles: any = {
    alignSelf: alignSelf ? 'center' : 'auto',
    color,
    fontSize: fontSize ? fontSize :
      smaller ? Fonts.size.extra_small :
        small ? Fonts.size.small :
          large ? Fonts.size.large :
            extraLarge ? Fonts.size.extra_large :
              extraLarger ? Fonts.size.extra_larger : Fonts.size.medium,

    textAlign: center ? 'center' : right ? 'right' : 'left',
    fontFamily: fontFamily ? fontFamily : bold ? Fonts.face.bold :
      semiBold ? Fonts.face.semibold :
        regular ? Fonts.face.regular :
          Fonts.face.medium
    ,
    includeFontPadding: false,
    textAlignVertical: verticalAlignCenter && 'center' || verticalAlignBottom && 'bottom' || verticalAlignTop && 'top' || 'auto',
    lineHeight: lineHeight,
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: fontWeight ? fontWeight : bold ? 'bold' : 'normal',
    'letterSpacing': 0.75,
  };

  return (
    <RNText
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[styles, style]}
      {...otherProps}>
      {props.children}
    </RNText>
  );
};


export default Text;
