import { Image, StyleSheet, View, Pressable, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fragment } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import FlipCard from 'react-native-flip-card'
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { LinearGradient } from 'expo-linear-gradient';

const deviceWidth = Dimensions.get("window").width - 30;
const deviceHeight = Dimensions.get("window").height;

const Card = () => {
    return (
        <ThemedScrollView style={styles?.pageContainerScroll}>
            <ThemedSafeAreaView style={styles?.pageContainer}>
                <LinearGradient
                    // Background Linear Gradient
                    style={styles?.gradient}
                    colors={['#7209b7', 'transparent']}
                />
                <ThemedView style={styles?.container}>
                    {/** id cards */}
                    <View style={styles?.flipContainer}>
                        <FlipCard>
                            <View style={styles?.card}>
                                <ImageBackground
                                    source={require('../assets/images/bg-card.jpg')}
                                    style={styles?.bgCard}
                                    resizeMode='stretch'
                                >
                                    <Image style={styles?.brand} source={require('./../assets/images/brand.png')} />
                                    <View style={styles?.titleBrand}>
                                        <Text style={styles?.title}>
                                            SMARCITY
                                            <Text style={styles?.regular}>
                                                APP
                                            </Text>
                                        </Text>
                                        <Text style={styles?.subtitle}>
                                            Tarjeta Ciudadana
                                        </Text>
                                    </View>
                                    <Image style={styles?.profileImg} source={require('./../assets/images/profile.png')} />
                                    <View style={styles?.contentText}>
                                        <View style={styles?.textDivider}>
                                            <Text style={[styles?.profileText, styles?.strong]}>LUCAS LANZA</Text>
                                            <Text style={[styles?.profileText, styles?.bold]}>DNI: 24.456.345</Text>
                                            <Text style={[styles?.profileText, styles?.regular, styles?.email]}>LUCAS.LANZA@GMAIL.COM</Text>
                                            <MaterialIcons name="vaccines" size={24} color="#fff" />
                                        </View>
                                        <Text style={styles?.profileTextNumber}>0003 0103</Text>
                                        <Text style={[styles?.profileText, styles?.smallDate]}>ACTUALIZADA EN</Text>
                                        <Text style={[styles?.profileText, styles?.date]}>05/2024</Text>
                                    </View>
                                    <Image style={styles?.qr} source={require('./../assets/images/qr.png')} />
                                </ImageBackground>
                                <View style={styles?.containerTouchIco}>
                                    <Image style={styles?.touchIcon} source={require('./../assets/images/touch.png')} />
                                </View>
                            </View>

                            <View style={styles?.card}>
                                <ImageBackground
                                    source={require('../assets/images/bg-card-municipal.jpg')}
                                    style={styles?.bgCard}
                                    resizeMode='stretch'
                                >
                                    <Image style={styles?.brand} source={require('./../assets/images/brand.png')} />
                                    <View style={styles?.titleBrand}>
                                        <Text style={styles?.title}>
                                            SMARTCITY
                                            <Text style={styles?.regular}>
                                                APP
                                            </Text>
                                        </Text>
                                        <Text style={styles?.subtitle}>
                                            Tarjeta Municipal
                                        </Text>
                                    </View>
                                    <Image style={styles?.profileImg} source={require('./../assets/images/profile.png')} />
                                    <View style={styles?.contentText}>
                                        <View style={styles?.textDivider}>
                                            <Text style={[styles?.profileText, styles?.strong]}>LUCAS LANZA</Text>
                                            <Text style={[styles?.profileText, styles?.bold]}>DNI: 24.456.345</Text>
                                            <Text style={[styles?.profileText, styles?.regular, styles?.email]}>LUCAS.LANZA@GMAIL.COM</Text>
                                            <MaterialIcons name="vaccines" size={24} color="#fff" />
                                        </View>
                                        <Text style={styles?.profileTextNumber}>0003 0103</Text>
                                        <Text style={[styles?.profileText, styles?.smallDate]}>ACTUALIZADA EN</Text>
                                        <Text style={[styles?.profileText, styles?.date]}>05/2024</Text>
                                    </View>
                                    <Image style={styles?.qr} source={require('./../assets/images/qr.png')} />
                                </ImageBackground>
                                <View style={styles?.containerTouchIco}>
                                    <Image style={styles?.touchIcon} source={require('./../assets/images/touch.png')} />
                                </View>
                            </View>
                        </FlipCard>
                    </View>
                    {/**banner info */}
                    <ThemedView style={styles?.boxNews}>
                        <AntDesign style={styles?.boxNewsIconBox} name="infocirlceo" />
                        <View style={styles?.boxNewsTextBox}>
                            <ThemedText style={styles?.boxNewsTitleBox}>
                                Cambiar entre tarjetas
                            </ThemedText>
                            <ThemedText style={styles?.boxNewsDescBox}>
                                Tocá la tarjeta para cambiar entre tus tarjetas.
                            </ThemedText>
                        </View>
                    </ThemedView>
                    <ThemedView style={styles?.boxNews}>
                        <Image style={styles?.boxNewsIconBox} source={require('./../assets/images/share-qr.png')} />
                        <View style={styles?.boxNewsTextBox}>
                            <ThemedText style={styles?.boxNewsTitleBox}>
                                Compartí tus datos
                            </ThemedText>
                            <ThemedText style={styles?.boxNewsDescBox}>
                                Mostrá el código QR para compartir tus datos.
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
        padding: 10,
        minHeight: 500,
    },
    card: {
        overflow: 'hidden',
        borderRadius: 10,
        width: deviceWidth,
        height: 300,
        flexDirection: 'row',
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Android
        elevation: 5,
    },
    smallText: {
        marginVertical: 30,
        textAlign: 'left',
        fontSize: 14,
        color: '#000',
    },
    brand: {
        marginHorizontal: 20,
        width: 70,
        height: 70
    },
    titleBrand: {
        flexDirection: 'column',
        marginTop: 20,
    },
    title: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 18
    },
    regular: {
        fontWeight: 100,
    },
    subtitle: {
        color: '#fff',
        fontWeight: 100,
        fontSize: 12
    },
    profileImg: {
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 10,
        width: 85,
        height: 85
    },
    contentText: {
        marginHorizontal: 20,
        marginVertical: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    qr: {
        borderRadius: 10,
        borderWidth: 10,
        borderColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 80,
        height: 80
    },
    textDivider: {
        marginBottom: 40
    },
    profileText: {
        color: '#fff'
    },
    profileTextNumber: {
        color: '#fff',
        fontWeight: 800,
        fontSize: 22,
        marginBottom: 10
    },
    semibold: {
        fontWeight: 400
    },
    bold: {
        fontWeight: 400,
        fontSize: 19
    },
    strong: {
        fontWeight: 700,
        fontSize: 20
    },
    email: {
        fontSize: 12
    },
    smallDate: {
        fontSize: 10,
        fontWeight: 100
    },
    date: {
        fontSize: 16,
        fontWeight: 500
    },
    bgCard: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    touchIcon: {
        width: 50,
        height: 50
    },
    containerTouchIco: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        bottom: 0,
        right: 0,
        left: 0,
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
        marginRight: 20,
        fontSize: 40,
        color: '#7209b7',
    },
    boxNewsTitleBox: {
        fontWeight: 700,
        fontSize: 22
    },
    boxNewsDescBox: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 19,
        marginTop: 8,
    },
    flipContainer: {
        borderRadius: 10,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Android
        elevation: 5,
        height: 300,
    },
    pageContainer: {
        paddingBottom: 50,
    },
    pageContainerScroll: {
        minHeight: 500,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    }
});

export default Card