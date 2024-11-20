import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

function Slider() {
  return ( 
    <View style={styles.sliderWrapper}>
      <View style={styles.textSliderWrapper}><Text style={styles.textSlider}>Cômodos</Text></View>

      <ScrollView style={styles.slider}
        horizontal
        snapToInterval={screenWidth - 45}
        decelerationRate="fast"
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </ScrollView>
    </View>
   );
}

const styles = StyleSheet.create({
  sliderWrapper: {
    marginTop: 50
  },
  slider: {
    width: "auto",
    overflow: "visible"
  },
  item: {
    marginRight: "10",
    backgroundColor: "#F1F1F1",
    borderRadius: 25,
    width: screenWidth -50,
    height: 180
  },
  textSliderWrapper: {
    width: 100,
    borderColor: "#B8B8B8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 14
  },
  textSlider: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    textAlign: "center"
  }
})

export default Slider;