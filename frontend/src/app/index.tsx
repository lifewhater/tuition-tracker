import { useState } from "react";
import { Button, Text, View, TextInput, ScrollView } from "react-native";
import { addStudents, getStudents, removeStudent } from "../../db/queries";

type students = {
  name: string
  rate: number
}

// const Students = (props: students) => {
//   const [students, setStudents] = useState(getStudents())

//   return (
//     <View>
//       <Text>{props.name}, {props.rate}</Text>
//       <Button title="Add Student" onPress={() => {
//         addStudents(props.name, props.rate)
//         console.log(getStudents())
//       }} />
//       <Button title="Remove" onPress={()=> {
//         removeStudent(props.name)
//         console.log(getStudents())
//       }}/>
//     </View>
//   )
// }

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