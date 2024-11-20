import { StyleSheet, Text, View, Image } from "react-native"
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar'

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Inter_400Regular } from "@expo-google-fonts/inter"
import { useEffect } from "react"

export default function Page() {
  const [fontLoaded] = useFonts({
    Montserrat_500Medium,
    Inter_400Regular
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require("../assets/images/homeImage.png")} />
          <Text style={styles.text}>Bem-vindo à {"\n"}sua {"\n"}Casa {"\n"}Inteligente</Text>
        </View>
        <Link style={styles.button} href="/home">Vamos começar</Link>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    alignItems: "center",
    gap: 50,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  imageWrapper: {
    position: "relative"
  },
  image: {
    position: "relative",
    borderRadius: 25
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 32,
    letterSpacing: -1.3,
    color: "white",
    lineHeight: 30,
    position: "absolute",
    top: 60,
    left: 20
  },
  button: {
    backgroundColor: "#232323",
    width: 225,
    padding: 14,
    color: "white",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 50,
    fontFamily: 'Inter-Regular' 
  }
})
