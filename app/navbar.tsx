import { View, Text, Button, StyleSheet, Pressable, Alert, SectionList, Dimensions, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Fragment, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import ReactNativeModal from 'react-native-modal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { ThemedView } from '@/components/ThemedView';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const menuItems = [
    {
        data: [
            'Inicio',
            'Notificaciones',
            'Teléfonos y direcciones útiles',
            'Atención al vecino',
            'Seguridad',
            'Tarjeta ciudadana',
            'Servicios',
            'Turnos',
            'Tour Smartcity APP'
        ],
    }
];

const Navbar = () => {
    return (
        <ThemedView>
            <View style={styles?.headerNavbar}>
                <Image style={styles?.profileImg} source={require('./../assets/images/profile.png')} />
                <View style={styles?.profileText}>
                    <Text style={styles?.username}>
                        Lucas Lanza
                    </Text>
                    <View style={styles?.profileFlex}>
                        <Text style={styles?.signout}>
                            Tu perfil
                        </Text>
                        <MaterialIcons style={styles?.profileRightIcon} name="keyboard-arrow-right" />
                    </View>
                </View>
            </View>
            <SectionList
                sections={menuItems}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <Link href={links[item]?.link} asChild>
                        <TouchableOpacity style={styles?.itemNavbar}>
                            {links[item]?.icon}
                            <ThemedText style={styles.textModal}>
                                {'  '}{item}
                            </ThemedText>
                            <MaterialIcons style={styles?.itemsRightIcon} name="keyboard-arrow-right" />
                        </TouchableOpacity>
                    </Link>
                )}                                              
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    itemNavbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    textModal: {
        paddingVertical: 10,
        paddingBottom: 20,
        lineHeight: 8,
        width: '85%',
        marginLeft: '5%',
        fontWeight: 700,
        fontSize: 12,
        color: '#363636'
    },
    titlePage: {
        width: 200
    },
    divider: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerNavbar: {
        backgroundColor: '#7209b7',
        padding: 10,
        height: 70,
        flexDirection: 'row',
        marginBottom: 20
    },
    userPicture: {
        width: 50,
        height: 50
    },
    username: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 20
    },
    signout: {
        color: '#fff',
        fontWeight: 800,
        fontSize: 14
    },
    profileText: {
        marginHorizontal: 10,
    },
    profileImg: {
        borderRadius: 20,
        height: 50,
        width: 50,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Android
        elevation: 5,
    },
    itemsRightIcon: {
        color: '#707070',
        fontSize: 24
    },
    itemIcon: {
        color: '#363636',
        fontSize: 24,
    },
    profileRightIcon: {
        lineHeight: 19,
        color: '#fff',
        fontSize: 19,
    },
    profileFlex: {
        flexDirection: 'row'
    }
});

const links = {
    'Inicio': {
        link: '',
        icon: <AntDesign style={styles?.itemIcon} name="home" />
    },
    'Notificaciones': {
        link: '/',
        icon: <Ionicons style={styles?.itemIcon} name="notifications-outline" />
    },
    'Teléfonos y direcciones útiles': {
        link: '/',
        icon: <SimpleLineIcons style={styles?.itemIcon} name="directions" />
    },
    'Atención al vecino': {
        link: '/neighborAttention',
        icon: <AntDesign style={styles?.itemIcon} name="infocirlceo" />
    },
    'Seguridad': {
        link: '/security',
        icon: <MaterialIcons style={styles?.itemIcon} name="security" />
    },
    'Tarjeta ciudadana': {
        link: '/card',
        icon: <AntDesign style={styles?.itemIcon} name="idcard" />
    },
    'Servicios': {
        link: '/',
        icon: <MaterialCommunityIcons style={styles?.itemIcon} name="water-outline" />
    },
    'Turnos': {
        link: '/turnRequest',
        icon: <MaterialIcons style={styles?.itemIcon} name="schedule" />
    },
    'Tour Smartcity APP': {
        link: '/',
        icon: <FontAwesome5 style={styles?.itemIcon} name="flag" />
    }
}

export default Navbar