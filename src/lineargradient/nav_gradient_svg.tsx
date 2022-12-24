import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const NavGradientSVG = () => {
    return (
        <LinearGradient
            colors={['#FF6A00', '#EE0979', ]}
            style={styles.linearGradient}
            useAngle={true}
            angle={262}
        >
        </LinearGradient>
    );
}

export default NavGradientSVG;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 0,
        position: 'absolute',
        height: 500,    // กำหนดให้ เกิน
        width: '100%',
        bottom: 0,
        zIndex: -3
    },
});



