/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../utils/LocalStorage';
import {removeItemToCart} from '../redux/AddToCartActions';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [list, setList] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const items = useSelector(state => state.list);
  console.log('cart', items);

  useEffect(() => {
    getData('cart_list').then(res => {
      let value = JSON.parse(String(res));
      setList(value);
    });
  }, [refresh]);

  const handleDelete = (id: number) => {
    dispatch(removeItemToCart(id));
    setRefresh(!refresh);
  };

  const RenderItem = ({item, index}: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imageUrl} style={styles.images} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.itemText}>Price - {item.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={{justifyContent: 'center', left: 150}}>
          <Image source={require('../assets/images/_remove.png')} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigatore')}>
          <Image
            source={require('../assets/images/ic_back.png')}
            style={{tintColor: 'black'}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CART</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={RenderItem}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 20,
  },
  images: {
    width: 100,
    height: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
    elevation: 5,
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default Cart;
