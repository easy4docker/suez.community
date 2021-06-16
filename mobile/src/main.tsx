import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import * as Linking from 'expo-linking';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
      />
      <Text>This is index 3!</Text>
      <TouchableOpacity
            style={styles.buttonClean}
            onPress={() => {
                Linking.openURL('exp://exp.host');
            }}>
            <Text style={styles.buttonCleanText}>Rebuild Application</Text>
           </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 170,
    margin: 10,
  }, 
  buttonClean: {
    alignItems: 'center',
    backgroundColor: '#aa0000',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  buttonCleanText: {
    color : '#fff',
  },
})
