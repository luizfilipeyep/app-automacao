import { useState } from "react"
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity} from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Inter_400Regular } from "@expo-google-fonts/inter"

import SofaIcon from "../assets/icons/sofa.svg"
import BedIcon from "../assets/icons/bed.svg"
import BathtubIcon from "../assets/icons/bathtub.svg"
import GarageIcon from "../assets/icons/garage.svg"
import LampIcon from "../assets/icons/lamp.svg"

function Slider() {
  // states dos estiloes dos botões
  const [buttonSStyle, setButtonSStyle] = useState(styles.lampButton)
  const [buttonQ1Style, setButtonQ1Style] = useState(styles.lampButton)
  const [buttonQ2Style, setButtonQ2Style] = useState(styles.lampButton)
  const [buttonBStyle, setButtonBStyle] = useState(styles.lampButton)
  const [buttonGStyle, setButtonGStyle] = useState(styles.lampButton)

  // states dos status das lâmpadas
  const [lampSStatus, setLampSStatus] = useState(0)
  const [lampStatusQ1, setLampQ1Status] = useState(0)
  const [lampStatusQ2, setLampQ2Status] = useState(0)
  const [lampStatusB, setLampBStatus] = useState(0)
  const [lampStatusD, setLampDStatus] = useState(0)

  const handleClickLampS = () => {
    if ( lampSStatus === 0 ) { 
      setLampSStatus(1)
      setButtonSStyle(styles.lampButtonActive)
    }
    if ( lampSStatus === 1 ) { 
      setLampSStatus(0)
      setButtonSStyle(styles.lampButton)
    }
  }

  const handleClickLampQ1 = () => {
    if ( lampStatusQ1 === 0 ) { 
      setLampQ1Status(1)
      setButtonQ1Style(styles.lampButtonActive)
    }
    if ( lampStatusQ1 === 1 ) { 
      setLampQ1Status(0)
      setButtonQ1Style(styles.lampButton)
    }
  }

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
        {/* SALA */}
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Sala</Text>

          <SofaIcon style={styles.itemIcon} />

          <View style={styles.actionButtonsWrapper}> {/* Container dos botões de ação */}
            <TouchableOpacity style={buttonSStyle} onPress={handleClickLampS}> {/* Botão da lâmpada */}
              <LampIcon width={25} height={35} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAir}></TouchableOpacity>
          </View>
        </View>

        {/* QUARTO 1 */}
        <View style={styles.item}>
          <Text style={styles.textSliderItem}>Quarto 1</Text>
          
          <BedIcon  />

          <View style={styles.actionButtonsWrapper}> {/* Container dos botões de ação */}
            <TouchableOpacity style={buttonQ1Style} onPress={handleClickLampQ1}> {/* Botão da lâmpada */}
              <LampIcon width={25} height={35} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAir}></TouchableOpacity>
          </View>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 10
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
  },
  actionButtonsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "50%",
    height: "100%",
    padding: 10
  },  
  lampButton: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "white"
  },
  lampButtonActive: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#FF5B01"
  },
  buttonAir: {
    width: 70, 
    height: 140, 
    borderRadius: 50, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "white"
  }
})

export default Slider;