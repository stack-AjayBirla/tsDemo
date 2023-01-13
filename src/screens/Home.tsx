/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CostomButton from '../component/costomButton';
import Header from '../component/Header';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../redux/AddToCartActions';
import ProductData from '../utils/ProductData';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let updateList = useSelector(state => state.list);
  const [product, setProduct] = React.useState(ProductData);

  const addItem = (item: {id: number}) => {
    dispatch(addItemToCart(item));
    let data = product.map(val => {
      if (val.id === item.id) {
        return {
          ...val,
        };
      } else {
        return val;
      }
    });
    console.log(data);
    setProduct(data);
  };

  const renderProduct = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => navigation.navigate('ProductDetail', {item: item})}>
          <Image source={item.imageUrl} style={{width: 150, height: 150}} />
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTitle}>Price - {item.price}</Text>
            <CostomButton
              title={item.isAdded ? 'Added to cart' : 'Add to Cart'}
              onPress={() => addItem(item)}
              buttonStyle={[
                styles.button,
                {backgroundColor: item.isAdded ? 'green' : 'red'},
              ]}
              buttonText={undefined}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderProduct1 = ({item}: any) => {
    return (
      <View style={styles.subItemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', {item: item})}>
          <Image source={item.imageUrl} style={styles.subItemImage} />
          <Text style={styles.subItemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Home'}
        onPress={() => navigation.navigate('Cart')}
        headerStyle={undefined}
        buttonStyle={undefined}
        titleStyle={undefined}
        state={undefined}
      />
      <View style={{borderBottomWidth: 1 / 2}}>
        <FlatList
          data={product}
          renderItem={renderProduct1}
          keyExtractor={(item, index) => `item${index}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={product}
            renderItem={renderProduct}
            keyExtractor={(item, index) => `item${index}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 5,
    elevation: 1,
  },
  listItem: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 20,
    color: 'black',
  },
  subItemContainer: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    elevation: 1,
  },
  subItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  subItemText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  button: {
    width: 150,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 10,
  },
});

export default Home;
