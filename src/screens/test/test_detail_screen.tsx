import React from "react";
import { Text ,View} from 'react-native';
import { TestDetailProps } from "../../navigation/type/type";

const TestDetailScreen = ({navigation, route}: TestDetailProps) => {
    const  { id } = route.params;
  return (  
     <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]} > 
         <Text style= {[]}>Detail Screen</Text>
          <Text style= {[]}>Item ID: {JSON.stringify(id)} </Text>
    </View>
  );
}

export default TestDetailScreen;



