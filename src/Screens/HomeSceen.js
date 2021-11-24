import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Platform, StatusBar, View, Text, Alert, Pressable, FlatList, Modal, TextInput } from 'react-native';
import ListItem from '../components/list-item';


function HomeScreen() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [Inputtext, setText] = React.useState('');
    const submitHandler = (value) => {
        setItems((prevTodo) => {
            return [
                {
                    value: value,
                    key: Math.random().toString(),
                },
                ...prevTodo,
            ];
        });
    };
    const closeModalHandler = () => {
        console.log('Modal has been closed.');
        submitHandler(Inputtext);
        setModalVisible(!modalVisible);
    };
    return (

        <View style={styles.background}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");

                }}
                onDismiss={() => { console.log('Modal has been closed.'); }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Please Input the todo</Text>
                        <TextInput backgroundColor={'pink'}
                            onChange={textN => setText(textN.nativeEvent.text)}
                            borderRadius={8}

                            style={{ width: 150, padding: 2, marginBottom: 8 }} />

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModalHandler()}>
                            <Text style={styles.textStyle}>Add Todo</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >
            <View style={styles.header} >
                <Text style={styles.Appbartitle}>Todo-List</Text>
                <AntDesign onPress={() => setModalVisible(true)} name="pluscircleo" size={24} color="black" />
            </View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <ListItem text={item.value} />}
            />
        </View >
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    Appbartitle: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }


});

export default HomeScreen;