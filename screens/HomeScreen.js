import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import Svg, {
  Circle,
  Ellipse,
} from 'react-native-svg';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            animated={false}
          >
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Restaurants</Text>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
            >
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Swiping Up</Text>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Profiles</Text>
              </View>
              <Swiper
                loop={false}
                index={0}
                showsPagination={false}
              >
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/image.png')} style={{width:300, height:300}}/>
                </View>
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/pr.png')} style={{width:300, height:300}}/>
                </View>
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/cg.png')} style={{width:300, height:300}}/>
                </View>
              </Swiper>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Swiping Down</Text>
              </View>
              <Svg
                height="100%"
                width="100%"
              >
                <Ellipse cx="50%" cy="100%" rx="150" ry="100" stroke="orange" strokeWidth="5" fill="#ffffff"/>
                <Circle cx="25%" cy="88%" r="18" fill="orange" />
                <Circle cx="50%" cy="85%" r="18" fill="orange" />
                <Circle cx="75%" cy="88%" r="18" fill="orange" />
              </Svg>
            </Swiper>
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Clubs</Text>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  slideDefault:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }

});
