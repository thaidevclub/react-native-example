import React from "react";
import { ImageBackground, Text ,View} from 'react-native';
import { sc } from "../../utils/import/import_options";

const NavbarDefaultComponents = () => {
  return (  
     <ImageBackground 
     style={{width : '100%', aspectRatio : 3.6}}
     resizeMode="cover"
     source={{uri: "https://images.unsplash.com/photo-1671569126317-399f73877197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"}}
     >

     </ImageBackground>
  );
}

export default NavbarDefaultComponents;



