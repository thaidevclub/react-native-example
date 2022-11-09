import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SizeConfig from "../size_config/size_config";

const colorFontBack = "#444444";
const colorIcon = "#9C9C9C";

const KritScreen = ({ navigation }) => {
    const wid = Dimensions.get("window").width;
    const heigh = Dimensions.get("window").height;
    console.log(wid);
    console.log(heigh);
    console.log(wid / heigh);


    const ratio = wid / heigh;
    const sizeConfig = SizeConfig(ratio > 0.57);
    const t = sizeConfig.title.fontSize;
    const c = sizeConfig.caption.fontSize;


    const oneHeight = heigh * 0.1;
    const spaceHeight = heigh * 0.04;
    const body = wid * 0.04;
    const title = wid * 0.03;
    const caption = wid * 0.02;
    const onBack = () => {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ padding: 20, height: oneHeight, backgroundColor: 'white' }}>
                <Text style={{ fontSize: t, fontWeight: "bold", color: colorFontBack }} onPress={() => onBack()}>BACK</Text>
                <Text style={{ fontSize: c }}>🔵 🔵 🔵</Text>
            </View>
            <View style={{ height: heigh * 0.3, paddingHorizontal: 20, justifyContent: "flex-end" }}>
                <Image style={{ flex: 1, borderBottomLeftRadius: 30 }} source={{ uri: 'https://images.unsplash.com/photo-1667695011090-70f07a2bafee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' }} />
                <Image style={{ position: 'absolute', right: 20, bottom: -(spaceHeight), borderTopLeftRadius: 80, borderBottomLeftRadius: 80, alignSelf: 'flex-end', width: wid * 0.45, height: heigh * 0.1, }} source={{ uri: 'https://images.unsplash.com/photo-1667052313435-45ffc6d9d40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60' }} />
                <Text style={{ position: "absolute", alignSelf: "flex-end", bottom: heigh * 0.028, paddingHorizontal: body, color: 'lightblue', fontSize: title, fontWeight: 'bold' }}>Tourist is my Life...</Text>
            </View>
            <View style={{ height: oneHeight, alignItems: "flex-end" }} />


            <View style={{ paddingHorizontal: 40, height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'lightslategrey' }}>Applied</Text>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'indigo', marginTop: 10 }}>29</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'lightslategrey' }}>Review</Text>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'indigo', marginTop: 10 }}>72</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'lightslategrey' }}>Contact</Text>
                    <Text style={{ fontSize: t, fontWeight: 'bold', color: 'indigo', marginTop: 10 }}>9</Text>
                </View>
            </View>
            <View style={{ height: spaceHeight * 1.2 }} />
            <View style={{ backgroundColor: 'lightblue', height: 30, marginHorizontal: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginHorizontal: 10 }} />
            <View style={{ flex: 1, marginHorizontal: 10, backgroundColor: 'lemonchiffon', height: 120 }}>

                <ImageBackground source={{ uri: 'https://reactjs.org/logo-og.png' }} imageStyle={{ opacity: 0.1 }} resizeMode="cover" style={{ flex: 1, padding: SizeConfig().padding}}>
                       <Text style= {SizeConfig().body}>ABCR</Text>
                        <Text style= {SizeConfig().headlineRed}>ABCD</Text>
                         <Text style= {SizeConfig().captionTwo}>ABCR</Text>
                </ImageBackground>

                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    }
});


export default KritScreen;


