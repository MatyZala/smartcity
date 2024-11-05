import { Image, StyleSheet, View, Pressable, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fragment } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { AntDesign, Entypo, FontAwesome6, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    return (
        <ThemedScrollView>
            <ThemedSafeAreaView style={styles?.pageContainer}>
                    <LinearGradient
                        // Background Linear Gradient
                        style={styles?.gradient}
                        colors={['#7209b7', 'transparent']}
                    />
                    <ThemedText style={styles?.info}>
                        Hola, Lucas
                    </ThemedText>
                    <ThemedText style={styles?.titlePage}>
                        Tus atajos
                    </ThemedText>
                    <ThemedView style={styles?.container}>
                        <ThemedView
                            style={styles?.boxContainer}>
                            <Link href={'/neighborAttention'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <AntDesign style={styles?.icon} name="infocirlceo" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Atención al vecino
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={'/security'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <MaterialIcons style={styles?.icon} name="security" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Seguridad
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={'/'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <SimpleLineIcons style={styles?.icon} name="directions" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Direcciones útiles
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={'/card'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <AntDesign style={styles?.icon} name="idcard" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Identificación
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={'/turnRequest'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <MaterialIcons style={styles?.icon} name="schedule" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Turnos
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={'/'} asChild>
                                <TouchableOpacity>
                                    <View style={styles?.box}>
                                        <Entypo style={styles?.icon} name="news" />
                                    </View>
                                    <Text style={styles?.titleBtn}>
                                        Noticias
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </ThemedView>
                        <ThemedText style={styles?.titleNews}>
                            Hacé más con Smartcity
                        </ThemedText>
                        <ThemedView style={styles?.boxNews}>
                            <Image style={styles?.boxNewsIconBox} source={require('./../assets/images/map.png')} />
                            <View style={styles?.boxNewsTextBox}>
                                <ThemedText style={styles?.boxNewsTitleBox}>
                                    Hacé tus reclamos
                                </ThemedText>
                                <ThemedText style={styles?.boxNewsDescBox}>
                                    Sacá un turno para reparar una calle en mal estado.
                                </ThemedText>
                            </View>
                        </ThemedView>
                    </ThemedView>
            </ThemedSafeAreaView>
        </ThemedScrollView>
    );
}

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
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Android
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
        fontWeight: 700,
        fontSize: 30
    },
    info: {
        fontWeight: 600,
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
        width: (175 * 2)
    },
    titleBtn: {
        maxWidth: 90,
        margin: 'auto',
        marginTop: 15,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 400,
        color: '#363636'
    },
    firstTitleBtn: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 800,
        color: '#000'
    },
    titlePage: {
        fontWeight: 800,
        marginHorizontal: 25,
        marginTop: 50,
        textAlign: 'left',
        fontSize: 20,
        color: '#fff'
    },
    boxNews: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        width: '100%',
        height: 'auto',
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Android
        elevation: 5,
    },
    titleNews: {
        textAlign: 'left',
        fontWeight: 700,
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
        marginRight: 20
    },
    boxNewsTitleBox: {
        fontWeight: 700,
        fontSize: 22
    },
    boxNewsDescBox: {
        fontWeight: 500,
        fontSize: 14
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
    }
});

export default Home