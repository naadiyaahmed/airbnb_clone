import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';
import Tag from './components/Explore/Tag';
const {height, width} = Dimensions.get('window');

export default class Explore extends Component {

componentWillMount() {
    this.scrollY = new Animated.Value(0);
    this.topHeaderHeight = 80
    this.endHeaderHeight = 50
    if(Platform.OS === 'android') {
        this.topHeaderHeight = 100 + StatusBar.currentHeight;
        this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
        inputRange: [0,50],
        outputRange : [this.topHeaderHeight, this.endHeaderHeight],
        extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.topHeaderHeight],
        outputRange: [0,1],
        extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.topHeaderHeight],
        outputRange: [-30,10],
        extrapolate: 'clamp'
    })
}

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex: 1}}>
            <Animated.View style={{height:this.animatedHeaderHeight, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
                <View style={{flexDirection: "row",padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset:{width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1}}>
                    <Icon name="ios-search" size={20} style={{marginRight: 10,}}/>
                    <TextInput
                        placeholder="Try New Delhi"
                        placeholderTextColor="grey"
                        style={{
                            flex:1, 
                            fontWeight:"700", 
                            backgroundColor:'#FFF',
                            marginTop: Platform.OS === 'android' ? 30 : null,
                        }}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Animated.View style={{flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, marginRight: 5, opacity: this.animatedOpacity }}>
                        <Tag name="Guests"/>
                        <Tag name="Dates"/>
                </Animated.View>
            </Animated.View>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y:this.scrollY}}}
                ])}
            >
                <View style={{flex:1, paddingTop: 20, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                    What can we help you find, Naadiya?
                    </Text>
                    <View style={{height: 130, marginTop: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Category name="Home" imageUri={require("../assets/home.jpg")}></Category>
                            <Category name="Experiences" imageUri={require("../assets/experiences.jpg")}></Category>
                            <Category name="Restaurant" imageUri={require("../assets/restaurant.jpg")}></Category>
                        </ScrollView>
                    </View>
                    <View style={{marginTop: 40, paddingHorizontal:20}}>
                        <Text style={{fontSize: 24, fontWeight:'700'}}>Introducing Airbnb Plus!</Text>
                        <Text style={{marginTop: 10, fontWeight:'100'}}>A new selection of homes verified for quality &amp; comfort</Text>
                        <View style={{width: width-40, height: 200, marginTop: 20,}}>
                            <Image source={require('../assets/home.jpg')} style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}/>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Homes around the world
                    </Text>
                    <View style={{paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}}>
                        <Home width={width} height={width} name="Wallstreet Inn" desc="Private Room - 3 beds" rating={5} price="85"/>
                        <Home width={width} height={width} name="Wallstreet Inn" desc="Private Room - 2 beds" rating={3} price="70"/>
                        <Home width={width} height={width} name="Wallstreet Inn" desc="Private Room - 1 beds" rating={4} price="65"/>
                    </View>
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
     container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  },
});