import React from "react";
import { Text ,View} from 'react-native';
import ButtonBottomBar from "../../components/buttons/button/button_bottom_bar";
import MainLayout from "../../layout/main_layout";
import { SelectNumberProps } from "../../navigation/type/type";
import colors from "../../utils/colors/colors";

const SelectNumberScreen = ({navigation, route}: SelectNumberProps) => {
  return (  
    <MainLayout
      backgroundColor={colors.white}
      title="Select Number Screen"
      onPressIconLeft={() => navigation.popToTop()}
      content={
         <View style={[{flex: 1}]}>
           <View style={[{flex: 1}]}></View>
          <ButtonBottomBar 
            title="Back"
            onPress={() => {}}

           />
         </View>
      }
     />
  );
}

export default SelectNumberScreen;



