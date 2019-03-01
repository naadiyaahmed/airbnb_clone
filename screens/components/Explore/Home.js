import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Home extends Component {
  render() {
    return (
    <View style={{width: this.props.width/2-30, height: this.props.width/2- 30, borderWidth: 0.5, borderColor:'#ddd', marginTop: 20}}>
        <View style={{flex:1}}>
            <Image source={require('../../../assets/home.jpg')} style={{flex:1, width:null, height:null, resizeMode: "cover"}} />
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}} >
            <Text style={{fontSize: 10, color: '#b63838'}} >{this.props.desc}</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
            <Text style={{fontSize: 10}}>{this.props.price}$</Text>
            <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.rating}
                starSize={10}
            />
        </View>
    </View>
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