import { useEffect, useState } from "react";
import * as Calendar from 'expo-calendar'
import { Button, Text, View, TextInput, ScrollView } from "react-native";
import { addStudents, getStudents, removeStudent } from "../../db/queries";

const CalendarTest = () => {
  useEffect(() => {
    (async() => {
      const { status } = await Calendar.requestCalendarPermissions();
      if (status === 'granted'){
        const calendars = Calendar.getCalendars(Calendar.EntityTypes.EVENT);
        console.log('All the calendars:');
        console.log(JSON.stringify(calendars));
      }
    })();
  }, [])
}

async function createCalender() {
  
  const newCalendar = await Calendar.createCalendar({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
  })
  console.log(`New Calendar: ${JSON.stringify(newCalendar)}`)
}

const Tuition = () => {
  // Loads the database
  const [students, setStudents] = useState(getStudents())
  const [name, setName] = useState("")
  const [rate, setRate] = useState("")

  const add = () => {
    addStudents(name, Number(rate))
    setStudents(getStudents())
    setName(""); setRate("")
  }
  return (
<ScrollView >

  {/* Calendar Test */}
  <Button title="Create a new calendar" onPress={createCalender} />
  
  <View>
   {/* Empty View */}
  </View>

  {/* Text input for adding a student */}
  <TextInput 
  placeholder="Add Student"
  value= {name}
  onChangeText={setName}
  />

  {/* Text input for adding the rate */}
  <TextInput 
  placeholder="Add Rate"
  value={rate}
  onChangeText={setRate}
  keyboardType="numeric"
  />

  <Button title="Add Student" onPress={add} />
  
  {/* reads word by word and displays the name and rate */}
  {students.map(student => (
    <View key={student.id}>
      <Text> {student.name}, {student.rate_cents} </Text>
      <Button title="Remove" onPress={() => {removeStudent(student.name); setStudents(getStudents()) }} />
    </View>
  ))}
</ScrollView>
  )
}

export default Tuition;