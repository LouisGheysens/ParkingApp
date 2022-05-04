import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'
import { Input } from 'react-native-elements';


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
})

const RegisterScreen = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onsubmit: (values) => {
            //Register method firebase
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(user => console.log(user))
            .catch(err => console.log(err));
        },
    });

  return (
    <View>
      <Text>RegisterScreen</Text>


      <Input 
      placeholder='Naam' 
      value={formik.values.name} 
      onChangeText={formik.handleChange("name")}
       />

    <Input 
      placeholder='Email' 
      value={formik.values.email} 
      onChangeText={formik.handleChange("email")}
       />


    <Input 
      placeholder='Wachtwoord' 
      value={formik.values.password} 
      onChangeText={formik.handleChange("password")}
       />

       <Button title='Registreer' onPress={formik.handleSubmit} />


    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})