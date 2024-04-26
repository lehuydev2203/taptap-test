import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import {Colors, isAndroid} from '../../utils';
import View from '../components/View';

export interface LoadingProps {
  animating?: boolean | undefined;
  color?: ColorValue | undefined;
  size: number | 'small' | 'large' | undefined;
  hidesWhenStopped?: boolean | undefined;
  style?: StyleProp<ViewStyle>;
}

export const Loader = (props: LoadingProps) => {
  const {animating, color, size, style, hidesWhenStopped} = props;

  /**
   * Check size just enter small or large on ios ,
   * and parseInt if value differents small or large on Android
   * **/
  let isSize = size;

  if (size === 'small' || size === 'large') {
    isSize = size;
  } else if (typeof size === 'number') {
    isSize = size; // Convert number to string if it's a number
  }

  if (!isAndroid) {
    if (isSize === 'small' || isSize === 'large') {
      isSize = isSize;
    } else {
      isSize = 'small';
    }
  }

  return (
    <View
      alignCenter
      justifyCenter
      centerSelf
      style={[styles.loaderContainer, style]}>
      {isAndroid ? (
        <ActivityIndicator size={isSize} color={color} animating={animating} />
      ) : (
        <ActivityIndicator
          size={isSize}
          color={color}
          animating={animating}
          hidesWhenStopped={hidesWhenStopped}
        />
      )}
    </View>
  );
};
const colors = isAndroid ? 'dark cyan' : 'gray';

Loader.defaultProps = {
  animating: true,
  color: colors,
  size: 'small',
};

const styles = StyleSheet.create({
  loaderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.primary.taptap_yellow,
  },
});
