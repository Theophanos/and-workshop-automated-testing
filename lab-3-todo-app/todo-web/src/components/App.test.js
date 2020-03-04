import React from 'react';
import { shallow } from 'enzyme';
import { Fab, List, TextField } from '@material-ui/core';
import Todo from './Todo';

describe('<Todo />', () => {
  let wrapper;
  let textFieldElement;
  let addItemButtonElement;
  let listElement;
  beforeEach(() => {
    wrapper = shallow(<Todo label="" />);
    textFieldElement = wrapper.find(TextField);
    addItemButtonElement = wrapper.find(Fab);
    listElement = wrapper.find(List);
  });
  afterEach(() => {
  });
  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should contain an empty <TextField /> with a disabled "+" button', () => {
    expect(textFieldElement.props().type).toBe('text');
    expect(textFieldElement.props().text).toBeUndefined();
    expect(textFieldElement.props().autoFocus).toBe(false);
    expect(textFieldElement.props().onChange).toBeDefined();
    expect(addItemButtonElement.props().disabled).toBe(true);
    expect(addItemButtonElement.props().onClick).toBeDefined();
  });
  it('should enable and disable button based on <TextField /> value', () => {
    textFieldElement.simulate('change', { target: { value: 'Anything' } });
    expect(wrapper.state().text).toBe('Anything');
    addItemButtonElement = wrapper.find(Fab);
    expect(addItemButtonElement.props().disabled).toBe(false);
    textFieldElement.simulate('change', { target: { value: '' } });
    expect(wrapper.state().text).toBe('');
    addItemButtonElement = wrapper.find(Fab);
    expect(addItemButtonElement.props().disabled).toBe(true);
  });
  it('should return <List /> with no elements on load', () => {
    expect(listElement).toHaveLength(0);
    expect(wrapper.find('.no-tasks')).toBeDefined();
  });
});
