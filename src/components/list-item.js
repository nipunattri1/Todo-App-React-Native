import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

function ListItem(props) {
    return (
        <View style={styles.tile}>
            <Text style={styles.title}>{props.text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    tile: {
        height: 50,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        alignContent: 'space-between',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
    }
});

export default ListItem;