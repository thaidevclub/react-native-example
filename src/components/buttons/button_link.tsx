import React from "react";
import { Text ,TouchableHighlight,View} from 'react-native';
import { sc } from "../../utils/import/import_options";

type Props = {
    onPress(): void
}


const ButtonLink = ({onPress}: Props) => {

    return (  
        <View style={[{height: sc.buttonHeight}]} > 
         <TouchableHighlight onPress={() => onPress()}>
            <Text style= {[]}>คลิก Me</Text>
         </TouchableHighlight>
       </View>
     );
}

export default ButtonLink;



