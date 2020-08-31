import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PersonConnect from '../PersonConnect';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;
const initialState = {
  person: {
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
}
store = mockStore(initialState);
configure({adapter: new Adapter()});

describe("When screen is loaded", () => {
  let wrapper;
  it("should show title", () => {
    store = mockStore(initialState);
    wrapper = shallow(<PersonConnect store={store}/>);
    expect(wrapper.render(/Title/).length).toBe(1);
  });
    
  it("should show load when list is empty", () => {
    store = mockStore(initialState);
    wrapper = shallow(<PersonConnect store={store}/>)
    expect(wrapper.find("LoadGif").exists()).toMatchSnapshot();
  });

  it("shouldn't show loading when list is not empty", () => {
    store = mockStore(initialState);
    store.dispatch({
      type: 'PERSONS_LOAD_PERSONS',
      payload: {
        data: [{
          name: 'Test 1',
          age: 20
        }, {
          name: 'Test 1',
          age: 20
        }], 
        total: 2, 
        totalPages: 1,
        allItems: [{
          name: 'Test 1',
          age: 20
        }, {
          name: 'Test 1',
          age: 20
        }]
      }
    });
    wrapper = shallow(<PersonConnect store={store}/>)
    expect(wrapper.find("PersonListComponent").exists()).toMatchSnapshot();
  })
});
