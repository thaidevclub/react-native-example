import { CommonActions } from "@react-navigation/native";
import React from "react";
import { View } from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { SelectNumberProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";

const SelectNumberScreen = ({ navigation, route }: SelectNumberProps) => {
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
    <MainLayout
      backgroundColor={colors.white}
      title="เลือกเบอร์"
      onPressIconLeft={() => navigation.goBack()}
      content={
        <View style={[{ flex: 1 }]}>
          <View style={[{ flex: 1, backgroundColor: 'blue' }]}></View>
          <ButtonBottomBar
            title={param.titleButton}
            onPress={() => nextScreen()}
            hasIcon={true}
          />
        </View>
      }
    />
  );
}

export default SelectNumberScreen;



