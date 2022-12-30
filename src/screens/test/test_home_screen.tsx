import { CommonActions } from "@react-navigation/native";
import React from "react";
import { View } from 'react-native';
import ButtonTwinBottomBar from "../../components/buttons/button/button_twin_bottom_bar";
import ButtonSingleComponent from "../../components/buttons/button/components/button_single_component";
import { saleProductModels } from "../../model/sale_product_model";
import { TestHomeScreenProps } from "../../navigation/type/type";
import { sc } from "../../utils/import/import_options";

const TestHomeScreen = ({ navigation, route }: TestHomeScreenProps) => {
  let param = saleProductModels[route.params.id]
  let k = 5;

  route.params.route === undefined ? k = 5 : k = route.params.route;

  let screen = Object.values(param);
  console.log(screen)

  const nextScreen = () => navigation.dispatch(
    CommonActions.navigate({
      name: `${screen[k]}`,
      params: { id: route.params.id, route: k + 1 }
    })
  );

  console.log(screen[k])
  return (
    <View style={[{ flex: 1 }]}>
      <View style={[{ flex: 1 }]}></View>

      <View style={[{ flex: 1, paddingHorizontal: sc.padMid }]}>
      <ButtonSingleComponent
        title="Go to Details"
        onPress={() => navigation.navigate('TestHome', { id: 86, route: k + 1})}
      />
      </View>

      <ButtonTwinBottomBar
        titleLeft="ย้อนกลับ"
        titleRight="ต่อไป"
        // disabled={true}
        onPressLeft={() => { navigation.goBack()}}
        onPressRight={() => { nextScreen()}}
      />

    </View>


  );
}

export default TestHomeScreen;



