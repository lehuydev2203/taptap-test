import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../utils';
import { StatusBarCustom } from './statusBarCustom';
import View from '../components/View';

type Props = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  touchableWithoutFeedback?: boolean;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  transparent?: boolean;
  isLoading?: boolean;
  translucent?: boolean;
};

export const Container: React.FC<Props> = ({
  children,
  touchableWithoutFeedback,
  containerStyle,
  barStyle = 'default',
  backgroundColor,
  transparent,
  statusBarBackgroundColor,
  isLoading,
  translucent = false,
  ...otherProps
}) => {
  const loadingView = (
    <View
      backgroundColor="black"
      opacity={0.75}
      flex={1}
      alignCenter
      style={StyleSheet.absoluteFill as StyleProp<ViewStyle>}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );

  const stylesRoot: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor:
      (transparent && 'transparent') ||
      backgroundColor ||
      Colors.elements.white,
      paddingBottom: 42
  };

  const statusBar = (
    <StatusBar
      translucent={translucent}
      backgroundColor={statusBarBackgroundColor}
      barStyle={barStyle}
    />
  );

  return (
    <View style={[stylesRoot, containerStyle]} {...otherProps}>
      {translucent && transparent ? null : (
        <StatusBarCustom backgroundColor={statusBarBackgroundColor} />
      )}
      {statusBar}
      {touchableWithoutFeedback ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            {children}
            {isLoading && loadingView}
          </>
        </TouchableWithoutFeedback>
      ) : (
        <>
          {children}
          {isLoading && loadingView}
        </>
      )}
    </View>
  );
};
