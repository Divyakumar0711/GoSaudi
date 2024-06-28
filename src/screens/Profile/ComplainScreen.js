import React from "react";
import { View, Image, Dimensions, Platform, FlatList, Text, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-paper";
import CommonHeaderView from "../../components/CommonHeaderView";

export default class ComplainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Complains: [
                {
                    ComplainId: '1',
                    ComplainTitle: 'Time',
                    ComplainText: 'Time is to lonnger',
                    Status: 'Pennding'
                },
                {
                    ComplainId: '2',
                    ComplainTitle: 'Minimum Age',
                    ComplainText: 'Minimum age For This Activity is 16 or More Years',
                    Status: 'Done'
                },
                {
                    ComplainId: '3',
                    ComplainTitle: 'Location',
                    ComplainText: 'Location is not perfect for this activity',
                    Status: 'Done'
                },
                {
                    ComplainId: '4',
                    ComplainTitle: 'Price',
                    ComplainText: 'Price of this activity is to high',
                    Status: 'Pennding'
                },
                {
                    ComplainId: '5',
                    ComplainTitle: 'Food & Drink',
                    ComplainText: 'Food quality is not good',
                    Status: 'Done'
                },

            ],
        }
    }
    renderComplain = ({ item }) =>
    (
        <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20 }}>
            <Card style={{ marginBottom: 10, paddingTop: 10, paddingBottom: 10, marginTop: 10, backgroundColor: item.Status === 'Done' ? "#15C667" : '#FFB60D' }}>
                <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins-Medium', }}>{item.ComplainId}{'.'}</Text>
                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins-Medium', marginLeft: 5 }}>{item.ComplainTitle}</Text>
                        </View>
                        <View style={{ position: 'absolute', right: 35, backgroundColor: 'white', borderRadius: 5 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins-Medium', marginLeft: 5, marginRight: 5 }}>{item.Status}</Text>
                        </View>
                    </View>
                    <View style={{ width: Dimensions.get('window').width - 80, marginLeft: 20, }}>
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins-Regular', }}>{item.ComplainText}</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
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
                    label1={'Complaines'}
                    headingTextMarginLeft={8}
                />
                <FlatList
                    renderItem={this.renderComplain}
                    data={this.state.Complains}
                    keyExtractor={(item) => item.ComplainId}
                    style={{ marginBottom: 20 }}
                />

                <View style={{ position: 'absolute', bottom: 15 }}>
                    <CommonButton
                        onPress={() => this.props.navigation.goBack()}
                        label={'New Complains'}
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