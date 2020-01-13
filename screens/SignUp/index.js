import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, ScrollView ,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Button, Block, Input, Text, BackBtn } from '../../components';

import { theme } from '../../constants';


const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    Cpassword: null,
    errors: [],
    loading: false,
  }

  handleSignUp() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push('email');
    if (!username) errors.push('username');
    if (!password) errors.push('password');

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue', onPress: () => {
              navigation.navigate('Browse')
            }
          }
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <ScrollView>
        <BackBtn
          backgroundColor={theme.colors.primary}
          action={() => Actions.welcome()}
        />
        <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: '#fff',height:height}}>
          <Block margin={[50]} center flex={false}>
            <Text h1 bold primary>Sign Up</Text>
          </Block>
          <Block middle flex={false}>
            <Input
              email
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="Username"
              error={hasErrors('username')}
              style={[styles.input, hasErrors('username')]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Input
              secure
              label="Conform Password"
              error={hasErrors('Cpassword')}
              style={[styles.input, hasErrors('Cpassword')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ Cpassword: text })}
            />
            <Button primary padding={12} onPress={() => this.handleSignUp()}>
                <Text bold white center>Sign Up</Text>
            </Button>

            <Button white shadow padding={12} onPress={() => navigation.navigate('Login')}>
              <Text gray caption center bold>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth+0.5,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
})