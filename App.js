import React, {Component} from 'react';
import {Animated, Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(1);
    this.translateY = new Animated.Value(0);
  }

  componentDidMount() {
    this.startAnimation();
    this.handleAnimation();
    setTimeout(() => {
      this.props.navigation.navigate('WelcomeScreen');
    }, 3000);
  }

  startAnimation = () => {
    Animated.timing(this.fadeAnim, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };
  handleAnimation = () => {
    Animated.timing(this.translateY, {
      toValue: -500,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {fadeAnim} = this;
    const {translateY} = this;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          source={require('./src/assets/images/AiroPlain.jpg')}
          style={{
            height: 100,
            width: 100,
            transform: [{translateY}],
          }}
        />
        <Animated.Text
          style={{
            opacity: fadeAnim,
            fontSize: 42,
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: 2,
            fontFamily: 'Poppins-Bold',
          }}>
          Go Saudi
        </Animated.Text>
      </View>
    );
  }
}

export default App;
