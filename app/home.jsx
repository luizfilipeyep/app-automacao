import { StyleSheet, Text, View, Image, ScrollView } from "react-native"
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar'

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Inter_400Regular } from "@expo-google-fonts/inter"

import ConfigIcon from "../assets/icons/config.svg"
import HomeIcon from "../assets/icons/home.svg"

import Slider from "../components/Slider"

function Home() {
  const useName = "Luiz"

  const [fontLoaded] = useFonts({
    Montserrat_500Medium,
    Inter_400Regular
  })

  if (!fontLoaded) {
    return null
  }

  return ( 
    <View style={styles.wrapper}>
      <View style={styles.mainWrapper} >
        <Text style={styles.mainText}>Olá {useName}, {"\n"}<Text style={styles.mainTextSecondColor}>Bem-vindo {"\n"}ao Lar!</Text></Text>
        
        <View style={styles.mainIconWrapper}>
          <ConfigIcon width="25" height="25" />
          <HomeIcon width="25" height="25" />
        </View>
      </View>

      <Slider />
     
      <StatusBar style="dark" />
    </View>
   );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 18
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between"
  },
  mainText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 40,
    color: "black",
    lineHeight: 40,
    letterSpacing: -1.3
  },
  mainTextSecondColor: {
    color: "#818181"
  },
  mainIconWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 15
  }  
})

export default Home;