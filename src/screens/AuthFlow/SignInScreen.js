import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
// import { TextInput } from "react-native-paper";
import {Divider} from '@react-native-material/core';
import CommonHeaderViewNew from '../../components/CommonHeaderView';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
    };
  }
  action_submit = () => {
    this.props.navigation.navigate('TabNavigaton');
  };
  _renderData = () => (
    <View
      style={{
        width: Dimensions.get('window').width - 40,
        marginLeft: 20,
        marginRight: 20,
      }}>
      <Text
        style={{
          fontSize: 36,
          fontFamily: 'Poppins-Bold',
          color: '#292643',
          textAlign: 'center',
        }}>
        Welcome back!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Poppins-Regular',
          color: '#787586',
          textAlign: 'center',
        }}>
        Let's continue for explore
      </Text>

      <View
        style={{
          marginTop: 20,
          alignSelf: 'center',
          backgroundColor: '#292643',
          height: 120,
          width: 120,
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 20, color: 'white'}}>
          Go Saudi
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: '#292643',
          }}>
          Email Address
        </Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingLeft: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <Image source={require('../../assets/images/email.png')} style={{ width: 25, height: 25, }} /> */}
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor={'#787586'}
            style={{
              paddingLeft: 10,
              width: Dimensions.get('window').width - 65,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#292643',
            }}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: '#292643',
          }}>
          Password
        </Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingLeft: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <Image source={require('../../assets/images/lock.png')} style={{ width: 25, height: 25, }} /> */}
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={'#787586'}
            secureTextEntry={this.state.showPassword}
            style={{
              paddingLeft: 10,
              width: Dimensions.get('window').width - 105,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#292643',
              paddingRight: 5,
            }}
          />
          <TouchableWithoutFeedback
            onPress={() =>
              this.setState({showPassword: !this.state.showPassword})
            }>
            <Image
              source={
                this.state.showPassword === false
                  ? require('../../assets/images/open-eye.png')
                  : require('../../assets/images/hide.png')
              }
              style={{
                width: this.state.showPassword === false ? 25 : 28,
                height: this.state.showPassword === false ? 25 : 28,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* <View style={{ width: Dimensions.get('window').width - 40, alignItems: 'center', marginTop: 20 }}>
                <TextInput
                    label="Enter Email Address"
                    mode="outlined"
                    textColor="#292643"
                    activeOutlineColor='#292643'
                    placeholderTextColor='#292643'
                    outlineColor='#292643'
                    style={{ width: Dimensions.get('window').width - 40, }}
                    contentStyle={{ fontFamily: 'Poppins-Regular' }}
                />
            </View> */}
      {/* <View style={{ width: Dimensions.get('window').width - 40, alignItems: 'center', marginTop: 20 }}>
                <TextInput
                    label="Enter Password"
                    mode="outlined"
                    textColor="#292643"
                    activeOutlineColor='#292643'
                    outlineStyle={{ color: '#292643' }}
                    placeholderTextColor='#292643'
                    outlineColor='#292643'
                    secureTextEntry={true}
                    style={{ width: Dimensions.get('window').width - 40, }}
                />
            </View> */}
      <View
        style={{
          width: Dimensions.get('window').width - 40,
          alignItems: 'flex-end',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: '#292643',
          }}>
          Forgot Password ?{' '}
        </Text>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <CommonButton
          onPress={this.action_submit}
          label={'Sign In'}
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
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            width: Dimensions.get('window').width - 40,
            marginRight: 20,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
          <View style={{paddingLeft: 5, paddingRight: 5}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              {'OR'}
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
          width: Dimensions.get('window').width - 40,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#f5f5f5',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/GoogleIcon.jpeg')}
            style={{width: 40, height: 40}}
          />
        </View>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#f5f5f5',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/FacebookIcon.png')}
            style={{width: 40, height: 40}}
          />
        </View>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#f5f5f5',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/AppleIcon.png')}
            style={{width: 40, height: 40}}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: '#787586',
            textAlign: 'center',
          }}>
          Don't have account ?{' '}
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Medium',
              color: '#292643',
            }}>
            {' '}
            Sign Up{' '}
          </Text>
        </Text>
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: 'white',
        }}>
        <CommonHeaderViewNew headerVisible={true} />
        <KeyboardAwareFlatList
          data={['1']}
          style={{height: '100%'}}
          renderItem={this._renderData}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}
        />
      </View>
    );
  }
}
