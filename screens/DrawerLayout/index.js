/**
 * @format
 */


// import App from './src/App';
// import {name as appName} from './app.json';

import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Easing,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from '../../components/Drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Block, Button, Text, } from '../../components';
import  Navbar  from '../../components/Navbar';
import { theme } from '../../constants';
import Home from '../Home';



const { width, height } = Dimensions.get('window');

class DrawerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    var leftDrawerContent = (
      <Block>
        <ImageBackground
          source={require("../../assets/img/backround.png")}
          style={{ width: '100%' }}

        >
          <Block flex={false} style={{ backgroundColor: '#fff', padding:20,borderBottomWidth:3, borderBottomColor:theme.colors.primary }}>
            {/* <Block padding={[20]} >
              <Button  style={{ position: 'absolute', right: 0, top: -10, paddingTop: 0, marginRight: 10 }} width='15%' onPress={() => console.log('aksdjlfjasd')}>
                <Text size={40} white center>&times;</Text>
              </Button>
            </Block> */}
            <Block center width='100%' flex={false}  >
              <Image source={require("../../assets/doctors_img/22.jpg")} style={{ width: 150, height: 150 }} />
              <Text h1 style={{marginTop:10}}>Smart Doctor's</Text>

            </Block>
          </Block>
        </ImageBackground>
        <ScrollView>
        <Block style={{backgroundColor:'white' ,height:height}}>
          <Button  padding={20} style={{borderBottomWidth:5,borderBottomColor:theme.colors.white,marginBottom:0,marginTop:0, backgroundColor:'rgba(10,194,186,0.8)',flexDirection:'row',display:'flex'}}>
            <Text center white size={20}>Home</Text>
            <Icon name="arrow-right" size={20} color='white' style={{alignSelf:'center',marginLeft:15}}/>
          </Button>
          <Button  padding={20} style={{borderBottomWidth:5,borderBottomColor:theme.colors.white,marginBottom:0,marginTop:0, backgroundColor:'rgba(10,194,186,0.8)',flexDirection:'row',display:'flex'}}>
            <Text center white size={20}>About</Text>
            <Icon name="arrow-right" size={20} color='white' style={{alignSelf:'center',marginLeft:15}}/>
          </Button>
          <Button  padding={20} style={{borderBottomWidth:5,borderBottomColor:theme.colors.white,marginBottom:0,marginTop:0, backgroundColor:'rgba(10,194,186,0.8)',flexDirection:'row',display:'flex'}} onPress={() => { Actions.contact() }}>
            <Text center white size={20}>Contact</Text>
            <Icon name="arrow-right" size={20} color='white' style={{alignSelf:'center',marginLeft:15}}/>
          </Button>
          <Button  padding={20} style={{borderBottomWidth:5,borderBottomColor:theme.colors.white,marginBottom:0,marginTop:0, backgroundColor:'rgba(10,194,186,0.8)',flexDirection:'row',display:'flex'}} onPress={() => Actions.settings()}>
            <Text center white size={20}>Settings</Text>
            <Icon name="arrow-right" size={20} color='white' style={{alignSelf:'center',marginLeft:15}}/>
          </Button>
          <Button  padding={20} onPress={() => Actions.welcome()} style={{borderBottomWidth:5,borderBottomColor:theme.colors.white,marginBottom:0,marginTop:0, backgroundColor:'rgba(10,194,186,0.8)',flexDirection:'row',display:'flex'}}>
            <Text center white size={20}>Log Out</Text>
            <Icon name="arrow-right" size={20} color='white' style={{alignSelf:'center',marginLeft:15}}/>
          </Button>
        </Block>
      </ScrollView>
      </Block>
    );

    return (
      <Drawer
        ref={comp => {
          this.drawer = comp;
        }}
        style={styles.container}
        drawerWidth={width}
        leftDrawerContent={leftDrawerContent}

        type={Drawer.types.Overlay}
        customStyles={{
          leftDrawer: styles.leftDrawer,
        }}
        drawerWidth={300}
        disabled={this.state.disabled}
        drawerPosition={Drawer.positions.Both}
        easingFunc={Easing.ease}>
        <View style={styles.content}>
          <Home>
            <Navbar title="Home" backgroundColor={theme.colors.primary} >
              <TouchableHighlight underlayColor='' onPress={() => { this.drawer && this.drawer.openLeftDrawer() }} style={{ height: theme.sizes.base * 2, marginTop: 20 }}               >
                <View>
                  <View style={styles.menuBarStyles}></View>
                  <View style={styles.menuBarStyles}></View>
                  <View style={styles.menuBarStyles}></View>
                </View>

              </TouchableHighlight>
            </Navbar>
          </Home>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    position: 'absolute',
    backgroundColor: '#2ba',
  },
  head: {
    height: 60,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#6a0d45',
  },
  content: {
    flex: 1,
    backgroundColor: '#e3b8cb',
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTop: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#8ad8dd',
  },
  leftBottom: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0',
  },
  leftDrawer: {
    borderRightWidth: 0,
  },
  rightDrawer: {
    borderLeftWidth: 4,
    borderLeftColor: '#5b585a',
  },
  btn1: {
    marginTop: 10,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#f06355',
  },
  btn2: {
    marginTop: 10,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#37b9d5',
  },
  btnText: {
    fontSize: 14,
    color: '#f0f0f0',
  },
  navBarStyles: {
    height: height / 10,
    backgroundColor: theme.colors.red,
    color: theme.colors.blue,
    opacity: 0.9
  },


  menuBarStyles: {
    backgroundColor: theme.colors.white,
    margin: 3,
    marginLeft: 20,
    width: 30,
    height: 5,
  }
});

export default DrawerLayout;
