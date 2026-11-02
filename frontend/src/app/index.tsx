import { useState } from "react";
import { Button, Text, View } from "react-native";
import { addStudents, getStudents, removeStudent } from "../../db/queries";

type nameRate = {
  name: string
  rate: number
}

const Students = (props: nameRate) => {
  const [name, setName] = useState("")
  const [rate, setRate] = useState("")

  return (
    <View>
      <Text>{props.name}, {props.rate}</Text>
      <Button title="Add Student" onPress={() => {
        addStudents(props.name, props.rate)
        console.log(getStudents())
      }} />
    </View>
  )
}

const Tuition = () => {
  return (
    <>
    <Students name="Cherry" rate={15} />
    </>

  )
}

export default Tuition;