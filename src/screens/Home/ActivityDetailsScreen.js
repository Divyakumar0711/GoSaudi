

import { Divider } from "@rneui/themed";
import React from "react";
import { View, Text, Dimensions, Image, FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class ActivityDetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageData: [
                require('../../assets/images/Slider1.png'),
                require('../../assets/images/Slider2.png'),
                require('../../assets/images/Slider3.png'),
            ],
            requirementData: [
                {
                    id: '1',
                    icon: require('../../assets/images/clock.png'),
                    headerText: 'Time',
                    bodyText: 'This activity should take 3.5 hours'
                },
                {
                    id: '2',
                    icon: require('../../assets/images/parental-control.png'),
                    headerText: 'Minimum Age',
                    bodyText: 'Minimum age for doing this is activity 8'
                },
                {
                    id: '3',
                    icon: require('../../assets/images/Food-Drink.png'),
                    headerText: 'Free Food',
                    bodyText: 'You can take some baverages during activity time '
                },
                {
                    id: '4',
                    icon: require('../../assets/images/coin.png'),
                    headerText: 'Price',
                    bodyText: 'Price of activity is 89 SAR'
                },
            ],
            customerReview: [
                {
                    id: '1',
                    customerImage: require('../../assets/images/dummy-profile.webp'),
                    customerName: 'John',
                    rating: 5,
                    bodyText: 'You always work so passionately to make sure our customers get the best experience and insight and they really are reaping the rewards from your efforts! '
                },
                {
                    id: '2',
                    customerImage: require('../../assets/images/dummy-profile.webp'),
                    customerName: 'Root',
                    rating: 4,
                    bodyText: 'You always work so passionately to make sure our customers get the best experience and insight and they really are reaping the rewards from your efforts! '
                },
                {
                    id: '2',
                    customerImage: require('../../assets/images/dummy-profile.webp'),
                    customerName: 'Mike',
                    rating: 3.50,
                    bodyText: 'You always work so passionately to make sure our customers get the best experience and insight and they really are reaping the rewards from your efforts! '
                },
            ]

        }
    }

    _renderRequirementData = ({ item }) => (
        <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 1, width: 200, height: 200, borderWidth: 1, borderColor: 'black', borderRadius: 10, marginRight: 10 }}>
                <View style={{ marginTop: 5, alignItems: 'center' }}>
                    <Image source={item.icon} style={{ width: 45, height: 45 }} />
                </View>

                <View style={{ marginTop: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#292643', paddingLeft: 5, }}>{item.headerText}</Text>
                </View>

                <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'row', }}>
                    <Text style={{ fontSize: 6, color: '#787586', marginTop: 8 }}>{'\u2B24'}</Text>
                    <Text style={{ fontSize: 14, paddingLeft: 2, color: '#787586', fontFamily: 'Poppins-Regular' }}>{item.bodyText}</Text>
                </View>
            </View>
        </View>
    )

    _renderCustomerReview = ({ item }) => (
        <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 1, width: 250, height: 250, borderWidth: 1, borderColor: 'black', borderRadius: 10, marginRight: 10 }}>
                <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Image source={item.customerImage} style={{ width: 60, height: 60, borderRadius: 30 }} />

                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#292643', paddingLeft: 5, }}>{item.customerName}</Text>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            defaultRating={item.rating}
                            size={20}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'row', }}>
                    <Text style={{ fontSize: 14, paddingLeft: 2, color: '#787586', fontFamily: 'Poppins-Regular' }}>{item.bodyText}</Text>
                </View>
            </View>
        </View>
    )

    _renderData = () => {
        return (

            <View >

                <SliderBox images={this.state.imageData} style={{ height: 300, width: Dimensions.get('window').width, }} autoplay circleLoop={true} dotStyle={{ height: 0, width: 0 }} resizeMode='cover' />

                <View style={{ marginTop: 20, }}>
                    <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#292643', letterSpacing: 1 }}>Boating</Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Image style={{ height: 15, width: 15 }} source={require('../../assets/images/star.png')} />
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#292643', paddingLeft: 5 }}>5.0</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#292643', paddingLeft: 5, }}>(15)</Text>
                        <Text style={{ fontSize: 3, paddingLeft: 5 }}>{'\u2B24'}</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#292643', paddingLeft: 5, textDecorationLine: 'underline' }}>Hejaz, Saudi Arabia</Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#292643', }} >Part of the </Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#292643', textDecorationLine: 'underline' }}>Go Saudi Exclusive organization  </Text>
                    </View>

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ marginTop: 30, flexDirection: 'row', width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>

                        <View style={{ width: Dimensions.get('window').width - 140, }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 28, color: '#292643', }}>Activity hosted by Go Saudi</Text>
                            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#292643', }}>3.5 hours</Text>
                                <Text style={{ fontSize: 3, paddingLeft: 5 }}>{'\u2B24'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#292643', paddingLeft: 5 }}>Hosted in English and Arabic</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, position: 'absolute', right: 0, top: 10 }}>
                            <Image source={require('../../assets/images/Slider1.png')} style={{ width: 70, height: 70, borderRadius: 35, }} />
                        </View>
                    </View>

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Image source={require('../../assets/images/thumbs-up.png')} style={{ width: 25, height: 25 }} />

                        <View style={{ width: Dimensions.get('window').width - 70, marginRight: 20, marginLeft: 10 }}>
                            <Text style={{ fontSize: 22, fontFamily: 'Poppins-Regular', color: '#292643' }}>Excellent value</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#787586' }}>Customer say It's well worth the price </Text>
                        </View>
                    </View>

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 28, color: '#292643', }} >What you'll do</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#787586', marginTop: 20 }} >One of the great things about being on a boat is that it allows you to un-plug from the rest of the world....<Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#292643', textDecorationLine: 'underline' }}>Read more</Text></Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row', width: Dimensions.get('window').width, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>

                        <View style={{ width: Dimensions.get('window').width / 2, height: 250, }}>
                            <Image source={require('../../assets/images/Slider1.png')} style={{ width: Dimensions.get('window').width / 2, height: 250, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} resizeMode="cover" />
                        </View>

                        <View style={{ marginLeft: 10, height: 250, width: Dimensions.get('window').width - 260, }}>
                            <Image source={require('../../assets/images/Slider1.png')} style={{ width: Dimensions.get('window').width - 260, height: 120, borderTopRightRadius: 10, }} resizeMode="cover" />
                            <Image source={require('../../assets/images/Slider1.png')} style={{ width: Dimensions.get('window').width - 260, height: 120, borderBottomRightRadius: 10, marginTop: 10 }} resizeMode="cover" />
                        </View>
                    </View>

                    <View style={{ marginTop: 30, borderWidth: 1, borderColor: '#292643', height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }}>
                        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#292643' }}>Show all Photos</Text>
                    </View>

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, marginTop: 30 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 28, color: '#292643', }} >About Activity</Text>
                    </View>


                    <FlatList
                        data={this.state.requirementData}
                        horizontal={true}
                        style={{ width: Dimensions.get('window').width - 40, marginRight: 20, marginTop: 30, marginLeft: 20 }}
                        renderItem={this._renderRequirementData}
                        keyboardShouldPersistTaps={'always'}
                        showsHorizontalScrollIndicator={false}
                    />

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, marginLeft: 20 }}>

                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 28, color: '#292643', }} >Meet our Activity Partner</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                            <Image source={require('../../assets/images/medal.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#292643', paddingLeft: 5 }} >5.0(27)</Text>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                            <Image source={require('../../assets/images/protection.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#292643', paddingLeft: 5 }} >Verified by Go Saudi</Text>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#787586', marginTop: 20 }} >Go Saudi’s mission is to encourage, promote and support federal and state programs that provide safe, high-quality and environmentally sound recreational boat access ...<Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#292643', textDecorationLine: 'underline' }}>Read more</Text></Text>
                        </View>

                        <View style={{ marginTop: 30, borderWidth: 1, borderColor: '#292643', height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#292643' }}>Contact activity organization</Text>
                        </View>
                    </View>

                    <Divider style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, }} />

                    <View style={{ marginTop: 30, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, marginLeft: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 28, color: '#292643', }} >Customer's Review</Text>
                    </View>

                    <FlatList
                        data={this.state.customerReview}
                        horizontal={true}
                        style={{ width: Dimensions.get('window').width - 40, marginRight: 20, marginTop: 30, marginLeft: 20, }}
                        renderItem={this._renderCustomerReview}
                        keyboardShouldPersistTaps={'always'}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </View>




        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 40 : 0, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, alignItems: 'center', }}>

                    <TouchableWithoutFeedback onPress={() =>this.props.navigation.goBack()}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                        <Image source={require('../../assets/images/Arrow_Icon.png')} style={{ width: 20, height: 20 }} />
                    </View>
                    </TouchableWithoutFeedback>

                    <View style={{ width: Dimensions.get('window').width - 20 - 40 - 40 - 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', fontSize: 20, letterSpacing: 2, color: '#292643' }}>Go Saudi</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                            <Image source={require('../../assets/images/Share.png')} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginLeft: 8 }}>
                            <Image source={require('../../assets/images/like.png')} style={{ width: 20, height: 20 }} />
                        </View>
                    </View>

                </View>
                <FlatList
                    data={['1']}
                    style={{ height: '100%', marginBottom: 110 }}
                    renderItem={this._renderData}
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                />

                <View style={{ position: 'absolute', height: 100, backgroundColor: 'white', bottom: 0, width: Dimensions.get('window').width, }}>
                    <Divider />
                    <View style={{ marginTop: 24, marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: "Poppins-SemiBold", color: '#292643' }}>From 89 SAR / </Text>
                                    <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'Poppins-Regular', color: '#292643' }}>person</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#787586', paddingLeft: 5, textDecorationLine: 'underline' }}>Show all prices</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'flex-end', position: 'absolute', right: 0, }}>
                            <CommonButton
                                onPress={this.actionSignIn}
                                label={'Book now'}
                                enabled={true}
                                marginLeft={20}
                                marginRight={20}
                                width={140}
                                height={50}
                                borderRadius={12}
                                backgroundColor={'#292643'}
                                fontColor={'white'}
                                fontSize={16}
                                fontFamily={'Poppins-Medium'}
                                textDecorationLine="none"
                                letterSpacing={1}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
} 