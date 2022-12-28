import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import NavGradientSVG from "../../../../lineargradient/nav_gradient_svg";
import { colors, gbs, sc } from "../../../../utils/import/import_options";

type Props = {
    title: string,
    onPress(): void,
    hasIcon?: boolean,
    icon?: ReactNode,
    color?: string
}

const ButtonSingleComponent = ({ title, onPress, hasIcon, icon, color }: Props) => {
    return (

        <View style={[{ height: sc.buttonHeight, flexDirection: 'row' }]}>
            <View style={[{ width: sc.padMid }]}></View>
            <View style={[styles.button]}>
                {/* <NavGradientSVG /> */}
                <TouchableHighlight
                    
                    underlayColor={'lavender'}
                    onPress={() => onPress()}
                    onHideUnderlay={() => <NavGradientSVG />}
                    style={{ flex: 1, backgroundColor: "", alignItems: 'center', justifyContent: 'center' }}
                >
                    <LinearGradient
                        style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}
                        colors={['#EE0979', '#FF6A00']}
                        useAngle={true}
                        locations={[0, 1]}
                        angle={172.77}
                    >
                    {hasIcon
                        ? <View style={[{ flex: 1, flexDirection: 'row' }]}>
                            <View style={[{ flex: 1 }]}></View>
                            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                {icon}
                                <Text adjustsFontSizeToFit numberOfLines={1} style={[gbs.head, { color: color ?? colors.white }]}>{title}</Text>
                            </View>
                            <View style={[{ flex: 1 }]}></View>
                        </View>
                        : <Text style={[gbs.head, { color: color ?? colors.white }]}>{title}</Text>
                    }
                    </LinearGradient>
                
                </TouchableHighlight>
                
            </View>
            <View style={[{ width: sc.padMid }]}></View>
        </View>





    );
}

export default ButtonSingleComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
    },
});





