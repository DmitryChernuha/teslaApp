import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import CarItem from "./components/carItem/index";

export default function App() {
    return (
        <View style={styles.container}>
            <CarItem/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
