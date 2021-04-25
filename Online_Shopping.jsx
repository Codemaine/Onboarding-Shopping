import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Online_Shopping(props) {
  return (
      <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>ONLINE SHOPPING</Text>
        <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley</Text>
        <Image source={require('./assets/online_shopping.png')} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => props.navigation.navigate('Add_To_Cart')}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <View>
        </View>
        <View style={{ flexDirection: "row" }}>
        <View style={styles.navLarge}></View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Add_To_Cart')} style={styles.navSmall}></TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Successful_purchase')} style={styles.navSmall}></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.navLink} onPress={() => props.navigation.navigate('Add_To_Cart')}>Skip</Text>
        </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: "#fff"
 },
  main: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    letterSpacing: 1,
  },
  content: {
    color: "#898989",
    fontSize: 15,
    letterSpacing: 1
  },
  image: {
    height: 300,
    width: 300,
    marginVertical: 10,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "#776FC4",
    padding: 15,
    borderRadius: 50,
    width: 120,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center"
  },
  bottomNav: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 20
  },
  navLink: {
    color: "#BCB2B2"
  },
  navSmall: {
    backgroundColor: "#BCBAD5",
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 5
  },
  navLarge: {
    backgroundColor: "#7670C4",
    height: 10,
    width: 20,
    alignSelf: "center",
    borderRadius: 10,
    marginHorizontal: 5
  }
});
