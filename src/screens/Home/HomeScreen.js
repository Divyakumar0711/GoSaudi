import React from "react";
import { View, Text, Image, Dimensions, Alert, FlatList, Button, Platform, TouchableWithoutFeedback } from "react-native";
import { Card } from 'react-native-shadow-cards';


import { SliderBox } from "react-native-image-slider-box";

import MaterialTabs from 'react-native-material-tabs';
import { Divider } from "react-native-paper";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      selectedTab: 0,
      imageData: [
        // require('../../assets/images/HomeSports.png'),
        require('../../assets/images/Slider1.png'),
        require('../../assets/images/Slider2.png'),
        require('../../assets/images/Slider3.png'),
      ],
      data: [
        
        {
          id: '1',
          image: require('../../assets/images/Slider1.png'),
          title: 'Boat & Diving Trip, Jeddah to Bayada Islands',
          price: '87 SAR',
          priceActual: '100 SAR',
          host: 'Jeddah',
          discount: '13% Off'
        },
        {
          id: '2',
          image: require('../../assets/images/Slider2.png'),
          title: 'Madian Trail (Neom) - 1 Day Trip - for group of 3 persons',
          priceActual: '500 SAR',
          price: '450 SAR',
          name: 'Al-Khobar',
          host: 'Tabuk',
          discount: '10% Off'
        },
        {
          id: '3',
          image: require('../../assets/images/Slider3.png'),
          title: 'Al Haddad Scuba: Learn the Basics of Snorkeling',
          priceActual: '700 SAR',
          price: '630 SAR',
          host: 'Jeddah',
          discount: '10% Off'
        },

      ]
    }
  }
  handleTabChange = (index) => {
    if (index === 0) {
      this.setState({ selectedTab: index });
    }
    else {
      this.setState({ selectedTab: index - 1 });
    }
  };
  _renderData = ({ item }) =>
  (
   
    <Card style={{ width: Dimensions.get('window').width - 40, borderRadius: 14, margin: 5, marginBottom: 20 }} >
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ActivityDetailsScreen')}>
        <View>
          <View style={{ width: Dimensions.get('window').width - 10 }} >
            <Image source={item.image} style={{ height: 180, width: Dimensions.get('window').width - 40, borderRadius: 14 }} resizeMode="cover" />
          </View>
         
        
            <View style={{ marginLeft: 14, width: Dimensions.get('window').width - 40, }}>
              <View style={{ marginTop: 4 }}>
                <Text style={{ color: '#008CFF', fontFamily: 'Poppins-Regular', fontSize: 14 }}>{item.host}</Text>
              </View>
              <View style={{  width: Dimensions.get('window').width - 60, }}>
                <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Poppins-SemiBold' }}>{item.title}</Text>
              </View>
              <View style={{ marginTop: 6 }}>
                <Text style={{ color: '#303030', fontSize: 16 }}>Strarting From</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 4, }}>
                <View style={{ marginRight:10 }}>
                  <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>{item.price}</Text>
                </View>
                <View style={{ justifyContent: 'center', marginBottom:Platform.OS == 'ios' ? 0 : 5}}>
                  <Text style={{ color: '#000000', textDecorationLine: 'line-through', }}>{item.priceActual}</Text>
                </View>
                <View style={{ justifyContent: 'center', backgroundColor: '#008CFF', borderRadius: 5, height: 20, marginLeft: 50 ,position:'absolute',right:40}}>
                  <Text style={{ color: 'white', fontSize: 12, justifyContent: 'center', marginLeft: 4, marginRight: 4 }}>{item.discount}</Text>
                </View>
              </View>
              <View style={{ width: Dimensions.get('window').width - 80, marginLeft: 40, right: 40, marginBottom: 10, marginTop: 10 }}>
                <Divider />
              </View>   
            
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ width: Dimensions.get('window').width - 40 ,marginLeft:15 }}>
      <View style={{ flexDirection: 'row', }}>
                <View style={{ marginBottom: 16 }}>
                  <Text style={{ fontSize: 20, color: '#008CFF', fontFamily: 'Poppins-Medium' }}>Book Now</Text>
                </View>
                <TouchableWithoutFeedback onPress={() =>this.props.navigation.navigate('Location')}>
                <View style={{ position: 'absolute', right: 35, justifyContent: 'center' }}>
                  <Image source={require('../../assets/images/RightBack.png')} style={{ height: 30, width: 30 }} />
                </View>
                </TouchableWithoutFeedback>
              </View>
      </View>
    </Card>
  )   
  render() {
    const { selectedTab } = this.state;
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Card style={{ padding: 15, marginTop: Platform.OS === 'ios' ? 40 : 20, borderRadius: 25 }}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ justifyContent: 'center', alignSelf: "center", }}>
              <Image source={require('../../assets/images/Search.png')} style={{ height: 15, width: 15 }} />
            </View>
            <View style={{ justifyContent: 'center', alignSelf: "center", paddingLeft: 5 }}>
              <Text style={{ color: '#292643', fontSize: 10, fontFamily: 'Poppins-Regular' }}> Explore And Book  </Text>
            </View>
            <TouchableWithoutFeedback>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', right: 2, position: 'absolute', height: 25, width: 25, alignSelf: "center", }}>
                <Image source={require('../../assets/images/Sort.png')} style={{ height: 15, width: 15, justifyContent: 'center', alignSelf: 'center' }} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Card>

        <View style={{ height: 50, width: Dimensions.get('window').width - 40, marginTop: 12, }}>
          <MaterialTabs
            items={[
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Sports.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Sports</Text>
              </View>,
              ,
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Cultural.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Art & Culture</Text>
              </View>
              ,
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Food-Drink.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Food & Drink</Text>
              </View>
              ,
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Wellness.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Wellness</Text>
              </View>
              ,
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Travel.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Travel</Text>
              </View>,
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/Entertainment.png')} style={{ height: 20, width: 20, }} />
                <Text style={{ margin: 5, color: 'black' }}>Entertainment</Text>
              </View>
            ]}
            selectedIndex={selectedTab}
            onChange={this.handleTabChange}
            barColor="white"
            indicatorColor="black"
            activeTextColor="black"
            textStyle={{ color: 'black' }}
            scrollable={true}
          />
        </View>
        <View style={{ height: 150, width: Dimensions.get('window').width - 40, marginTop: 12, }}>
          <SliderBox images={this.state.imageData} style={{ height: 200, width: Dimensions.get('window').width - 20, right: 20, }} autoplay circleLoop={true} dotStyle={{ width: 10, height: 5 }} resizeMode='cover'
          />
        </View>
        <FlatList
          data={this.state.data}
          style={{ height: '100%', marginTop: 18, marginBottom: 80 }}
          renderItem={this._renderData}
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}















