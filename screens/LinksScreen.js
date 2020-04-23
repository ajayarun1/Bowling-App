import {Table,Row,Rows} from 'react-native-table-component'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  //Need to make Conversion Rate automatically update based on user input
  const [value, onChangeText] = React.useState('Enter game 1 score');
//How do I allow for different inputs into each table slot?
  var HeadTable= ['Game', 'Score', 'Frequency #', 'Conversion #', 'Conversion Rate']
  var DataTable= [
    ['1', '170', '25', '17', '68%'],
    ['2', '240', '10', '6', '0%'],
    ['3', '220', '15', '9', '0%'],
    ['4', '180', '18', '16', '8%'],
    ['5', '290', '20', '14', '0%']
  ]
  
  {DataTable[0][5]=Math.round((DataTable[0][3]/DataTable[0][2])*100)+'%'}
  {DataTable[1][5]=Math.round((DataTable[1][3]/DataTable[1][2])*100)+'%'}
  {DataTable[2][5]=Math.round((DataTable[2][3]/DataTable[2][2])*100)+'%'}
  {DataTable[3][5]=Math.round((DataTable[3][3]/DataTable[3][2])*100)+'%'}
  {DataTable[4][5]=Math.round((DataTable[4][3]/DataTable[4][2])*100)+'%'}
  //Underneath is the value that gets put into the table
  {DataTable[0][1]=value}
  //If the conversion rate is above 50, print "likely shot"
  //Add VHHS logo one more time
  return (
    <View style={styles.container}>
      <Table borderStyle={{ margin: 20, borderWidth: 3, borderColor: '#0000FF' }}>
        <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
        <Rows data={DataTable} textStyle={styles.TableText} />
      </Table>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
