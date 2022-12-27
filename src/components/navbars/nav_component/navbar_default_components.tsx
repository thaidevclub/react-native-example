import React from "react";
import { Alert, Text, TouchableHighlight, View } from 'react-native';
import NavGradientSVG from "../../../lineargradient/nav_gradient_svg";
import { ArrowLeftIcon, Gradient1, Gradient2, HamburgerIcon } from "../../../utils/import/import_icons";
import { gbs, colors, sc } from "../../../utils/import/import_options";

type NavDefaultProps = {
    title: string,
    isMain?: boolean,
    onPress(): void
}

const NavbarDefaultComponent = ({ title, isMain = false, onPress }: NavDefaultProps) => {
    return (
        <View style={[{ height: sc.navBarHeight, zIndex: -1 }]}>

            <View style={[{ flex: 1 }]}>
                <NavGradientSVG />
                <View style={[{ width: '100%', position: "absolute", bottom: -50, zIndex: -2 }]}>
                    <Gradient1 width={'80%'} />
                </View>
                <View style={[{ width: '100%', position: "absolute", bottom: -50, zIndex: -2 }]}>
                    <Gradient2 width={'50%'} />
                </View>
                <View style={[{ flex: 1, flexDirection: 'row', justifyContent: "space-around" }]}>

                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => onPress()}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {isMain
                            ? <HamburgerIcon width={"100%"} height={"50%"} />
                            : <ArrowLeftIcon width={"100%"} height={"60%"} />
                        }

                    </TouchableHighlight>
                    <View style={[{ flex: 4, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={[gbs.body, { color: colors.white }]}>{title}</Text>
                    </View>
                    <View style={[{ flex: 1 }]}></View>
                </View>
            </View>

        </View>
    );
}

export default NavbarDefaultComponent;



