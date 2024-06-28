import React from "react";
import { View, Text, Dimensions, Image, FlatList,TouchableWithoutFeedback } from "react-native";
import { Card } from 'react-native-shadow-cards';
import { Divider } from "@rneui/themed";
export default class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
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
    renderFavorite = ({ item }) =>
    (
        <Card style={{ width: Dimensions.get('window').width - 40, borderRadius: 14, margin: 5, marginBottom: 20 }} >
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ActivityDetailsScreen')}>
        <View>
          <View style={{ width: Dimensions.get('window').width - 10 }} >
            <Image source={item.image} style={{ height: 180, width: Dimensions.get('window').width - 40, borderRadius: 14 }} resizeMode="cover" />
          </View>
          <Image source={require('../../assets/images/Redheart.png')} style={{ height: 20, width: 20, position: 'absolute', right: 8, marginTop: 10 }} />
          <View >
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
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Platform.OS === 'ios' ? 40 : 20,backgroundColor: 'white' }}>
                <FlatList
                    renderItem={this.renderFavorite}
                    data={this.state.data}
                />
            </View>
        )
    }
}