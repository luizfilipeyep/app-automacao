import { StyleSheet, Text, View, Image } from "react-native"
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar'

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Inter_400Regular } from "@expo-google-fonts/inter"

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
      <View>
        <Text style={styles.mainText}>Olá {useName}, {"\n"}<Text style={styles.mainTextSecondColor}>Bem-vindo {"\n"}ao Lar!</Text></Text>
      </View>
      
      <StatusBar style="dark" />
    </View>
   );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
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
  }
})

export default Home;