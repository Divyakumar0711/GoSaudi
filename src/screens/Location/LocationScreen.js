import React from "react";
import { View, Image, Dimensions, Platform, FlatList, Text, TouchableWithoutFeedback } from "react-native";
export default class Location extends React.Component {
    renderLocation = () =>
    (
        <View style={{ height: 300, width: Dimensions.get('window').width - 40, borderRadius: 14, borderWidth: 1, borderColor: 'grey', marginLeft: 30, right: 10, marginTop: 20 }}>
            <Image source={require('../../assets/images/Location.png')} style={{ height: 290, width: Dimensions.get('window').width - 45, borderRadius: 12, }} />
        </View>
    )
    render() {
        return (
            <View style={{ justifyContent: "center", marginTop: Platform.OS === 'ios' ? 40 : 20 }}>
                <View style={{ width:Dimensions.get('window').width - 40 ,marginLeft:20,marginRight:20, flexDirection: "row", alignItems:'center' }}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                        <View>
                            <Image source={require('../../assets/images/Arrow_Icon.png')} style={{ height: 22, width: 22 }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{paddingLeft:20}}>
                        <Text style={{ fontFamily:'Poppins-Medium' ,fontSize:24 ,color: '#292643'}}>Location</Text>
                    </View>
                </View>
                <FlatList
                    renderItem={this.renderLocation}
                    data={['1']}
                />
            </View>
        )
    }
}