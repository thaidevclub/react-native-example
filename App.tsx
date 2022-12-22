import React, { Fragment } from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import CardMainMenuComponent from "./src/components/cards/card_main_menu_component";
import NavbarDefaultComponents from "./src/components/navbars/navbar_default_components";
import colors from "./src/utils/colors/colors";
import { sc } from "./src/utils/import/import_options";

const App = () => {
  return (

      

    <Fragment>
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

          {/* <StatusBar barStyle="light-content" backgroundColor="transparent" translucent /> */}

          <ImageBackground
            style={{ width: '100%', height: sc.navBarHeight}}
            resizeMode="cover"
            source={{ uri: "https://images.unsplash.com/photo-1671569126317-399f73877197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60" }}>



          </ImageBackground>
           <View style={[{height: 120, backgroundColor: 'red'}]}></View>
        </View>
    </Fragment>


  );
}

export default App;


// "https://images.unsplash.com/photo-1671569126317-399f73877197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
