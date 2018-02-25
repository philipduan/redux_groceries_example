const GET_FRUIT_COUNT = 'GET_FRUIT_COUNT';
const UPDATE_FRUIT_STOCK = 'UPDATE_FRUIT_STOCK';
const EXPLAIN_FRUIT_STOCK = 'EXPLAIN_FRUIT_STOCK';
//Action Creators - A function that return an object

export const getFruitCount = () => ({
  type: GET_FRUIT_COUNT
});

export const updateFruitStock = count => ({
  type: UPDATE_FRUIT_STOCK,
  payload: count
});

export const explainFruitStock = () => ({
  type: EXPLAIN_FRUIT_STOCK
});

//Reducers

import { fruit } from '../../inventory';
import { countFruit, stockUp, explain } from '../../helper.js';
//Reducers is a function that returns the state object

const state = {
  inventory: fruit,
  originalList: {},
  currentList: {},
  counted: false,
  explained: ''
  //Reducer is a function that takes two arguments, the initial state object and the actions
};

export default (state, action) => {
  switch (action.type) {
    case GET_FRUIT_COUNT: {
      const originalList = countFruit(state.inventory);
      const currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;
      return {
        ...state,
        originalList,
        currentList,
        counted: true
      };
    }
    case UPDATE_FRUIT_STOCK: {
      const originalList = state.count
        ? state.originalList
        : countFruit(state.inventory);
      const currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;

      return {
        ...state,
        originalList,
        currentList: stockUp(currentList, action.payload),
        counted: true
      };
    }
    case EXPLAIN_FRUIT_STOCK: {
      const originalList = state.count
        ? state.originalList
        : countFruit(state.originalList);
      const currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;
      const explained = explain(currentList);
      return { ...state, originalList, currentList, counted: true, explained };
    }
    default:
      return state;
  }
};
