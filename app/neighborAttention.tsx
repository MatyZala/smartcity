import { Image, StyleSheet, View, Pressable, Text, ScrollView, SectionList, TouchableOpacity, Dimensions, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fragment } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';

const data = [
    {
        data: [
            'Alumbrado',
            'Asuntos Hídricos',
            'Limpieza',
            'Obras Particulares',
            'Reclamos Servicios Públicos Concesionados y Redes',
            'Reparación de Calles',
        ],
    },
];

const deviceWidth = Dimensions.get("window").width - 30;
const deviceHeight = Dimensions.get("window").height;

const itemsIcon = {
    'Alumbrado': require('./../assets/images/alumbrado.png'),
    'Asuntos Hídricos': require('./../assets/images/asuntos-hidricos.png'),
    'Limpieza': require('./../assets/images/limpieza.png'),
    'Obras Particulares': require('./../assets/images/obras-particulares.png'),
    'Reclamos Servicios Públicos Concesionados y Redes': require('./../assets/images/reclamos.png'),
    'Reparación de Calles': require('./../assets/images/calles.png'),
}

const NeighborAttention = () => {
    return (
        <ThemedSafeAreaView>
            <ThemedScrollView>
                <ThemedView style={styles?.container}>
                    <SectionList
                        style={styles?.itemContainer}
                        sections={data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item}>
                                <Text style={styles.title}>
                                    {item}
                                </Text>
                                <MaterialIcons style={styles?.icon} name="keyboard-arrow-right" />
                            </TouchableOpacity>
                        )}
                    />
                </ThemedView>
            </ThemedScrollView>
        </ThemedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingHorizontal: 0,
    },
    item: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        position: 'relative',
        //overflow: 'hidden',
        backgroundColor: '#fff',
        padding: 20,
        paddingLeft: 20,
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        marginHorizontal: 'auto',
        maxHeight: 100,
        gap: 5,
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 700,
        color: '#000'
    },
    icon: {
        position: 'absolute',
        color: '#7209b7',
        marginRight: 10,
        marginTop: 10,
        fontSize: 40,
        right: 0,
        top: 0,
    },
    itemImg: {
        position: 'absolute',
        bottom: 0,
        height: 'auto',
        width: 100,
        left: 0,
        top: 0
    },
    itemContainer: {
        alignContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        minHeight: deviceHeight,
        paddingBottom: 20,
    }
});

export default NeighborAttention