import _ from 'lodash';
import React, { LegacyRef } from 'react';
import {
  LayoutChangeEvent,
  View as RNView,
  ViewProps,
  ViewStyle,
  ColorValue,
  DimensionValue,
  FlexAlignType,
  AnimatableNumericValue,
} from 'react-native';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type ViewPropsCustom = {
  ref?: LegacyRef<any> | undefined;
  row?: boolean;
  flex?: number | undefined;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  justifySpaceAround?: boolean;
  justifySpaceBetween?: boolean;
  justifyEnd?: boolean;
  centerSelf?: boolean;
  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  styles?: StyleProp<ViewStyle>;
  alignEnd?: any;
  alignStart?: any;
  opacity?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
  borderTopRadius?: number | any;
  borderBottomRadius?: number | any;
  borderRightRadius?: number | any;
  borderLeftRadius?: number | any;
  backgroundColor?: ColorValue | undefined;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  borderRadius?: AnimatableNumericValue | undefined;
  gap?: any
};

type Props = ViewProps & ViewPropsCustom;

const View = (props: Props) => {
  const {
    ref,
    row,
    alignCenter,
    justifyCenter,
    centerSelf,
    onLayout,
    justifySpaceAround,
    justifySpaceBetween,
    justifyEnd,
    alignEnd,
    alignStart,
    styles,
    flex,
    alignSelf,
    opacity,
    borderTopRadius,
    borderBottomRadius,
    borderRightRadius,
    borderLeftRadius,
    backgroundColor,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    marginVertical,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    width,
    height,
    borderRadius,
    gap
  } = props;

  let topRadius = {
    borderTopLeftRadius: borderTopRadius,
    borderTopRightRadius: borderTopRadius,
  };
  let bottomRadius = {
    borderBottomLeftRadius: borderBottomRadius,
    borderBottomRightRadius: borderBottomRadius,
  };
  let rightRadius = {
    borderBottomRightRadius: borderRightRadius,
    borderTopRightRadius: borderRightRadius,
  };
  let leftRadius = {
    borderBottomLeftRadius: borderLeftRadius,
    borderTopLeftRadius: borderLeftRadius,
  };

  let radius = () => {
    if (borderTopRadius > 0) {
      return topRadius;
    }

    if (borderBottomRadius > 0) {
      return bottomRadius;
    }

    if (borderRightRadius > 0) {
      return rightRadius;
    }

    if (borderLeftRadius > 0) {
      return leftRadius;
    }

    return {
      borderRadius: 0,
    };
  };

  const _style: any = {
    flexDirection: row ? 'row' : 'column',
    flex: _.isNumber(flex) ? flex : undefined,
    alignSelf: alignSelf ? alignSelf : centerSelf ? 'center' : 'auto',
    alignItems: alignCenter
      ? 'center'
      : alignEnd
        ? 'flex-end'
        : alignStart
          ? 'flex-start'
          : 'stretch',
    justifyContent: justifyCenter
      ? 'center'
      : justifySpaceAround
        ? 'space-around'
        : justifySpaceBetween
          ? 'space-between'
          : justifyEnd
            ? 'flex-end'
            : 'flex-start',
    opacity: opacity || 1,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    padding: padding,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    margin: margin,
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginBottom: marginBottom,
    borderRadius: borderRadius,
    gap: gap
  };

  return (
    <RNView
      ref={ref}
      style={[radius(), _style, styles]}
      {...props}
      onLayout={onLayout}>
      {props.children}
    </RNView>
  );
};

export default View;
