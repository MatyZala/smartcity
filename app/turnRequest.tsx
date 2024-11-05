import { Image, StyleSheet, SafeAreaView, View, Pressable, Text, ScrollView, TouchableOpacity, SectionList, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Fragment, useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import Picker from 'react-native-picker-select'
import { LinearGradient } from 'expo-linear-gradient';

const deviceWidth = Dimensions.get("window").width - 30;
const deviceHeight = Dimensions.get("window").height;


const days = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const data = [
  {
    data: [
      'Veterinaria - 4/7',
      'Revisión médica - 10/7',
      'Dentista - 25/7',
      'Dentista - 27/7',
      'Dentista - 30/7',
    ],
  },
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState({});

  const startDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

  const changeMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  const addAppointment = (day) => {
    const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
    setAppointments((prev) => ({
      ...prev,
      [dateKey]: prev[dateKey] ? [...prev[dateKey], `Turno ${prev[dateKey].length + 1}`] : [`Turno 1`]
    }));
  };

  const renderDays = () => {
    const calendarDays = [];
    for (let i = 0; i < startDayOfMonth; i++) {
      calendarDays.push(<View key={`empty-${i}`} style={styles.day}></View>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
      calendarDays.push(
        <TouchableOpacity key={day} style={styles.day} onPress={() => addAppointment(day)}>
          <ThemedText>{day}</ThemedText>
          {appointments[dateKey] && appointments[dateKey].map((appt, idx) => (
            <ThemedText key={idx} style={styles.appointment}>{appt}</ThemedText>
          ))}
        </TouchableOpacity>
      );
    }
    return calendarDays;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles?.btnMoveCalendar} onPress={() => changeMonth(-1)}>
          <Text style={styles.navText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </Text>
        <TouchableOpacity style={styles?.btnMoveCalendar} onPress={() => changeMonth(1)}>
          <Text style={styles.navText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.daysOfWeek}>
        {days.map((day, idx) => (
          <ThemedText key={idx} style={styles.dayOfWeek}>{day}</ThemedText>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.calendar}>
        {renderDays()}
      </ScrollView>
    </View>
  );
};

const TurnRequest = () => {
  const [date, setDate] = useState(new Date())
  return (
    <ThemedScrollView>
      <ThemedSafeAreaView>
        <LinearGradient
          // Background Linear Gradient
          style={styles?.gradient}
          colors={['#7209b7', 'transparent']}
        />
        <View style={styles?.containerPage}>
          <View style={styles?.containerPicker}>
            <Text style={styles?.pickerTitle}>
              Seleccione el servicio
            </Text>
            <View style={styles?.picker}>
              <Picker
                placeholder={{ label: 'Seleccione', value: '' }}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: 'Veterinaria', value: 'veterinaria' },
                  { label: 'Revisión médica', value: 'Revisión médica' },
                  { label: 'Dentista', value: 'dentista' },
                ]} />
            </View>
          </View>
          <View
            style={styles?.boxContainer}>
            <Calendar />
          </View>
          <ThemedText style={styles?.titlePage}>
            Tus solicitudes
          </ThemedText>
          <View style={styles?.request}>
            <SectionList
              style={styles?.itemContainer}
              sections={data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.title}>
                    {item}
                  </Text>
                  <MaterialIcons style={styles?.iconRequest} name="keyboard-arrow-right" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ThemedSafeAreaView>
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  containerPage: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#2076d4',
    borderRadius: 10,
    margin: 'auto',
    width: 165,
    height: 145,
    padding: 10
  },
  boxContainer: {
    marginVertical: 40,
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    paddingBottom: 0,
  },
  strong: {
    fontWeight: 700,
    fontSize: 30
  },
  info: {
    fontSize: 18,
  },
  icon: {
    width: 70,
    height: 70,
    margin: 'auto',
  },
  boxFluid: {
    width: (175 * 2)
  },
  titleBtn: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 400,
    color: '#fff'
  },
  firstTitleBtn: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 800,
    color: '#fff'
  },
  header: {
    borderRadius: 20,
    backgroundColor: '#7209b7',
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  navText: {
    fontSize: 20,
  },
  daysOfWeek: {
    gap: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayOfWeek: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    width: '14.2857%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointment: {
    backgroundColor: '#7209b7',
    color: '#fff',
    padding: 2,
    marginTop: 2,
    borderRadius: 10,
    fontSize: 10,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  btnMoveCalendar: {
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 14,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  picker: {
    borderRadius: 50,
    backgroundColor: '#fff',
    color: '#fff',
    width: 200,
    padding: 10,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  containerPicker: {
    alignContent: 'center',
    alignItems: 'center'
  },
  pickerTitle: {
    marginVertical: 10,
    fontWeight: 700,
    fontSize: 16,
    color: '#fff',
  },
  request: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 0,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
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
  iconRequest: {
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
    borderRadius: 20,
    alignContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 100,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 5,
  },
  titlePage: {
    width: '100%',
    fontWeight: 800,
    marginHorizontal: 25,
    textAlign: 'left',
    fontSize: 20,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});

export default TurnRequest