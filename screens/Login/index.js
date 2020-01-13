import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Block, Input, Text, BackBtn } from '../../components';
import { theme } from '../../constants';
import { Actions } from 'react-native-router-flux';


const { width, height } = Dimensions.get('window');

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
    lockIcon:'lock',
    lockIconColor:''
  }

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      this.setState({lockIcon:'unlock',lockIconColor:theme.colors.primary})
      Actions.drawerlayout();
    }else{
      this.setState({lockIconColor:'red'})
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <ScrollView >
        <BackBtn 
          backgroundColor={theme.colors.primary}
          action={() => Actions.welcome()}
        />
        <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: '#fff', height: height }}>
          <Text h1 bold primary center style={{ marginTop: 40 }}>
          <Icon
            color={theme.colors.gray}
            size={theme.sizes.font * 3}
            name={this.state.lockIcon}
            style={styles.iconStyles}
          />
            {"  "}Login</Text>
          <Block middle flex={0.8}>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button primary padding={12} onPress={() => this.handleLogin()}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> :
                <Text bold white center> Login </Text>
              }
            </Button>

            <Button padding={12} white shadow onPress={() => navigation.navigate('Forgot')}>
              <Text gray caption center >
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  iconStyles:{
    color: theme.colors.primary, 
  },
})