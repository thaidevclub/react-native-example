import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Text ,View} from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { SelectNumberProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";

const SelectNumberScreen = ({navigation, route}: SelectNumberProps) => {
  const param = saleProductModels[route.params.id];
  const paramRoute = route.params.route;
  const nextScreen = () => navigation.dispatch(  
    CommonActions.navigate({
      name: `${paramRoute}`,
      params: {id: route.params.id, route: param.route3}
    })
  )

  console.log()
  return (  
    <MainLayout
      backgroundColor={colors.white}
      title="เลือกเบอร์"
      onPressIconLeft={() => navigation.goBack()}
      content={
         <View style={[{flex: 1}]}>
           <View style={[{flex: 1, backgroundColor: 'blue'}]}></View>
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



