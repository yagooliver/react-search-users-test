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
    persons:  [{
        name: 'Test 1',
        age: 20
      }, {
        name: 'Test 1',
        age: 20
      }],
    firstState: [{
        name: 'Test 1',
        age: 20
      }, {
        name: 'Test 1',
        age: 20
      }],
    allItems: [ {
        name: 'Test 1',
        age: 20
      }, {
        name: 'Test 1',
        age: 20
      }],
    totalItems: 2,
    totalPage: 1,
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

describe("When table screen is loaded", () => {
  let wrapper;
  it('should load table', () => {
    wrapper = shallow(<PersonConnect store={store}/>)
    let commonWrapper = wrapper.render(/PersonListComponent/);
    expect(commonWrapper.find('table').length).toBe(1)
  });
});