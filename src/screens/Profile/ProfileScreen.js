import React from "react";
import { View, Text, Platform, Dimensions, Image, FlatList, TouchableWithoutFeedback, Alert } from "react-native";
import { Divider } from '@rneui/themed';

export default class ProfileScreen extends React.Component {

    _renderProfile = () => (
        <View >
            <View style={{ flexDirection: 'row', backgroundColor: 'white', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Medium', marginLeft: 20, color: '#292643' }}>Profile</Text>
                </View>
                <View style={{ position: "absolute", right: 0 }}>
                    <Image source={require('../../assets/images/alarm.png')} style={{ height: 25, width: 25 }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <View style={{ height: 60, width: 60, marginLeft: 20 }}>
                    <Image source={require('../../assets/images/user.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 12 }}>
                    <Text style={{ color: '#292643', fontFamily: 'Poppins-Regular' }}>Name</Text>
                    <Text style={{ color: '#787586', fontFamily: 'Poppins-Regular' }}>Show profile</Text>
                </View>

                <View style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                    <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                </View>
            </View>
            <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginTop: 40 }}>
                <Divider />
            </View>
            <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#292643' }}>Settings</Text>
            </View>
            <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginTop: 20 }}>
                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PaymentMethodScreen')}>
                    <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/Payments.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                        <View >
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>Payment Method</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', right: 20, position: 'absolute' }}>
                            <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>
                <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                    
                    <Image source={require('../../assets/images/like.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>Manage Interest</Text>
                    <View style={{ justifyContent: 'flex-end', right: 20, position: 'absolute' }}>
                        <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                    </View>
                </View>
                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>
                <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/Share.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>Share With Friends</Text>
                    <View style={{ justifyContent: 'flex-end', right: 20, position: 'absolute' }}>
                        <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                    </View>
                </View>
                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                    <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/History.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>View History</Text>
                        <View style={{ justifyContent: 'flex-end', right: 20, position: 'absolute' }}>
                            <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ComplainScreen')}>
                    <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/Complain.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>Manage Complains</Text>
                        <View style={{ justifyContent: 'flex-end', right: 20, position: 'absolute' }}>
                            <Image source={require('../../assets/images/right-arrow.png')} style={{ height: 15, width: 15, }} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SignInScreen')}>
                    <View style={{ flexDirection: 'row', flexDirection: 'row', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/Logout.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 10, marginBottom: 10, color: '#292643' }}>Logout</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ width: Dimensions.get('window').width - 40, }}>
                    <Divider />
                </View>
            </View>
        </View>
    )
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
                <FlatList
                    data={['1']}

                    style={{ marginTop: Platform.OS == 'ios' ? 40 : 20, width: Dimensions.get('window').width - 40, marginLeft: 10, }}
                    renderItem={this._renderProfile}
                />
            </View>
        )
    }
}