import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text ,View} from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import ButtonSingleComponent from "../../components/buttons/button/components/button_single_component";
import SpacerBody from "../../components/spacer/spacer_body";
import MainLayout from "../../layout/main_layout";
import { saleProductModels } from "../../model/sale_product_model";
import { RatingProps, RootStackParamList } from "../../navigation/type/type";
import { sc } from "../../utils/import/import_options";
import SelectNumberScreen from "../select_number/select_number_screen";

const RatingScreen = ({navigation, route}: RatingProps) => {
  let param = saleProductModels[route.params.id]
  const nextScreen = () => navigation.dispatch(
    CommonActions.navigate({
      name: `${param.route1}`,
      params: {id: route.params.id, route: param.route2}
    })
  );

    const paramId = param["route1"];
  
  console.log(` $$$$$$ ${paramId}`)
  
  const next = () => navigation.setParams({id: route.params.id})
  return (  
     <MainLayout
     backgroundColor="#FAFAFA"
     title={param.title}
     onPressIconLeft={() => navigation.goBack()}
     content={
       <View style={[{flex: 1, backgroundColor: '#FAFAFA'}]}>
        <SpacerBody />
        <ButtonSingleComponent title={param.title} onPress={() => {}} />
         <View style={[{flex: 1, margin: sc.padMid, backgroundColor: 'red'}]}>

          

         </View>
         <ButtonBottomBar
          title={param.titleButton}
          onPress={() => nextScreen()}
          hasIcon={true}
          icon={param.iconTitleButton}
         />
       </View>
     }

     />
  );
}

export default RatingScreen;



