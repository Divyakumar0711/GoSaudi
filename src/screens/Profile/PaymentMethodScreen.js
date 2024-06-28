import React from "react";
import { View, Text, Dimensions, FlatList, Image } from "react-native";
import CommonHeaderView from "../../components/CommonHeaderView";
import CommonButton from "../../components/CommonButton";
import { Card } from 'react-native-shadow-cards';


export default class PaymentMethodScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: [
                {
                    id: '1',
                    cardName: 'Patel Divyakumar',
                    cardLastFourNumber: '7778'
                },
                {
                    id: '2',
                    cardName: 'Dharajiya Ashvin',
                    cardLastFourNumber: '1234'
                },

            ]
        }
    }

    _renderData = ({ item }) => {
        return (


            <Card style={{ width: Dimensions.get('window').width - 40, borderRadius: 14, marginBottom: 20, marginLeft: 20, marginRight: 20, }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10, marginLeft: 10, }}>
                    <View style={{ width: Dimensions.get('window').width - 100 }}>
                        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Regular', color: '#292643', marginTop: 5 }}>{item.cardName}</Text>
                        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Regular', color: '#292643', marginTop: 5 }}>**** **** **** {item.cardLastFourNumber} </Text>

                    </View>
                    <Image source={require('../../assets/images/recycle-bin.png')} style={{ width: 25, height: 25 }} />


                </View>
            </Card>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                <CommonHeaderView
                    onPressLeft={() => this.props.navigation.goBack()}
                    enabled={true}
                    isLeftButtonEnabled={true}
                    leftImageWidth={19.48}
                    leftImageHeight={18.97}
                    leftImage={require('../../assets/images/Arrow_Icon.png')}
                    isTextEnabled={true}
                    headingTextColor1={'#292643'}
                    headingTextFontFamily1={'Poppins-SemiBold'}
                    headingTextFontSize1={24}
                    label1={'Payment Method'}
                    headingTextMarginLeft={8}
                />

                <FlatList
                    data={this.state.cardData}
                    style={{ height: '100%', marginTop: 18, marginBottom: 80 }}
                    renderItem={this._renderData}
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}
                   
                />

                <View style={{ position: 'absolute', bottom: 15 }}>
                    <CommonButton
                        onPress={() => this.props.navigation.navigate('AddCardScreen')}
                        label={'Add card'}
                        enabled={true}
                        marginLeft={20}
                        marginRight={20}
                        width={Dimensions.get('window').width - 40}
                        height={60}
                        borderRadius={50}
                        backgroundColor={'#292643'}
                        fontColor={'white'}
                        fontSize={22}
                        fontFamily={'Poppins-Medium'}
                        textDecorationLine="none"
                        letterSpacing={1}
                    />
                </View>
            </View>
        )
    }
} 