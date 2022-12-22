import React from "react";
import { Text ,View} from 'react-native';
import { colors, sc } from "../../utils/import/import_options";

const CardMainMenuComponent = () => {
  return (  
     <View style={[{height: sc.cardMenuHeight, backgroundColor: colors.white}]} > 
      <View style={[{flex: 1}]}>

      </View>
       <View style={[{flex: 1}]}>

       </View>
      
    </View>
  );
}

export default CardMainMenuComponent;



