import React, { memo, ReactNode, useEffect, useState } from 'react';
import { View, Text, Touchable } from '../../containers';
import { Enum, Icons, Colors, Constants, wp, Locale, DateTime } from '../../utils';
import { Button, Easing, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from "react-native-modal";

import moment from 'moment';

export const EditComponent = (props: {
    date: any,
    updateDate: any,
    value: string,
    updateTaskName: ((text: string) => void) | undefined;
    priority: any,
    updatePriority: any,
    onDelete: any;
    onSubmit: any;
}) => {
    const [open, setOpen] = useState(false)
    const [isShowPriority, setShowPriority] = useState(false)
    const [date, setDate] = useState(new Date())

    const handleUpdate = (event: any, selectedDate: any) => {
        if (selectedDate) {
            setDate(selectedDate)
        }
    }
    const handleUpdatePriority = (value: number) => () => {
        props.updatePriority(value)
        setShowPriority(false)
    }
    const submitDate = () => {
        props.updateDate(date)
        setOpen(false)
    }

    return <View flex={1}>
        <View alignEnd>
            <Touchable
                onPress={props.onDelete}
            >
                <View row gap={8} padding={Constants.PADDING5}>
                    <Image source={Icons.ic_checkbox_unselected} style={[styles.icon, { tintColor: Colors.elements.gray }]} />
                    <Text >Xoá </Text>
                </View>
            </Touchable>
        </View>
        <InputEdit
            value={props.value}
            onChangeText={props.updateTaskName}
        />
        <View style={styles.borderBottomLine} >
            <Text bold>Thời hạn</Text>
            <Touchable onPress={() => setOpen(!open)} >
                <Text >{moment(props.date, "DD/MM/YYYY").format(DateTime.DateLine)}</Text>
            </Touchable>
        </View>
        <View style={styles.borderBottomLine} centerSelf>
            <Text bold>Mức độ ưu tiên</Text>
            <Touchable onPress={() => setShowPriority(!isShowPriority)} >
                <Text>{['thấp', 'trung bình', 'cao'][props.priority]}</Text>
            </Touchable>
        </View>
        <View
            style={{
                flex: 1,
                alignItems: "center",
                margin: Constants.MARGIN10
            }}
        >
            <TouchableOpacity
                onPress={props.onSubmit}
                style={{
                    width: wp(20),
                    backgroundColor: Colors.elements.green_light,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: Constants.PADDING5,
                    borderRadius: Constants.BORDER_RADIUS20,
                }}
            >
                <Text center color={Colors.elements.white} >Xong</Text>
            </TouchableOpacity>
        </View>
        <Modal
            isVisible={isShowPriority}
            style={{ margin: 0, justifyContent: 'flex-end' }}
            backdropOpacity={0.5}
            hideModalContentWhileAnimating={true}
            animationInTiming={1000}
            animationOutTiming={1000}
            onBackdropPress={() => setShowPriority(false)}
        >
            <View
                gap={8}
                style={{
                    padding: Constants.PADDING20,
                    paddingBottom: Constants.PADDING30,
                    backgroundColor: Colors.elements.white
                }}
            >
                <View width={'100%'} justifyCenter centerSelf alignCenter>
                    <Text bold large>Vui lòng chọn độ ưu tiên</Text>
                </View>
                <Touchable onPress={handleUpdatePriority(Enum.Priority.high)}>
                    <Text>Cao</Text>
                </Touchable>
                <Touchable onPress={handleUpdatePriority(Enum.Priority.medium)}>
                    <Text >Trung bình</Text>
                </Touchable>
                <Touchable onPress={handleUpdatePriority(Enum.Priority.low)}>
                    <Text >Thấp</Text>
                </Touchable>
            </View>
        </Modal>
        <Modal
            isVisible={open}
            style={{ margin: 0, justifyContent: 'flex-end' }}
            backdropOpacity={0.5}
            hideModalContentWhileAnimating={true}
            animationInTiming={1000}
            animationOutTiming={1000}
            onBackdropPress={() => setOpen(false)}
        >
            <View
                gap={8}
                style={{
                    padding: Constants.PADDING20,
                    backgroundColor: Colors.elements.white
                }}
            >
                <DateTimePicker
                    testID="dateTimeDeadline"
                    locale="vi-VN"
                    value={date || new Date()}
                    display="spinner"
                    timeZoneOffsetInMinutes={0}
                    mode={'date'}
                    onChange={handleUpdate}
                />
                <View width={'100%'}
                    justifyCenter
                    style={{
                        alignItems: "center",
                        margin: Constants.MARGIN10
                    }}>
                    <TouchableOpacity
                        onPress={submitDate}
                        style={{
                            width: wp(20),
                            backgroundColor: Colors.elements.green_light,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: Constants.PADDING5,
                            borderRadius: Constants.BORDER_RADIUS20,
                        }}
                    >
                        <Text center color={Colors.elements.white} >Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    </View>
}

const InputEdit = (props: { value: string, onChangeText: ((text: string) => void) | undefined; }) => {
    const [isFocus, setFocus] = useState(false)
    const _setFocus = () => {
        setFocus(true)
    }
    return <TextInput
        value={props.value}
        placeholder='Task Name'
        onChangeText={props.onChangeText}
        onFocus={_setFocus}
        style={[styles.borderBottomLine, {
            borderColor: isFocus ? Colors.elements.black : Colors.elements.gray
        }]}
    />

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
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.elements.gray,
        paddingBottom: Constants.PADDING10,
        marginTop: Constants.MARGIN20
    }
})