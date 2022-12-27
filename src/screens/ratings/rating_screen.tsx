import React from "react";
import { Alert, Text, View } from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import ButtonSingleComponent from "../../components/buttons/button/components/button_single_component";
import ButtonLink from "../../components/buttons/button_link";
import CardMainMenuComponent from "../../components/cards/card_main_menu_component";
import SpacerCaption from "../../components/spacer/spacer_caption";
import { ButtonPattern } from "../../enum/button/enum_pattern";
import MainLayout from "../../layout/main_layout";
import NavGradientSVG from "../../lineargradient/nav_gradient_svg";
import { RatingProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";
import { sc } from "../../utils/import/import_options";

const RatingScreen = ({ navigation, route }: RatingProps) => (
  <MainLayout
    title={route.params.title}
    backgroundColor={colors.white}
    onPressIconLeft={() => navigation.goBack()}
    content={<View style={[{ flex: 1 }]}>
      <View style={[{ flex: 1, marginHorizontal: sc.padMid}]}>
        <SpacerCaption />
        <ButtonSingleComponent
          title={route.name}
          onPress={() => navigation.navigate("Main", { id: "1", title: '', icon: <Text /> })}
          icon={ButtonPattern.scanSim.icon}
          hasIcon={true} />
        <SpacerCaption />

        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}]}>

          <CardMainMenuComponent
            title={route.params.title}
            icon={route.params.icon}
            isTwoLine={true}
            onPress={() => { }}
          />
        </View>


      </View>
      <ButtonBottomBar
        title={ButtonPattern.camera.title}
        onPress={() => Alert.alert('Hey')}
        icon={ButtonPattern.camera.icon}
        hasIcon={true} />
    </View>} />
)

export default RatingScreen;



