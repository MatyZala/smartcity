import { Image, StyleSheet, View, Pressable, Text, ScrollView, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fragment, useEffect, useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import axios from 'axios';
import Toast from 'react-native-root-toast';

export default function HomeScreen() {
  const [panicAlert, setPanicAlert] = useState(false)

  const sendAlert = async (id, alertCode, latitude, length) => {
    const url = 'https://www.publiq.es/ws_genero/denuncia_genero.asmx';

    const alertCodes = [
      'Boton de pánico',
      'Bateria Baja',
      'Dispositivo apagado',
      'Actualiza ubicación',
      'Boton de pánico - RELLAMADO',
    ]

    const soapRequest = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:aler="http://www.alertamunicipios.com/">
      <soap:Header/>
      <soap:Body>
        <aler:denuncia_genero>
          <aler:id>${id}</aler:id>
          <aler:codigo_alerta>${alertCode}</aler:codigo_alerta>
          <aler:latitud>${latitude}</aler:latitud>
          <aler:longitud>${length}</aler:longitud>
        </aler:denuncia_genero>
      </soap:Body>
    </soap:Envelope>
  `;

    try {
      const { data } = await axios.post(url, soapRequest, {
        headers: {
          'Content-Type': 'application/soap+xml; charset=utf-8',
        },
      });
      
      setPanicAlert(true)
      setTimeout(() => {
        setPanicAlert(false)
      }, 1000)
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePanicBtn = (id, alertCode, latitude, length) => sendAlert(id, alertCode, latitude, length);

  return (
    <ThemedScrollView>
      <ThemedSafeAreaView style={styles?.pageContainer}>
        <ThemedView style={styles?.container}>
          <Toast visible={panicAlert}>Alerta enviada!</Toast>
          <ThemedView
            style={styles?.boxContainer}>
            <TouchableOpacity onPress={() => handlePanicBtn('000000000000', '0', '-34.6037', '-58.3816')}>
              <View style={styles?.box}>
                <MaterialCommunityIcons style={styles?.icon} name="police-badge" />
                <Text style={styles?.firstTitleBtn}>
                  911
                </Text>
              </View>
              <Text style={styles?.titleBtn}>
                EMERGENCIA POLICIAL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePanicBtn('000000000000', '0', '-34.6037', '-58.3816')}>
              <View style={styles?.box}>
                <Ionicons style={styles?.icon} name="medical" />
                <Text style={styles?.firstTitleBtn}>
                  107
                </Text>
              </View>
              <Text style={styles?.titleBtn}>
                EMERGENCIA MÉDICA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePanicBtn('000000000000', '0', '-34.6037', '-58.3816')}>
              <View style={styles?.box}>
                <FontAwesome5 style={styles?.icon} name="fire-alt" />
                <Text style={styles?.firstTitleBtn}>
                  100
                </Text>
              </View>
              <Text style={styles?.titleBtn}>
                BOMBEROS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePanicBtn('000000000000', '0', '-34.6037', '-58.3816')}>
              <View style={styles?.box}>
                <FontAwesome5 style={styles?.icon} name="hands-helping" />
                <Text style={styles?.firstTitleBtn}>
                  103
                </Text>
              </View>
              <Text style={styles?.titleBtn}>
                DEFENSA CIVIL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePanicBtn('000000000000', '0', '-34.6037', '-58.3816')}>
              <View style={styles?.box}>
                <MaterialIcons style={styles?.icon} name="family-restroom" />
                <Text style={styles?.firstTitleBtn}>
                  144
                </Text>
              </View>
              <Text style={styles?.titleBtn}>
                VIOLENCIA FAMILIAR O DE GÉNERO
              </Text>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ThemedSafeAreaView>
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 100,
    minHeight: 500,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 100,
    margin: 'auto',
    width: 165,
    height: 165,
    padding: 20,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  boxContainer: {
    justifyContent: 'center',
    marginTop: 40,
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  strong: {
    fontWeight: 700,
    fontSize: 30,
    color: '#000',
  },
  info: {
    fontSize: 18,
    lineHeight: 40
  },
  icon: {
    borderRadius: 50,
    color: '#7209b7',
    margin: 'auto',
    marginBottom: 0,
    fontSize: 70,
    height: 70,
    width: 70,
  },
  boxFluid: {
    width: (175 * 2)
  },
  titleBtn: {
    textTransform: 'capitalize',
    maxWidth: 90,
    margin: 'auto',
    marginTop: 15,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 400,
    color: '#000'
  },
  firstTitleBtn: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 800,
    color: '#000'
  },
  bgCard: {
    flexDirection: 'column',
    position: 'absolute',
    height: '100%',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  },
  pageContainer: {
    paddingBottom: 50,
  }
});
