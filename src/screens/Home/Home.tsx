import React, { memo, useCallback } from 'react';
import { Container, View, Text, Touchable, List, TaskCard } from '../../containers';
import { useTodoViewModel } from '../../viewmodels';
import { Enum, Icons, Colors, Constants, wp } from '../../utils';
import { Image, StyleSheet } from 'react-native';
import moment from 'moment';


export const HomeScreen = () => {
    const model = useTodoViewModel()

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        const days = moment(item.time, 'DD/MM/YYYY').diff(moment(), 'days') + 1;

        return <TaskCard
            key={`${index}-${item.id}`}
            title={item.title}
            priority={item.priority}
            days={days}
            onPressEdt={() => model.editItem(item)}
            index={index}
            paginationValue={model.getList().length || 0}
            isEdit={model.getEditId() === item.id}
            edit={model.editFunc}
        />
    }
    return (
        <Container backgroundColor={Colors.primary.taptap_yellow} barStyle={Enum.StatusBarStyle.lightContent} >
            <View justifyCenter alignCenter padding={Constants.PADDING20}>
                <Text color={Colors.elements.white}>To-do list</Text>
            </View>
            <View flex={1} gap={20} paddingBottom={Constants.PADDING20}>
                <List
                    data={model.getList()}
                    renderItem={renderItem}
                    extraData={model.getList()}
                    isScroll
                />
            </View>
            <View justifyCenter alignCenter>
                <ButtonAdd onPress={model.addItem} />
            </View>
        </Container>
    );
}

const ButtonAdd = memo((props: { onPress: any; }) => {
    return <Touchable
        onPress={props.onPress}
        styles={styles.buttonAdd}
    >
        <View row flex={1} justifyCenter alignCenter gap={8}>
            <Text color={Colors.elements.white}>Tạo task mới</Text>
            <Image source={Icons.ic_add} />
        </View>
    </Touchable>
}
)



const styles = StyleSheet.create({
    buttonAdd: {
        width: wp(80),
        height: 32,
        borderRadius: 32,
        paddingVertical: Constants.PADDING6,
        paddingHorizontal: Constants.PADDING12,
        backgroundColor: Colors.elements.red_light,
    },
    buttonIcon: {
        width: 16,
        height: 16,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.elements.black
    }
})