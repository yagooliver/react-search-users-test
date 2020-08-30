import React from 'react';
import PropTypes from 'prop-types';
import {
  InputFieldName,
  LabelInput,
  FormGroup,
  FormContainer,
  InputFieldAge
} from './styles';

const PersonFilter = (props) => {
  
  const handleChangeQuery = (e) => {
    props.onChange({
      ...props.query,
      [e.target.name]: e.target.value
    });
  }

  const handleBurSearch = () => {
    props.onSearch(props.query);
  }

  return(
    <FormContainer>
      <FormGroup>
        <LabelInput>Input name:</LabelInput>
        <InputFieldName type="text" name="name" onBlur={handleBurSearch} value={props.query.name} onChange={handleChangeQuery}/>
      </FormGroup>
      <FormGroup>
        <LabelInput>Input Age:</LabelInput>
        <InputFieldAge type="number" pattern="[0-9]*" name="age" onBlur={handleBurSearch} value={props.query.age} onChange={handleChangeQuery}/>
      </FormGroup>
    </FormContainer>
  )
}

PersonFilter.propTypes = {
  query: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default PersonFilter;
