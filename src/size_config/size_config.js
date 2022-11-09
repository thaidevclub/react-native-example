import { Dimensions, StyleSheet } from "react-native";

const SizeConfig = () => {

    // Screen
    const screen = Dimensions.get('window');
    const wid = screen.width;
    const high = screen.height;
    const ratio = wid / high;
    const isTrue = ratio > 0.57;
    // Padding 
    const padding = wid * 0.04;
    const mediumPadding = wid * 0.03;
    const minPadding = wid * 0.02;
    // Color
    const colorDefault = "black";
    const colorOne = "green";
    const colorTwo = "blue";
    const colorWhite = "white";
    const colorRed = "red";
    // Font Size
    const headSize = 28;
    const headSizeLarge = 62;
    const bodySize = 22;
    const bodySizeLarge = 42;
    const subBodySize = 20;
    const subBodySizeLarge = 38;
    const titleSize = 18;
    const titleSizeLarge = 28;
    const subTitleSize = 16;
    const subTitleSizeLarge = 26;
    const captionSize = 10;
    const captionSizeLarge = 20;
    
   return (
    StyleSheet.create({
        screenHeight: high,
        screenWidth: wid,
        padding: padding,
        mediumPadding: mediumPadding,
        minPadding: minPadding,
        headline: {
            fontSize: isTrue ? headSizeLarge : headSize,
            color: colorDefault, 
        },
        headlineOne: {
            fontSize: isTrue ? headSizeLarge : headSize,
            color: colorOne
        },
        headlineTwo: {
            fontSize: isTrue ? headSizeLarge : headSize,
            color: colorTwo
        },
        headlineWhite: {
            fontSize: isTrue ? headSizeLarge : headSize,
            color: colorWhite
        },
        headlineRed: {
            fontSize: isTrue ? headSizeLarge : headSize,
            color: colorRed
        },
        body: {
            fontSize: isTrue ? bodySizeLarge : bodySize,
            color: colorDefault
        },
        bodyOne: {
            fontSize: isTrue ? bodySizeLarge : bodySize,
            color: colorOne
        },
        bodyTwo: {
            fontSize: isTrue ? bodySizeLarge : bodySize,
            color: colorTwo
        },
        bodyWhite: {
            fontSize: isTrue ? bodySizeLarge : bodySize,
            color: colorWhite
        },
        bodyRed: {
            fontSize: isTrue ? bodySizeLarge : bodySize,
            color: colorRed
        },
        subBody: {
            fontSize: isTrue ? subBodySizeLarge : subBodySize,
            color: colorDefault
        },
        subBodyOne: {
            fontSize: isTrue ? subBodySizeLarge : subBodySize,
            color: colorOne
        },
        subBodyTwo: {
            fontSize: isTrue ? subBodySizeLarge : subBodySize,
            color: colorTwo
        },
        subBodyWhite: {
            fontSize: isTrue ? subBodySizeLarge : subBodySize,
            color: colorWhite
        },
        subBodyRed: {
            fontSize: isTrue ? subBodySizeLarge : subBodySize,
            color: colorRed
        },
        title: {
            fontSize: isTrue ? titleSizeLarge : titleSize,
            color: colorDefault
        },
        titleOne: {
            fontSize: isTrue ? titleSizeLarge : titleSize,
            color: colorOne
        },
        titleTwo: {
            fontSize: isTrue ? titleSizeLarge : titleSize,
            color: colorTwo
        },
        titleWhite: {
            fontSize: isTrue ? titleSizeLarge : titleSize,
            color: colorWhite
        },
        titleRed: {
            fontSize: isTrue ? titleSizeLarge : titleSize,
            color: colorRed
        },
        subTitle: {
            fontSize: isTrue ? subTitleSizeLarge : subTitleSize,
            color: colorDefault
        },
        subTitleOne: {
            fontSize: isTrue ? subTitleSizeLarge : subTitleSize,
            color: colorOne
        },
        subTitleTwo: {
            fontSize: isTrue ? subTitleSizeLarge : subTitleSize,
            color: colorTwo
        },
        subTitleWhite: {
            fontSize: isTrue ? subTitleSizeLarge : subTitleSize,
            color: colorWhite
        },
        subTitleRed: {
            fontSize: isTrue ? subTitleSizeLarge : subTitleSize,
            color: colorRed
        },
        caption: {
            fontSize: isTrue ? captionSizeLarge : captionSize,
            color: colorDefault
        },
        captionOne: {
            fontSize: isTrue ? captionSizeLarge : captionSize,
            color: colorOne
        },
        captionTwo: {
            fontSize: isTrue ? captionSizeLarge : captionSize,
            color: colorTwo
        },
        captionWhite: {
            fontSize: isTrue ? captionSizeLarge : captionSize,
            color: colorWhite
        },
        captionRed: {
            fontSize: isTrue ? captionSizeLarge : captionSize,
            color: colorRed
        },
    })
   );
}

export default SizeConfig;