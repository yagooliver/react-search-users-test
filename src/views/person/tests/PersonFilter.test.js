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

describe("When filter screen is loaded", () => {
  let wrapper;
  it('should load input name', () => {
    wrapper = shallow(<PersonConnect store={store}/>)
    let commonWrapper = wrapper.render(/PersonFilter/);
    expect(commonWrapper.find('input[name="name"]').length).toBe(1)
  });
  it('should load input age', () => {
    wrapper = shallow(<PersonConnect store={store}/>)
    let commonWrapper = wrapper.render(/PersonFilter/);
    expect(commonWrapper.find('input[name="age"]').length).toBe(1);
  });
  it('should have only two inputs', () => {
    wrapper = shallow(<PersonConnect store={store}/>)
    let commonWrapper = wrapper.render(/PersonFilter/);
    expect(commonWrapper.find('input').length).toBe(2);
  });
});