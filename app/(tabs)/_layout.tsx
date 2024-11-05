import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#fff' }, tabBarShowLabel: false, tabBarActiveTintColor: '#7209b7' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <View style={focused ? styles?.itemFocused : styles?.itemFocusedOut} />
              <AntDesign style={styles?.icon} name="home" color={color} />
              <ThemedText style={focused ? styles?.titleTabFocused : styles?.titleTab}>
                Inicio
              </ThemedText>
            </Fragment>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: 'Tarjeta ciudadana',
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <View style={focused ? styles?.itemFocused : styles?.itemFocusedOut} />
              <AntDesign style={styles?.icon} name="idcard" color={color} />
              <ThemedText style={focused ? styles?.titleTabFocused : styles?.titleTab}>
                Identificación
              </ThemedText>
            </Fragment>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="security"
        options={{
          title: 'Seguridad',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles?.btnSecurityCenter}>
              <MaterialIcons style={styles?.iconSecurity} name="security" color={color} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <View style={focused ? styles?.itemFocused : styles?.itemFocusedOut} />
              <Ionicons style={styles?.icon} name="notifications-outline" color={color} />
              <ThemedText style={focused ? styles?.titleTabFocused : styles?.titleTab}>
                Notificaciones
              </ThemedText>
            </Fragment>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <View style={focused ? styles?.itemFocused : styles?.itemFocusedOut} />
              <TabBarIcon style={styles?.icon} name="menu" color={color} />
              <ThemedText style={focused ? styles?.titleTabFocused : styles?.titleTab}>
                Más
              </ThemedText>
            </Fragment>
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  itemFocused: {
    height: 16,
    width: 50,
    marginTop: 0,
    borderTopColor: '#7209b7',
    borderTopWidth: 3
  },
  itemFocusedOut: {
    height: 16,
    width: 50,
    marginTop: 0,
    borderTopColor: '#fff',
    borderTopWidth: 3
  },
  icon: {
    fontSize: 20,
  },
  btnSecurityCenter: {
    backgroundColor: '#7209b7',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: -5,
    padding: 10,
    height: 45,
    width: 45,
  },
  iconSecurity: {
    fontSize: 24,
    color: '#fff',
  },
  titleTab: {
    textTransform: 'capitalize',
    fontSize: 7,
    lineHeight: 10,
    fontWeight: 600,
    color: '#707070',
  },
  titleTabFocused: {
    textTransform: 'capitalize',
    fontSize: 7,
    lineHeight: 10,
    fontWeight: 600,
    color: '#7209b7'
  }
})

export default TabLayout