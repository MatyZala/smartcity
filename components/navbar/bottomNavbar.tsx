import { View, Text, Button, StyleSheet, Pressable, Alert, SectionList, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { Fragment, useState } from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import ReactNativeModal from 'react-native-modal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const deviceWidth = Dimensions.get("window").width;

const BottomNavbar = () => {
    /*return (
        <ThemedView style={styles?.container}>
            <Link href={'/neighborAttention'} asChild>
                <TouchableOpacity style={styles?.helpPageBtn}>
                    <TabBarIcon name={'call'} color={'#fff'} />
                    <Text style={styles?.textHelp}>
                        0800
                    </Text>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles?.wppBtn}>
                <Image style={styles?.wppIcon} source={require('./../../assets/images/wpp.png')} />
            </TouchableOpacity>
        </ThemedView>
    );*/
    return null
};

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 70
    },
    helpPageBtn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        position: 'absolute',
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 'auto',
        marginHorizontal: 10,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 5,
        left: 0,
        top: 0,
        height: 40,
    },
    textHelp: {

        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    },
    wppBtn: {
        position: 'absolute',
        borderRadius: 50,
        marginTop: -15,
        marginRight: 20,
        height: 70,
        width: 70,
        bottom: 0,
        right: 0,
        top: 0
    },
    wppIcon: {
        position: 'absolute',
        borderRadius: 50,
        margin: 'auto',
        height: 70,
        width: 70,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    }
});

export default BottomNavbar