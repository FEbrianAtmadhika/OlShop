import {View, Text, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../../component/Connection';
import array from '../../component/Array';

export default function index() {
  const todoRef = firebase.firestore().collection('array');
  const [addData, setAddData] = useState(array.array);

  function uploadData() {
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createAt: timestamp,
      };
      todoRef.add(data).then(() => {
        setAddData('');
        Keyboard.dismiss();
      });
    }
  }
  return (
    <View>
      <Text></Text>
    </View>
  );
}
