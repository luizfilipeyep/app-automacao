import { StyleSheet, Text, View, Image } from "react-native"
import { Link } from "expo-router"

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.image} source={require("../assets/images/homeImage.png")} />
        <Link href="#">Vamos começar</Link>
        

      </View>
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
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
})
