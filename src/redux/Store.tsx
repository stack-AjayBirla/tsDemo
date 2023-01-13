/* eslint-disable @typescript-eslint/no-unused-vars */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
let Store: any;

import {addToCartReducer} from './AddToCartReducers';

export default Store = createStore(addToCartReducer, applyMiddleware(thunk));
