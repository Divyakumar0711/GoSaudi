import { Text, View, Image, Dimensions, TouchableWithoutFeedback, Platform } from 'react-native';
import React, { } from 'react';

export default HeaderScreen = props => (
    <View style={{ height: Platform.OS === 'ios' ? 80 : 44 }}>
        <View style={{ height: Platform.OS === 'ios' ? 44 : 44, flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 40 : 0 }}>
            {
                props.isLeftButtonEnabled == true ?
                    <TouchableWithoutFeedback onPress={() => (props.enabled == true ? props.onPressLeft() : null)}>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', height: 30, width: 30, marginLeft: 20 }}>
                            <Image source={props.leftImage} style={{ marginTop: props.leftImageMarginTop, width: props.leftImageWidth, marginLeft: props.leftImageMarginLeft, marginRight: props.leftImageMarginRight, height: props.leftImageHeight, borderRadius: props.leftImageBorderRadius }} />
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <View style={{ justifyContent: 'center', alignContent: 'center', marginLeft: 20}}>
                        <Text style={{ color: props.leftHeadingTextColor, fontFamily: props.leftHeadingTextFontFamily, fontSize: props.leftHeadingTextFontSize, width: props.leftHeadingTextWidth, marginLeft: props.leftHeadingTextMarginLeft, marginTop: props.leftHeadingTextMarginTop, marginRight: props.leftHeadingTextMarginRight }}>
                            {props.leftLabel}
                        </Text>
                    </View>
            }
            {
                props.isTextEnabled == true ?
                    <View style={{ justifyContent: props.justifyContentHeadingText, alignContent: props.alignContentHeadingText, width: Dimensions.get('window').width - 118, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ enabled: props.enabled1, color: props.headingTextColor1, fontFamily: props.headingTextFontFamily1, fontSize: props.headingTextFontSize1, width: props.headingTextWidth1, marginLeft: props.headingTextMarginLeft1, marginTop: props.headingTextMarginTop1, marginRight: props.headingTextMarginRight1, textAlign: props.textAlignHeadingText1 }}>
                            {props.label1}
                        </Text>
                        <Text style={{ enabled: props.enabled2, color: props.headingTextColor2, fontFamily: props.headingTextFontFamily2, fontSize: props.headingTextFontSize2, width: props.headingTextWidth2, marginLeft: props.headingTextMarginLeft2, marginTop: props.headingTextMarginTop2, marginRight: props.headingTextMarginRight2, textAlign: props.textAlignHeadingText2 }}>
                            {props.label2}
                        </Text>
                    </View>
                    :
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: Dimensions.get('window').width - 128 }}>
                        <Image source={props.centerImage} style={{ marginTop: props.centerImageMarginTop, width: props.centerImageWidth, marginLeft: props.centerImageMarginLeft, marginRight: props.centerImageMarginRight, height: props.centerImageHeight, borderRadius: props.centerImageBorderRadius }} />
                    </View>
            }
            {
                props.isRightButtonEnabled == true ?
                    <TouchableWithoutFeedback onPress={() => props.rightEnabled == true ? props.onPressRight() : null}>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', height: 30, width: 30, position: 'absolute', right: 20 }}>
                            <Image source={props.rightImage} style={{ marginTop: props.rightImageMarginTop, width: props.rightImageWidth, marginLeft: props.rightImageMarginLeft, marginRight: props.rightImageMarginRight, height: props.rightImageHeight, borderRadius: props.rightImageBorderRadius }} />
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <View style={{ justifyContent: 'center', alignContent: 'center', marginRight: 20 }}>
                        <Text style={{ color: props.rightHeadingTextColor, fontFamily: props.rightHeadingTextFontFamily, fontSize: props.rightHeadingTextFontSize, width: props.rightHeadingTextWidth, marginLeft: props.rightHeadingTextMarginLeft, marginTop: props.rightHeadingTextMarginTop, marginRight: props.rightHeadingTextMarginRight }}>
                            {props.RightLabel}
                        </Text>
                    </View>
            }
        </View>
    </View>
);
