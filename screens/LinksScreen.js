import {Table,Row,Rows} from 'react-native-table-component'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  //Need
  var HeadTable= ['Game', 'Score', 'Frequency #', 'Conversion #', 'Conversion Rate']
  var DataTable= [
    ['1', '170', '25', '17', '68%'],
    ['2', '240', '10', '6', '60%'],
    ['3', '220', '15', '9', '60%'],
    ['4', '180', '18', '16', '88%'],
    ['5', '290', '20', '14', '70%']
  ]
  return (
    <View style={styles.container}>
      <Table borderStyle={{ margin: 20, borderWidth: 3, borderColor: '#0000FF' }}>
        <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
        <Rows data={DataTable} textStyle={styles.TableText} />
      </Table>

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
