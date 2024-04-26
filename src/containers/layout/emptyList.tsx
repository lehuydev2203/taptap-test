import React, { memo } from 'react';
import { StyleProp, TextStyle, View as RNView } from 'react-native';
import { Loader } from './load';
import { Colors } from '../../utils';
import Text from '../components/Text';
import View from '../components/View';

export interface EmptyListProps {
  isError?: boolean;
  isLoading?: boolean;
  isResponse?: boolean;
  color?: string;
  label?: string;
  style?: StyleProp<TextStyle>;
  italic?: boolean;
}

const EmptyList = (props: EmptyListProps) => {
  const { isLoading, isResponse, color, italic, style } = props;

  return (
    <View>
      {isResponse === undefined && !isLoading ? (
        <Text
          italic={italic || false}
          color={color || Colors.elements.white}
          style={[
            { textAlign: 'center', marginVertical: 10, opacity: 0.5 },
            style,
          ]}>
          {props.label || 'Empty List'}
        </Text>
      ) : (
        <React.Fragment>
          <Text
            color={color}
            style={{ textAlign: 'center', marginVertical: 10, opacity: 0.5 }}>
            Loading...
          </Text>
          <Loader size="small" />
        </React.Fragment>
      )}
    </View>
  );
}

export default EmptyList;
