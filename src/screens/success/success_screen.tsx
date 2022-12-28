import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Text ,View} from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { SuccessProps } from "../../navigation/type/type";
import { ThankyouIcon } from "../../utils/import/import_icons_main";
import { colors } from "../../utils/import/import_options";

const SuccessScreen = ({navigation, route}: SuccessProps) => {
    const param = saleProductModels[route.params.id];

    const nextScreen = () => navigation.dispatch(  
        CommonActions.navigate({
            name: `${param.route4}`,
            params: {id: route.params.id}
        })
    )
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
          onPress={() => navigation.popToTop()}
         />
      </View>
    }
  />
  );
}

export default SuccessScreen;



