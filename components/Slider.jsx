import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

function Slider() {
  return ( 
    <ScrollView style={styles.slider} 
      horizontal
      snapToInterval={screenWidth}
      decelerationRate="fast"
      alwaysBounceHorizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.item}></View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
    </ScrollView>
   );
}

const styles = StyleSheet.create({
  slider: {
    width: "auto",
    overflow: "visible"
  },
  item: {
    marginRight: "10",
    backgroundColor: "gray",
    borderRadius: 25,
    width: screenWidth -50,
    height: 180
  }
})

export default Slider;