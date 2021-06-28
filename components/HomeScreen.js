import {React, Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';




export default class HomeScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rounds : null,
      };
    }

    componentDidMount = async () => {
      storeData('Is this working?')
      this.getAllKeys()
    };

    render (){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                     title="Create new round"
                     onPress={() => props.navigation.navigate('Round')}
                />
            </View>
            );
    }


/*
  openDatabase = () => {
      if (Platform.OS === "web") {
        return {
          transaction: () => {
            return {
              executeSql: () => {},
            };
          },
        };
      }
    
      const db = SQLite.openDatabase("db.db");

      React.useEffect(() => {
          db.transaction((tx) => {
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, name text);");
            tx.executeSql("INSERT INTO items (id, name) VALUES (CURRENT_TIMESTAMP, 'test');");
          });
        }, []);
      return db;
    }
*/
    /*
  function Rounds({ navigation, db }) {
      console.log('inside rounds')
      console.log(db)
      const [rounds, setRounds] = React.useState(null);
      React.useEffect(() => {
          db.transaction((tx) => {
          tx.executeSql(
              `select * from items;`, [],
              (_, {rows}) =>  console.log(JSON.stringify(rows))
          );
          }, null);
      }, []);
      console.log(rounds)
      console.log('is rounds set?')

      return (
          <View >
            {rounds.map(({ id, value }) => (
              <TouchableOpacity
                key={id}
                onPress={() => navigation.navigate('Round')}
                style={{
                  backgroundColor: done ? "#1c9963" : "#fff",
                  borderColor: "#000",
                  borderWidth: 1,
                  padding: 8,
                }}
              >
                <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
  */

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('test', value)
    } catch (e) {
      // saving error
    }
  }


  getData = async (key) => {
    try {
      return jsonValue = await AsyncStorage.getItem(key)
    } catch(e) {
      // error reading value
    }
  }

  getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }

    console.log(keys)
    return keys
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }


  HomeScreen = ({ navigation })  => {
      console.log('heihei')
      const [text, setText] = React.useState(null);
      const keys = getAllKeys()
      const test = getData(keys[0])
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {test}
          <Rounds db={db}/>
        </View>
      );
    }

}
