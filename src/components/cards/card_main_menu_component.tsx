import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { MobileIcon } from "../../utils/import/import_icons_main";
import { colors, gbs, sc } from "../../utils/import/import_options";

const CardMainMenuComponent = () => {
  return (
    <View style={[styles.card, {}]} >

      <View  style={[{flex: 1, width: '100%'}]}>
         <View style={[{flex: 1, justifyContent: 'flex-end'}]}>
         <MobileIcon />
         </View>
      </View>
      <View style={[{ flex: 1}]}>
        <Text style={[styles.text, gbs.body]}>มือถือ</Text>
      </View>
    </View>
  );
}

export default CardMainMenuComponent;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: sc.cardMenuHeight,
    backgroundColor: colors.white,
    padding: sc.midSpace,
    alignItems: 'center'
  },
  text: {
    color: '#4F4F4F',
    paddingVertical: sc.spaceTitle
  }
});

