/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgorund.png')}
        resizeMode="contain"
        style={styles.image}>
        <View>
          <Text
            style={{
              fontSize: 48,
              textAlign: 'center',
              marginTop: 5,
              color: '#FFFFFF',
              fontFamily: 'Montserrat-Regular',
            }}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 32,
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Montserrat-Regular',
            }}>
            Let's get started
          </Text>
          <View style={styles.input}>
            <Icon name="envelope" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#C0C0C0"
            />
          </View>
          <View style={styles.inputtext}>
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#C0C0C0"
            />
            <Icon
              name="eye-slash"
              size={20}
              color="#000"
              style={styles.iconhide}
            />
          </View>
          <View>
            <Text style={{marginLeft: 350, fontSize: 15, color: '#f0f8ff'}}>
              lupa sandi?
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginLeft: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#00756D',
              paddingVertical: 13,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
              marginVertical: 40,
            }}>
            <Text
              style={{
                color: '#f0fff0',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  image: {
    flex: 1,
    marginBottom: 505,
  },
  input: {
    marginTop: 220,
    width: 400,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginVertical: 5,
    marginBottom: 15,
    margin: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputtext: {
    width: 400,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginVertical: 5,
    marginBottom: 15,
    margin: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'black',
  },
  icon: {
    paddingLeft: 20,
  },
  iconhide: {
    paddingLeft: 220,
  },
});
