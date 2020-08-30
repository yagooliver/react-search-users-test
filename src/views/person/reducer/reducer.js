import * as types from '../action/actionTypes';

const initialState = {
  persons: [],
  firstState: [],
  allItems: [],
  totalItems: 0,
  totalPage: 0,
  page: 0,
  size: 10,
  query: {
    name: '',
    age: '',
  },
  isFetching: false
}

const PersonReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOAD_PERSONS:
      return {
        ...state,
        persons: action.payload.data,
        firstState: action.payload.data,
        allItems: action.payload.allItems,
        totalItems: action.payload.total,
        totalPage: action.payload.totalPages
      }
    case types.CHANGE_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case types.QUERY_ITEMS:
      let list = [];
      if(state.query.name.length > 0 || state.query.age > 0){
        list = createListQueries(list, state);
        let paginatedItems = list.slice(0, + state.size);
        return {
          ...state,
          persons: paginatedItems,
          page: 0,
          totalItems: list.length,
          totalPage: (Math.ceil(list.length / state.size))
        }
      }else{
        list = state.firstState;
        return {
          ...state,
          persons: list,
          totalItems: state.allItems.length,
          totalPage: (Math.ceil(state.allItems.length / state.size))
        }
      }
    case types.CHANGE_PAGE:
      let listItems= [];
      if(state.query.name.length > 0 || state.query.age > 0){
        listItems = createListQueries(listItems, state);
      }else{
        listItems = state.allItems;
      }
      let offset = action.payload > 0 ? (action.payload - 1) * state.size : 0;
      let paginatedItems = listItems.slice(offset - 1, (offset - 1) + state.size);
      return {
        ...state,
        page: action.payload,
        persons: paginatedItems.length ? paginatedItems : state.firstState
      }
    case types.UPDATE_PAGINATION:
      return {
        ...state,
        persons: []
      }
    default:
      return state;
  }
}

export default PersonReducer;

function createListQueries(list, state) {
  list = state.allItems.filter(entry => {
    if (state.query.age && state.query.name !== '') {
      return entry.name.includes(state.query.name) && entry.age.toString() === state.query.age;
    }
    else if (state.query.age && state.query.name === '') {
      return entry.age.toString() === state.query.age;
    }
    else {
      return entry.name.includes(state.query.name);
    }
  });
  return list;
}
