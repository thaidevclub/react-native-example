import React, { Fragment, ReactNode } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import NavbarDefaultComponent from "../components/navbars/nav_component/navbar_default_components";
import { colors } from "../utils/import/import_options";

type Props = {
    title: string,
    isMain?: boolean,
    content: ReactNode,
    onPressIconLeft(): void,
    backgroundColor?: string
}

const MainLayout = ({title, isMain, content, onPressIconLeft, backgroundColor}: Props) => {
  return (  
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor ?? colors.backgroundColorLight }}>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} />
      <View style={[{ flex: 1, backgroundColor: colors.backgroundColorLight }]}>
        <NavbarDefaultComponent title={title} isMain={isMain} onPress={() => onPressIconLeft()}/>
        <View style={[{ flex: 1, backgroundColor: colors.backgroundColorLight }]}>


        {content}


        </View>
      </View>
    </SafeAreaView>
  </Fragment>
  );
}

export default MainLayout;



