import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';

const details = [
  {title: 'Name', value: 'Jakkaphop Wonglakorn'},
  {title: 'Nickname', value: 'George'},
  {title: 'Age', value: '20'},
  {title: 'Address', value: 'Saphan Mai, Bangkok'},
  {title: 'Graduated', value: 'Vocational Certificate (Voc. Cert.)'},
  {title: 'Career', value: 'Air force, Developer'},
  {title: 'Team', value: 'Spartan'},
];

const GeorgeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EB060A'}}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          paddingVertical: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/cr7.png')}
        />
        <FlatList
          data={details}
          renderItem={({item}) => <ItemView item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

const ItemView = ({item}) => {
  return (
    <View
      style={{
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
    }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.detail}>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom:10
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    marginTop: 15,
    marginRight: 10,
    width : '40%',
    // color: '#001F2D',
    color: '#FFFFFF',
  },
  detail: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    marginTop: 10,
    width: '60%',
    color: '#FFFFFF',
  },
});

export default GeorgeScreen;
