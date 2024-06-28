import React from "react";
import { View, Text, Dimensions, TextInput, TouchableWithoutFeedback } from "react-native";
import CommonHeaderView from "../../components/CommonHeaderView";
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import CommonAlertModalSingleButton from "../../components/CommonAlertModalSingleButton";




export default class AddCardScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      cardName: '',
      cardnametx: '',
      cardNumber: '',
      cardnumbertx: '',
      cvvnumber: '',
      cardMonth: '',
      cardYear: '',
      modalVisible: false
    }

  }

  action_CardName = (text) => {
    this.setState({ cardName: text, cardnametx: '1' })
  }

  action_Cardnum = (text) => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    this.setState({ cardNumber: formattedText, cardnumbetx: '1' })
  }

  action_CVV = (text) => {
    this.setState({ cvvnumber: text })
  }

  action_CardMonth = (text) => {
    this.setState({ cardMonth: text })
  }

  action_CardYear = (text) => {
    this.setState({ cardYear: text })
  }
  action_Submit = () => {
    this.setState({ modalVisible: true })
  }

  action_closeModal = () => {
    this.setState({ modalVisible: false })
    this.props.navigation.navigate('PaymentMethodScreen')
  }


  _renderData = ({ item }) => {
    return (
      <View style={{ marginTop: 20, width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#292643' }}>Name on Card</Text>
        <View style={{ marginTop: 10, borderWidth: 1, borderRadius: 20, height: 50, paddingLeft: 5, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor={'#787586'}
            style={{ paddingLeft: 10, width: Dimensions.get('window').width - 105, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#292643', paddingRight: 5 }}
            autoCapitalize="none"
            onFocus={() => this.setState({ cardnametx: '1' })}
            onEndEditing={() => this.setState({ cardnametx: '' })}
            onChangeText={(text) => this.action_CardName(text)}
            value={this.state.cardName}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#292643' }}>Card number</Text>
          <View style={{ marginTop: 10, borderWidth: 1, borderRadius: 20, height: 50, paddingLeft: 5, flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder="Enter Card Nuumber"
              placeholderTextColor={'#787586'}
              style={{ paddingLeft: 10, width: Dimensions.get('window').width - 105, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#292643', paddingRight: 5 }}
              autoCapitalize="none"
              onChangeText={(text) => this.action_Cardnum(text)}
              keyboardType={'number-pad'}
              returnKeyLabel='Done'
              returnKeyType='done'
              maxLength={19}
              showIcon={false}
              value={this.state.cardNumber}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#292643' }}>CVV or CVC</Text>
          <View style={{ marginTop: 10, borderWidth: 1, borderRadius: 20, height: 50, paddingLeft: 5, flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder="Enter CVV or CVC"
              placeholderTextColor={'#787586'}
              style={{ paddingLeft: 10, width: Dimensions.get('window').width - 105, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#292643', paddingRight: 5 }}
              autoCapitalize="none"
              onChangeText={(text) => this.action_CVV({ text })}
              keyboardType={'number-pad'}
              returnKeyLabel='Done'
              returnKeyType='done'
              maxLength={3}
              showIcon={false}
              value={this.state.cvvnumber}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#292643' }}>Card Expiry</Text>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ height: 38, width: 50, fontSize: 15, borderBottomWidth: 1, borderBottomColor: 'black', fontFamily: 'Poppins-Regular', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                placeholder="MM"
                placeholderTextColor={'#787586'}
                style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#292643', }}
                autoCapitalize="none"
                onChangeText={(text) => this.action_CardMonth({ text })}
                keyboardType={'number-pad'}
                returnKeyLabel='Done'
                returnKeyType='done'
                maxLength={2}
                showIcon={false}
                value={this.state.cardMonth}
              />
            </View>

            <View style={{ height: 38, width: 50, marginLeft: 10, fontSize: 15, borderBottomWidth: 1, borderBottomColor: 'black', fontFamily: 'Poppins-Regular', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                placeholder="YY"
                placeholderTextColor={'#787586'}
                style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#292643', }}
                autoCapitalize="none"
                onChangeText={(text) => this.action_CardYear({ text })}
                keyboardType={'number-pad'}
                returnKeyLabel='Done'
                returnKeyType='done'
                maxLength={2}
                showIcon={false}
                value={this.state.cardYear}
              />
            </View>

          </View>
        </View>

        <View style={{ marginTop: 40, }}>
          <CommonButton
            onPress={this.action_Submit}
            label={'Add'}
            enabled={true}
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
          label1={'Add Card'}
          headingTextMarginLeft={8}
        />

        <KeyboardAwareFlatList
          data={["1"]}
          style={{ height: '100%' }}
          renderItem={this._renderData}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}
        />


        <CommonAlertModalSingleButton
          visible={this.state.modalVisible}
          title="Congratulations"
          content="You  added successfully card"
          onPress={this.action_closeModal}
          label='Ok'
          enabled={true}
        />
      </View>
    )
  }

}



