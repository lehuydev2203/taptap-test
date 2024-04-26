import React, { memo, useEffect, } from 'react';
import { View, Text, Touchable } from '../../containers';
import { Enum, Icons, Colors, Constants, wp, } from '../../utils';
import { Image, StyleSheet } from 'react-native';
import LayoutAnimationCustom from './layoutAnimationCustom';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { EditComponent } from './editComponent';

export const TaskCard = (props: {
    index: number;
    onPressEdt: any;
    title: string;
    priority: number;
    days: string | number;
    paginationValue: number;
    isEdit?: boolean;
    edit?: any;
}) => {
    const heightContainer = useSharedValue(0);
    const animatedHeight = useDerivedValue(() => {
        return withTiming(props.isEdit ? 300 : 100, {
            duration: 500,
        });
    });
    const containerStyle = useAnimatedStyle(() => {
        return {
            height: animatedHeight.value,
            overflow: 'hidden',
        };
    });
    useEffect(() => {
        heightContainer.value = animatedHeight.value;
    }, [animatedHeight]);

    return <LayoutAnimationCustom
        delay={0}
        duration={Constants.ANIM_DURATION250}
        enteringAnimation={Enum.AnimationType.enter.FADE_IN}>
        <Animated.View style={[styles.container, containerStyle]}>
            {
                props.isEdit ?
                    <EditComponent
                        date={props.edit.info.time}
                        updateDate={props.edit.date}
                        priority={props.edit.info.priority}
                        updatePriority={props.edit.priority}
                        value={props.edit.info.title}
                        updateTaskName={props.edit.name}
                        onDelete={props.edit.delete}
                        onSubmit={props.edit.submit}
                    /> :
                    <TaskInfo
                        title={props.title}
                        onPressEdt={props.onPressEdt}
                        priority={props.priority}
                        days={props.days}
                    />
            }
        </Animated.View>
    </LayoutAnimationCustom>
}
const TaskInfo = (props: {
    title: string;
    priority: number;
    days: string | number;
    onPressEdt: any;
}) => {

    return (
        <>
            <View width={wp(10)}>
                <Touchable
                    styles={styles.buttonIcon}
                >
                    <Image source={Icons.ic_checkbox_unselected} style={[styles.icon, { tintColor: Colors.elements.gray }]} />
                </Touchable>
            </View>
            <View flex={1} gap={10}>
                <View row justifySpaceBetween alignCenter>
                    <Text bold color={Colors.elements.black}>{props.title}</Text>
                    <Touchable
                        onPress={props.onPressEdt}
                        styles={styles.buttonIcon}
                    >
                        <Image source={Icons.ic_pen} style={styles.icon} />
                    </Touchable>
                </View>
                <View row alignCenter justifySpaceBetween>
                    <Text small color={Colors.elements.black}>{'Ưu tiên ' + ['thấp', 'trung bình', 'cao'][props.priority]}</Text>
                    <Text smaller color={Colors.elements.black}>{'Còn ' + props.days + ' ngày'}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: Constants.MARGIN20,
        backgroundColor: Colors.elements.white,
        padding: Constants.PADDING20,
        borderRadius: Constants.BORDER_RADIUS12,
        marginBottom: Constants.MARGIN20,
    },

    buttonIcon: {
        width: 24,
        height: 24,
        padding: Constants.PADDING10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: Constants.BORDER_RADIUS8
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.elements.black
    },
    borderBottomLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.elements.gray,
        paddingBottom: Constants.PADDING6,
        marginTop: Constants.MARGIN20
    }
})