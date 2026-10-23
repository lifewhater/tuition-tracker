import { useState } from "react";
import { Button, Text, View } from "react-native";
import { addStudents, getStudents } from "../../db/queries";

export default function Home() {
  const [students, setStudents] = useState(getStudents());

  const add = () => {
    addStudents("Test", 4000);
    setStudents(getStudents());      // reload after the change
  };

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 80, backgroundColor: "white" }}>
      <Text style={{ color: "black", fontSize: 18 }}>Students: {students.length}</Text>
      <Text style={{ color: "black" }}>{JSON.stringify(students)}</Text>
      <Button title="Add test student" onPress={add} />
    </View>
  );
}