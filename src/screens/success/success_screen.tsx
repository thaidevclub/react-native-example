import { CommonActions } from "@react-navigation/native";
import React from "react";
import { View } from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { SuccessProps } from "../../navigation/type/type";
import { ThankyouIcon } from "../../utils/import/import_icons_main";
import { colors } from "../../utils/import/import_options";

const SuccessScreen = ({ navigation, route }: SuccessProps) => {
  let param = saleProductModels[route.params.id]
  let k = 5;

  route.params.route === undefined ? k = 5 : k = route.params.route;

  let screen = Object.values(param);
  console.log(screen)

  const nextScreen = () => navigation.navigate("Main", { id: route.params.id })
  return (
    <MainLayout
      backgroundColor={colors.white}
      title="Success"
      onPressIconLeft={() => navigation.goBack()}
      content={
        <View style={[{ flex: 1 }]}>
          <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <ThankyouIcon />
          </View>
          <ButtonBottomBar
            title="กลับสู่หน้าหลัก"
            onPress={() => nextScreen()}
          />
        </View>
      }
    />
  );
}

export default SuccessScreen;



