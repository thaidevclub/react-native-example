import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Text, View } from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { ConsentProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";

const ConsentScreen = ({navigation, route}: ConsentProps) => {
  const param = saleProductModels[route.params.id];
  const paramRoute = route.params.route;
  const nextScreen = () => navigation.dispatch(  
    CommonActions.navigate({
      name: `${paramRoute}`,
      params: {id: route.params.id, route: param.route4}
    })
  )
  return (
    <MainLayout
      backgroundColor={colors.white}
      title="Consent"
      onPressIconLeft={() => navigation.goBack()}
      content={
        <View style={[{ flex: 1 }]}>
          <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={[{ fontSize: 45, fontWeight: 'bold' }]}>Consent Screen</Text>
          </View>
          <ButtonBottomBar
            title="ยอมรับ"
            onPress={() => nextScreen()}
          />
        </View>
      }
    />
  );
}

export default ConsentScreen;



