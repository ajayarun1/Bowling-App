import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
{var quoteList= [" Everyday is a new day "," I always felt that my greatest asset was not my physical ability, it was my mental ability. "," A trophy carries dust. Memories last forever. "," An athlete cannot run with money in his pockets. He must run with hope in his heart and dreams in his head. "]}
{var randQuote= quoteList[Math.floor(Math.random() * quoteList.length)];
}
export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={{fontWeight:'bold', color:'blue',fontSize:18,margin:14}}>
      {"\n"}
      Welcome to the official Vernon Hills High School Bowling team app! (created by Ajay Arun)        
      {"\n"}
      </Text>
      <Image source={require('./VHHS-logo.png')} 
      style={{width: 150, height: 150,alignSelf:'center'}} />
      <Text style={{color: 'blue',fontSize:18,margin:20}}>
        {"\n"}
        Today's quote is:
        {randQuote}
        Now go bowl a 300!
        </Text>
  </View>
);
}

HomeScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    textAlign: 'center',
    fontSize:14
  },
});
