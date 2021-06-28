import {React, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class Round extends Component {
    constructor(props) {
      super(props);
      this.state = {
        players: null,
      };
    }

    getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
    }
    

    render (){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>New round motherfuckers</Text>
            </View>
            );
    }
}


