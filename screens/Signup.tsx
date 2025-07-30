import React, { useState } from 'react';
import {
    Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with:', username, email, password);

    if (username == '' || email == '' || password == '' || !email.includes('@') || !email.includes('.')) {
        setError('Missing one or more required fields... ALL fields are required.');
    }

    if (password != confirmPassword) {
        setError('Passwords do not match.');
    }
    // Implement your signup logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: Dimensions.get("window").width * 0.75,
        alignItems: "center"
      }}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
            style={{
                ...styles.input,
                borderWidth: error != '' ? 1 : 0,
                borderColor: error != '' ? "#ff0000" : ""
            }}
            placeholder="your name"
            placeholderTextColor="#999"
            onChangeText={setUsername}
            value={username}
        />

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

        <TextInput
            style={{
                ...styles.input,
                borderWidth: error != '' ? 1 : 0,
                borderColor: error != '' ? "#ff0000" : ""
            }}
            placeholder="confirm password"
            placeholderTextColor="#999"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.loginButtonText}>already have an account?</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{error}</Text>
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
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
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
  signupButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#b87443',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#b87443',
    borderRadius: 8,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    marginTop: 32,
    fontSize: 14,
    color: '#ff0000',
    fontStyle: 'italic',
    textAlign: "center"
  },
});

export default SignUpScreen;
