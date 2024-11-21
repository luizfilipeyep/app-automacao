import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Inter_400Regular } from "@expo-google-fonts/inter"

import SofaIcon from "../assets/icons/sofa.svg"
import BedIcon from "../assets/icons/bed.svg"
import BathtubIcon from "../assets/icons/bathtub.svg"
import GarageIcon from "../assets/icons/garage.svg"

function Slider() {
  const [fontLoaded] = useFonts({
    Montserrat_500Medium,
    Inter_400Regular
  })

  if (!fontLoaded) {
    return null
  }

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
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Sala</Text>
          <SofaIcon />
        </View>
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Quarto 1</Text>
          <BedIcon />
        </View>
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Quarto 2</Text>
          <BedIcon />
        </View>
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Banheiro</Text>
          <BathtubIcon />
        </View>
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Garagem</Text>
          <GarageIcon />
        </View>
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
    height: 180,
    display: "flex",
    justifyContent: "center",
    position: "relative"
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
  },
  textSliderItem: {
    fontFamily: "Inter_400Regular",
    fontSize: 30,
    top: 14,
    left: 14,
    position: "absolute",
    zIndex: 1000
  }
})

export default Slider;