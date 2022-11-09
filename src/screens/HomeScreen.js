import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const persons = [
    {
        id: "1",
        name: "Sanon Kaewobchoey",
        route: "Sanon",
      },
      {
        id: "2",
        name: "Narongphon longjaroen",
        route: null,
      },
      {
        id: "3",
        name: "Suparerk Manothai",
        route: null,
      },
      {
        id: "4",
        name: "Kribovorn Thaviyotsak",
        route: null,
      },
      {
        id: "5",
        name: "Siriphan Nanthasiri",
        route: null,
      },
      {
        id: "6",
        name: "Jakkaphop Wonglakorn",
        route: "George",
      },
      {
        id: "7",
        name: "Nattanan Chauymee",
        route: null,
      },
];

export default HomeScreen = ({ navigation }) => {

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
  };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  const ItemView = ({ item }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <View>
        <Text style={styles.item} onPress={() => onClickItem(item)}>
          {item.name}
        </Text>
      </View>
    );
  };

  const onClickItem = (item) => {
    if (item.route === null){item.route = '';}
    if (item.route != '') {
      navigation.navigate(item.route);
    } else {
      alert('ID: ' + item.id + ' Name: ' + item.name);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={persons}
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
            List of Spartan
          </Text>
        )}
        ListFooterComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}>Thank You</Text>
        )}
      />
    </SafeAreaView>
  );
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});