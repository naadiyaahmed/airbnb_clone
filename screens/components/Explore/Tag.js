import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Tag extends Component {
    render() {
        return (
            <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#ddd', borderWidth: 1, borderRadius: 2, marginRight: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 10 }}>{this.props.name}</Text>
            </View>
            // <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#ddd', borderWidth: 1, borderRadius: 2}}>
            //     <Text style={{fontWeight: '700', fontSize: 10}}>Dates</Text>
            // </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});