import React, { ReactNode } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { MobileIcon } from "../../utils/import/import_icons_main";
import { colors, gbs, sc } from "../../utils/import/import_options";

type Props = {
  icon: ReactNode,
  title: string,
  isTwoLine: boolean
};

const CardMainMenuComponent = ({ icon, title, isTwoLine }: Props) => {
  return (

    <TouchableHighlight 
      onPress={() => Alert.alert("Super")}
      underlayColor={'lightgrey'}
      style={[styles.card, {}]}
    >
      <View style={{flex: 1, width: '100%'}}>
        <View style={[{ flex: 1, width: '100%' }]}>
          <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
            {icon}
          </View>
        </View>
        <View style={[{ flex: isTwoLine ? 2 : 1, justifyContent: 'center' }]}>
          <Text numberOfLines={isTwoLine ? 2 : 1} adjustsFontSizeToFit style={[styles.text, gbs.title]}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default CardMainMenuComponent;

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: sc.cardMenuHeight,
    backgroundColor: colors.white,
    padding: sc.padMin,
    margin: sc.midSpace,
    alignItems: 'center',
    borderRadius: sc.spaceTitle,
    shadowColor: colors.secondary,
    shadowRadius: sc.padMin,
    shadowOpacity: 0.1
  },
  text: {
    color: '#4F4F4F',
    textAlign: 'center'
  }
});

