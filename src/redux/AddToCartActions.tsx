/* eslint-disable @typescript-eslint/no-unused-vars */
import {storeData} from '../utils/LocalStorage';
import ProductData from '../utils/ProductData';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const GET_LIST = 'GET_LIST';

export const getList = (data: any) => {
  return (
    dispatch: (arg0: {type: string; payload: any}) => void,
    getState: () => {(): any; new (): any; list: any},
  ) => {
    dispatch({
      type: GET_LIST,
      payload: data,
    });
  };
};

export const addItemToCart = (data: {id: any}) => {
  return (
    dispatch: (arg0: {type: string; payload: any}) => void,
    getState: () => {(): any; new (): any; list: any},
  ) => {
    let list = getState().list;
    let index = list?.findIndex((val: {id: any}) => val.id === data.id);
    let newData = index === -1 ? [data, ...list] : list;
    storeData('cart_list', JSON.stringify(newData));
    dispatch({
      type: ADD_ITEM,
      payload: newData,
    });
  };
};

export const removeItemToCart = (id: number) => {
  return (
    dispatch: (arg0: {type: string; payload: any}) => void,
    getState: () => {(): any; new (): any; list: any},
  ) => {
    let data = getState().list;
    let index = data.findIndex((val: {id: number}) => val.id === id);
    data.splice(index, 1);
    let newArray = data.map((val: {id: number}) => {
      if (val.id === id) {
        return {
          ...val,
          isAdded: false,
        };
      } else {
        return val;
      }
    });
    storeData('cart_list', JSON.stringify(newArray));
    dispatch({
      type: REMOVE_ITEM,
      payload: newArray,
    });
  };
};
