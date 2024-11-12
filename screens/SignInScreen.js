import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '963334485773-ia0sq1abu6fhjl497bmjc7t4ahbrscu8.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Aquí puedes manejar el token de autenticación de Google
      console.log("Token de autenticación:", authentication.accessToken);
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Reemplaza el ícono de Firebase con la imagen del escudo */}
      <Image
         source={require('../assets/logo.png')}
        style={styles.logo} // Aplica estilos para ajustar el tamaño
      />
      
      <Text style={styles.googleText}>
        <Text style={{ color: '#239644' }}>A</Text>
        <Text style={{ color: '#28ab4d' }}>pp</Text>
        <Text style={{ color: '#28ab4d' }}>R</Text>
        <Text style={{ color: '#2dc056' }}>i</Text>
        <Text style={{ color: '#2dc056' }}>e</Text>
        <Text style={{ color: '#36d061' }}>s</Text>
        <Text style={{ color: '#36d061' }}>g</Text>
        <Text style={{ color: '#36d061' }}>o</Text>
        <Text style={{ color: '#36d061' }}>s</Text>
      </Text>
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 380, // Ajusta el tamaño según sea necesario
    height: 130,
    marginBottom: 20, // Espaciado debajo del logo
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  googleText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#239644',
    width: '90%',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 80,
    marginBottom: 150,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
});