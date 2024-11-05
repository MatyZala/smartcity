import { Image, StyleSheet, View, Pressable, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fragment, useEffect, useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { AntDesign, Entypo, FontAwesome6, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Home = () => {
    const [dataUser, setDataUser] = useState({
        key: 'Demo#Publiq.ai',
        email: '',
        clave: ''
    });

    const onSubmit = async () => {
        try {
            const response = await fetch('https://publiq.es/ws_gestion/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataUser),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Almacenar el token y otros datos si es necesario
                await storeUserData(data);
            } else {
                console.error('Error en la respuesta:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const handlerData = (key: string, value: string) => {
        const data = {
            ...dataUser,
            [key]: value
        };
        setDataUser(data);
        console.log(data);
    };

    const storeUserData = async (data: { token: string, idPersona: string, nombre: string, apellido: string }) => {
        try {
            await AsyncStorage.multiSet([
                ['userToken', data.token],
                ['idPersona', data.idPersona],
                ['nombre', data.nombre],
                ['apellido', data.apellido]
            ]);
        } catch (error) {
            console.error('Error saving user data', error);
        }
    };

    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token !== null) {
                // El usuario tiene una sesión activa
                console.log(token);
                return token;
            }
        } catch (error) {
            console.error('Error retrieving token', error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <ThemedScrollView>
            <ThemedSafeAreaView style={styles?.pageContainer}>
                <LinearGradient
                    style={styles?.gradient}
                    colors={['#7209b7', 'transparent']}
                />
                <ThemedText style={styles?.info}>
                    Ingresá a tu cuenta
                </ThemedText>
                <ThemedView style={styles?.container}>
                    <TextInput
                        style={styles?.textInput}
                        onChangeText={e => handlerData('email', e)}
                        placeholder="Email"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles?.textInput}
                        onChangeText={e => handlerData('clave', e)}
                        placeholder="Clave"
                        keyboardType="default"
                        secureTextEntry
                    />
                    <Pressable
                        style={styles?.submitBtn}
                        onPress={onSubmit}
                    >
                        Ingresar
                    </Pressable>
                </ThemedView>
            </ThemedSafeAreaView>
        </ThemedScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 100,
        height: 100,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    boxContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        flexWrap: 'wrap',
        paddingVertical: 20,
        gap: 20,
    },
    strong: {
        fontWeight: '700',
        fontSize: 30,
    },
    info: {
        fontWeight: '600',
        marginHorizontal: 25,
        marginTop: 30,
        textAlign: 'left',
        fontSize: 24,
        color: '#fff',
    },
    icon: {
        fontSize: 40,
        color: '#7209b7',
        width: 40,
        height: 40,
        margin: 'auto',
    },
    boxFluid: {
        width: 350,
    },
    titleBtn: {
        maxWidth: 90,
        margin: 'auto',
        marginTop: 15,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '400',
        color: '#363636',
    },
    firstTitleBtn: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        color: '#000',
    },
    titlePage: {
        fontWeight: '800',
        marginHorizontal: 25,
        marginTop: 50,
        textAlign: 'left',
        fontSize: 20,
        color: '#fff',
    },
    boxNews: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        width: '100%',
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    titleNews: {
        textAlign: 'left',
        fontWeight: '700',
        marginTop: 30,
        width: '100%',
        fontSize: 20,
    },
    boxNewsTextBox: {
        flexDirection: 'column',
        maxWidth: '70%',
    },
    boxNewsIconBox: {
        maxWidth: 50,
        height: 50,
        marginRight: 20,
    },
    boxNewsTitleBox: {
        fontWeight: '700',
        fontSize: 22,
    },
    boxNewsDescBox: {
        fontWeight: '500',
        fontSize: 14,
    },
    pageContainer: {
        paddingBottom: 50,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    submitBtn: {
        marginTop: 20,
        backgroundColor: '#7209b7',
        textAlign: 'center',
        fontWeight: '600',
        borderRadius: 10,
        color: '#fff',
        width: '100%',
        padding: 10,
    },
});

export default Home;