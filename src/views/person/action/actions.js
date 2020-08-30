import * as types from './actionTypes';
import instance from '../../../services/api';

export const loadPersons = (page, size) => dispatch => {
  instance.get("users").then(({data}) => {
    let offset = (page) * size;
    let paginatedItems = data.data.slice(offset).slice(page, size);
    const totalPages = (Math.ceil(data.data.length / size));
    
    dispatch({
      type: types.LOAD_PERSONS,
      payload: {
        data: paginatedItems, 
        total: data.data.length, 
        totalPages: totalPages,
        allItems: data.data
      }
    });
  });
}

export const loadQueries = () => dispatch => {
  dispatch({
    type: types.UPDATE_PAGINATION
  });

  dispatch({
    type: types.QUERY_ITEMS
  })
}

export const changePage = (currentPage) => dispatch => {
  dispatch({
    type: types.CHANGE_PAGE,
    payload: currentPage
  })
}

export const changeQuery = (item) => dispatch => {
  dispatch({
    type: types.UPDATE_PAGINATION
  });

  dispatch({
    type: types.CHANGE_QUERY,
    payload: item
  });
}
