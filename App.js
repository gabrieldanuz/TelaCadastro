import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const cadastro = () => {
    alert(nome)
    alert(email)
    alert(senha)
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image
        style={{ width: 200, height: 100, marginBottom: 50 }}
        source={require('./assets/logo.jpg')}
      />

      <TextInput
        placeholder="Seu nome"
        style={styles.textInput}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Seu e-mail"
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Sua senha"
        style={styles.textInput}
        onChangeText={text => setSenha(text)}
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center'
  }
})
