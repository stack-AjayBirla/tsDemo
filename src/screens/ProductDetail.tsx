/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CostomButton from '../component/costomButton';
import Header from '../component/Header';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../redux/AddToCartActions';

const ProductDetail = (props: {route: {params: {item: any}}}) => {
  const navigation = useNavigation();
  const {item} = props.route.params;
  const dispatch = useDispatch();
  const addItem = (item: any) => {
    dispatch(addItemToCart(item));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.navigate('BottomTabNavigatore')}>
          <Image
            source={require('../assets/images/ic_back.png')}
            style={{tintColor: 'black'}}
          />
        </TouchableOpacity>
        <Header onPress={() => navigation.navigate('Cart')} title={''} />
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}> PRICE - {item.price}</Text>
        </View>
        <View>
          <Text style={styles.title}>Description :-</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset.
          </Text>
        </View>
        <CostomButton
          title={'Add-To-Cart'}
          buttonStyle={styles.button}
          onPress={() => addItem(item)}
          buttonText={undefined}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    borderBottomWidth: 1 / 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
  },
  titleContainer: {
    borderBottomWidth: 1 / 2,
    padding: 10,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '500',
    margin: 5,
  },
  text: {
    fontSize: 18,
    color: 'red',
    fontWeight: '500',
    marginHorizontal: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 40,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
});
export default ProductDetail;
