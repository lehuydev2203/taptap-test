import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {statusBarHeight, screenWidth, isAndroid} from '../../utils';
import DeviceInfo from 'react-native-device-info';
import View from '../components/View';

export interface statusbarProps {
  /**
   * Import background color for status bar
   */
  backgroundColor?: ColorValue;
}

export const StatusBarCustom = (props: statusbarProps) => {
  const {backgroundColor} = props;
  if (!isAndroid) {
    return (
      <View style={[styles.statusbar, {backgroundColor: backgroundColor}]} />
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  statusbar: {
    height: DeviceInfo.hasDynamicIsland() ? 54 : statusBarHeight,
    width: screenWidth,
  },
});
