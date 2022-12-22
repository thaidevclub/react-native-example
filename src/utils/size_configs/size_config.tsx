import React, { Component } from 'react';
import { Dimensions } from 'react-native';

class SizeConfig {
    static readonly screen = Dimensions.get('window');
    static readonly screenWidth = this.screen.width;    // 360
    static readonly screenHeight = this.screen.height;  // 615
    static readonly ratio = this.screenWidth / this.screenHeight;
    static isMobile = (this.ratio < 0.57);
    static readonly head5 = this.screenHeight * 0.04227;    // 26
    static readonly head4 = this.screenHeight * 0.03902; // 24
    static readonly head3 = this.screenHeight * 0.035772; // 22
    static readonly head2 = this.screenHeight * 0.032520; // 20
    static readonly head1 = this.screenHeight * 0.029268;   // 18
    static readonly head = this.screenHeight * 0.2601;  // 16
    static readonly body = this.screenHeight * 0.02276;   // 14
    static readonly title = this.screenHeight * 0.01951;   //  12
    static readonly subtitle = this.screenHeight * 0.016260;  // 10
    static readonly caption = this.screenHeight * 0.013;   // 8

    static readonly padMin = this.screenWidth * 0.0444;  // 16
    static readonly padMid = this.screenWidth * 0.06111;  // 22
    static readonly padMax = this.screenWidth * 0.08333;  // 30

    static readonly minSpace = this.screenHeight * 0.0025;
    static readonly midSpace = this.screenHeight * 0.005;

    static readonly spaceCaption = this.screenHeight * 0.013;   // 8
    static readonly spaceSubtitle = this.screenHeight * 0.016260;   // 10
    static readonly spaceTitle = this.screenHeight * 0.01951;   // 12
    static readonly spaceBody = this.screenHeight * 0.02276;    // 14
    static readonly spaceHead = this.screenHeight * 0.2601; // 16
    static readonly spaceHead1 = this.screenHeight * 0.029268;  // 18
    static readonly spaceHead2 = this.screenHeight * 0.032520;  // 20
    static readonly spaceHead3 = this.screenHeight * 0.035772;  // 22
    static readonly spaceHead4 = this.screenHeight * 0.03902;   // 24
    static readonly spaceHead5 = this.screenHeight * 0.04227;   // 26



    // Card List :  72 / 615
    static readonly cardListHeight = this.screenHeight * 0.11707;

    // Navigation Bar : 47 / 615
    static readonly navBarHeight = this.screenHeight * 0.076422;

    // Sub head : 38 / 615
    static readonly breadcrumbHeight = this.screenHeight * 0.061788;

    // Head content Height : 68 / 615
    static readonly stepperHeight = this.screenHeight * 0.110569;







    // Head Section Height : 65 / 615
    static readonly headSectionHeight = this.screenHeight * 0.08977;



    // Footer Height : 135 / 615
    static readonly footerHeight = this.screenHeight * 0.18646;

    // Footer Space Height : 30 / 615
    static readonly footerSpaceHeight = this.screenHeight * 0.04143;

    // Button Height : 46 / 615
    static readonly buttonHeight = this.screenHeight * 0.063535;

    // CheckBox Height : 28 / 615
    static readonly checkboxHeight = this.screenHeight * 0.03867;













}

export default SizeConfig;