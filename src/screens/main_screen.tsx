import React from "react";
import { Text ,View} from 'react-native';
import { EnumNavbarTitle } from "../enum/navbar/enum_navbar_title";
import MainLayout from "../layout/main_layout";

const MainScreen = () => {
  return (  
     <MainLayout 
        title={EnumNavbarTitle.main} 
        isMain={true} 
    />
  );
}

export default MainScreen;



