import React from "react";
import { Text ,View} from 'react-native';
import CardMainMenuComponent from "../components/cards/card_main_menu_component";
import Spacer from "../components/spacer/spacer";
import { EnumNavbarTitle } from "../enum/navbar/enum_navbar_title";
import MainLayout from "../layout/main_layout";
import { sc } from "../utils/import/import_options";

const MainScreen = () => {
  return (  
     <MainLayout 
        title={EnumNavbarTitle.main} 
        isMain={true} 
        content={
             
             <View style={[{flex: 1}]}>
                <View style={[{height: sc.spaceHead4}]}></View>
             <View style={[{flex: 1, flexDirection: 'row', alignItems: 'stretch'}]}>
                
                 <CardMainMenuComponent />
                 
                 <CardMainMenuComponent />
             </View>
             </View>
        }
    />
  );
}

export default MainScreen;



