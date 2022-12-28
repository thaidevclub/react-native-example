import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Text, View } from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { VerificationProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";

const VerificationScreen = ({ navigation, route }: VerificationProps) => {

  const param = saleProductModels[route.params.id];
  const paramRoute = route.params.route;
  const nextScreen = () => navigation.dispatch(
    CommonActions.navigate({
      name: `${paramRoute}`,
      params: {id: route.params.id, route: param.route3}
    })
  );
    console.log(paramRoute)
  return (
    <MainLayout
      backgroundColor={colors.white}
      title="Verification"
      onPressIconLeft={() => navigation.goBack()}
      content={
        <View style={[{ flex: 1 }]}>
          <View style={[{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={[{ fontSize: 45, fontWeight: 'bold' }]}>Verification Screen</Text>
          </View>
          <ButtonBottomBar
            title="Verification"
            onPress={() => nextScreen()}
           />
        </View>
      }
    />
  );
}

export default VerificationScreen;



