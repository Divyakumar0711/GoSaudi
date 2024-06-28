import React from "react";
import { View, Text, Dimensions, FlatList, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from 'react-native-shadow-cards';
import CommonButton from "../../components/CommonButton";
import CommonHeaderViewNew from "../../components/CommonHeaderView";

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            imageData: [
                require('../../assets/images/2.png'),
                require('../../assets/images/3.png'),
                require('../../assets/images/1.png'),
                require('../../assets/images/4.png')
            ],
        }
    }

    actionSignIn = () => {
        this.props.navigation.navigate('SignInScreen')
    }

    _renderData = () => (
        <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, alignItems: 'center' }}>
            <Card>
                <View style={{ height: 500, width: Dimensions.get('window').width - 40, }}>
                    <SliderBox images={this.state.imageData} style={{ height: 500, width: Dimensions.get('window').width - 40, }} autoplay dotStyle={{ width: 10, height: 5 }} resizeMode='cover' autoplayInterval={3000} ImageComponentStyle={{ borderRadius: 15 }}
                    />
                </View>
            </Card>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', textDecorationLine: "none", textAlign: 'justify', color: '#292643' }}>From desert sands to vibrant reefs, ancient heritage to thrilling adventures, Saudi Arabia invites you to experience a tapestry of captivating moments</Text>
            </View>
        </View>
    )

    render() {
        return (
            <View style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'white' }}>

                <CommonHeaderViewNew
                    headerVisible={true}
                    isHeaderText={true}
                    headerImageSource={''}
                    headerImageWidth={0}
                    headerImageHeight={0}
                />
                <FlatList
                    data={["1"]}
                    style={{ marginBottom: 80, height: '100%' }}
                    renderItem={this._renderData}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                />
                <View style={{ position: 'absolute', bottom: 15 }}>
                    <CommonButton
                        onPress={this.actionSignIn}
                        label={'Get Start'}
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