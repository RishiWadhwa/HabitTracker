import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    console.log('Logging in with', email, password);

    navigation.navigate('Home');

    if (email == '' || password == '') {
        setError('Missing one or more required fields. All fields are required.')
        return;
    }
    // Add login logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
        <View style={{
            width: Dimensions.get("window").width * 0.75,
            alignItems: "center"
        }}>
            <Text style={styles.title}>TrackIt</Text>

            <TextInput
            style={{
                ...styles.input,
                borderWidth: error != '' ? 1 : 0,
                borderColor: error != '' ? "#ff0000" : ""
            }}
            placeholder="your@email.com"
            placeholderTextColor="#999"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            />

            <TextInput
            style={{
                ...styles.input,
                borderWidth: error != '' ? 1 : 0,
                borderColor: error != '' ? "#ff0000" : ""
            }}
            placeholder="password"
            placeholderTextColor="#999"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('SignUp')}
            >
            <Text style={styles.signupButtonText}>sign up instead</Text>
            </TouchableOpacity>

            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.quoteText}>Daily Quote via External API</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7C4B5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    color: "#25283D"
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 32,
    color: '#333',
    fontFamily: 'serif',
    textAlign: "left",
    width: "100%"
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#b87443',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#b87443',
    borderRadius: 8,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  quoteText: {
    marginTop: 32,
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
  errorText: {
    marginTop: 32,
    fontSize: 14,
    color: '#ff0000',
    fontStyle: 'italic',
    textAlign: "center"
  },
});

export default LoginScreen;
