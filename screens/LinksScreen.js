import { Table, Row, Rows, Cell, TableWrapper } from 'react-native-table-component'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  //Need to make Conversion Rate automatically update based on user input
  const [value, onChangeText] = React.useState('1st line');
  const [valueTwo, onChangeTextTwo] = React.useState('2nd line');
  const [valueThree, onChangeTextThree] = React.useState('3rd line');
  const [valueFour, onChangeTextFour] = React.useState('4th line');
  const [valueFive, onChangeTextFive] = React.useState('5th line');
  const [freq, oct] = React.useState('6th line');
  const [freq2, oct2] = React.useState('7th line');
  const [freq3, oct3] = React.useState('8th line');
  const [freq4, oct4] = React.useState('9th line');
  const [freq5, oct5] = React.useState('10th line');
  const [conv, sto] = React.useState('11th line');
  const [conv2, sto2] = React.useState('12th line');
  const [conv3, sto3] = React.useState('13th line');
  const [conv4, sto4] = React.useState('14th line');
  const [conv5, sto5] = React.useState('15th line');

  //How do I allow for different inputs into each table slot?
  var HeadTable = ['Game', 'Score', 'Frequency # (TYPE NUMBER)', 'Conversion # (TYPE NUMBER)', 'Conversion Rate']
  var DataTable = [
    ['1', '170', '25', '17', '68%'],
    ['2', '240', '10', '6', '10%'],
    ['3', '220', '15', '9', '0%'],
    ['4', '180', '18', '16', '8%'],
    ['5', '290', '20', '14', '0%']
  ]
  //Underneath is the value that gets put into the table
  { DataTable[0][1] = value }
  { DataTable[1][1] = valueTwo }
  { DataTable[2][1] = valueThree }
  { DataTable[3][1] = valueFour }
  { DataTable[4][1] = valueFive }
  { DataTable[0][2] = freq }
  { DataTable[1][2] = freq2 }
  { DataTable[2][2] = freq3 }
  { DataTable[3][2] = freq4 }
  { DataTable[4][2] = freq5 }
  { DataTable[0][3] = conv }
  { DataTable[1][3] = conv2 }
  { DataTable[2][3] = conv3 }
  { DataTable[3][3] = conv4 }
  { DataTable[4][3] = conv5 }

  { DataTable[0][4] = Math.round((DataTable[0][2] / DataTable[0][3]) * 100) + '%' }
  { DataTable[1][4] = Math.round((DataTable[1][2] / DataTable[1][3]) * 100) + '%' }
  { DataTable[2][4] = Math.round((DataTable[2][2] / DataTable[2][3]) * 100) + '%' }
  { DataTable[3][4] = Math.round((DataTable[3][2] / DataTable[3][3]) * 100) + '%' }
  { DataTable[4][4] = Math.round((DataTable[4][2] / DataTable[4][3]) * 100) + '%' }
  return (
    <View style={styles.container}>
      <Table borderStyle={{ margin: 20, borderWidth: 3, borderColor: '#0000FF' }}>
        <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
        <Rows data={DataTable} textStyle={styles.TableText} />
      </Table>
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeTextTwo(text)}
        valueTwo={valueTwo}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeTextThree(text)}
        valueThree={valueThree}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeTextFour(text)}
        valueFour={valueFour}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeTextFive(text)}
        valueFive={valueFive}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => oct(text)}
        freq={freq}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => oct2(text)}
        freq2={freq2}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => oct3(text)}
        freq={freq3}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => oct4(text)}
        freq4={freq4}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => oct5(text)}
        freq5={freq5}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => sto(text)}
        conv={conv}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => sto2(text)}
        conv2={conv2}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => sto3(text)}
        conv3={conv3}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => sto4(text)}
        conv4={conv4}
      />
      <TextInput
        style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => sto5(text)}
        conv5={conv5}
      />
      <Image source={require('./bowlingPins.png')} 
      style={{width: 100, height: 75,alignSelf:'center'}} />
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
