/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
  display: flex;
    justify-content: center;

`;

const Label = styled.label`
`;

Label.Text = styled.span`
 color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  margin-left: 10px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  

  transition: .1s ease-in-out;
  `;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 20px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    &:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
    }
  `}
`;

function Form({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = type === isTypeTextarea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
            suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>
            ))
          } 
            </datalist>
          )
        }
      </Label>
    </FormWrapper>
  );
}

Form.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

Form.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default Form;