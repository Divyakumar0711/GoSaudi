// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// const CustomTabBar = props => {
//     const { children, accessibiltystate, onPress } = props

//     if (accessibiltystate.selected) {
//         return (
//             <View style={styles.btnWrapper}>
//                 <TouchableWithoutFeedback onPress={onPress} style={styles.active}>
//                     <Text>{children}</Text>
//                 </TouchableWithoutFeedback>
//             </View>
//         )
//     } else {
//         return (
//             <TouchableWithoutFeedback onPress={onPress} style={styles.inactive} >
//                 <Text>{children}</Text>
//             </TouchableWithoutFeedback>
//         )
//     }

// }

// const styles = StyleSheet.create({
//     btnWrapper: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     active: {
//         flex: 1,
//         position: 'absolute',
//         width: 50,
//         height: 50,
//         top: -20,
//         borderRadius: 50 / 2,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     inactive: {
//         flex: 1,
//         backgroundColor: 'white'
//     }
// })

// export default CustomTabBar

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Svg, { Path } from 'react-native-svg';

const CustomTabBarButton = props => {
    const { route, children, accessibilityState, onPress } = props;

    if (accessibilityState.selected) {
        return (
            <View style={styles.btnWrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={[
                            styles.svgGapFiller,

                        ]}
                    />
                    <Svg width={71} height={50} viewBox="0 0 75 61">
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'white'}
                        />
                    </Svg>
                    <View
                        style={[
                            styles.svgGapFiller,

                        ]}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onPress}
                    style={[styles.activeBtn]}>
                    <Text>{children}</Text>

                </TouchableOpacity>
            </View>

        );
    } else {
        return (

            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={[
                    styles.inactiveBtn,

                ]}>
                <Text>{children}</Text>

            </TouchableOpacity>
        );
    }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
    btnWrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    activeBtn: {
        flex: 1,
        position: 'absolute',
        top: -22,
        width: 60,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,

    },
    inactiveBtn: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgGapFiller: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});