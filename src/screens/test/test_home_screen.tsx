import React from "react";
import { Text, View } from 'react-native';
import ButtonSingleComponent from "../../components/buttons/button/components/button_single_component";
import { TestHomeScreenProps } from "../../navigation/type/type";
import { sc } from "../../utils/import/import_options";

const TestHomeScreen = ({ navigation, route }: TestHomeScreenProps) => {
  return (
    <View style={[{ flex: 1 }]}>
      <View style={[{ flex: 1 }]}></View>
      <View style={[{ height: sc.buttonHeight }]} >
        <ButtonSingleComponent
          title="Go to Details"
          onPress={() => navigation.navigate('TestHome', { itemId: 86, otherParam: "Hello World !!!" })}
        />
      </View>
       <View style={[{flex: 1}]}></View>
       
    </View>
  );
}

export default TestHomeScreen;