{/* <Card style={{ width: Dimensions.get('window').width - 40, borderRadius: 14, margin: 5, marginBottom: 20 }} >
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ActivityDetailsScreen')}>
        <View>
          <View style={{ width: Dimensions.get('window').width - 10 }} >
            <Image source={item.image} style={{ height: 200, width: Dimensions.get('window').width - 40, borderRadius: 14 }} resizeMode="cover" />
          </View>
          <View >
            <View style={{ marginLeft: 14, width: Dimensions.get('window').width - 40, }}>
              <View style={{ marginTop: 8 }}>
                <Text style={{ color: '#008CFF', fontFamily: 'Poppins-Regular', fontSize: 14 }}>{item.host}</Text>
              </View>
              <View style={{ marginTop: 12, width: Dimensions.get('window').width - 60, }}>
                <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Poppins-SemiBold' }}>{item.title}</Text>
              </View>
              <View style={{ marginTop: 12 }}>
                <Text style={{ color: '#303030', fontSize: 16 }}>Strarting From</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <View style={{ width: 150 }}>
                  <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>{item.price}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ color: '#999999', textDecorationLine: 'line-through', }}>{item.priceActual}</Text>
                </View>
                <View style={{ justifyContent: 'center', backgroundColor: '#008CFF', borderRadius: 5, height: 20, marginLeft: 50 ,position:'absolute',right:40}}>
                  <Text style={{ color: 'white', fontSize: 12, justifyContent: 'center', marginLeft: 4, marginRight: 4 }}>{item.discount}</Text>
                </View>
              </View>
              <View style={{ width: Dimensions.get('window').width - 80, marginLeft: 40, right: 40, marginBottom: 20, marginTop: 20 }}>
                <Divider />
              </View>
              <View style={{ flexDirection: 'row', }}>
                <View style={{ marginBottom: 22 }}>
                  <Text style={{ fontSize: 20, color: '#008CFF', fontFamily: 'Poppins-SemiBold' }}>Book Now</Text>
                </View>
                <View style={{ position: 'absolute', right: 35, justifyContent: 'center' }}>
                  <Image source={require('../../assets/images/RightBack.png')} style={{ height: 30, width: 30 }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card> */}