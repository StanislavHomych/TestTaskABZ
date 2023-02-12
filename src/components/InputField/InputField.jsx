import './InputField.scss';
import { useDispatch } from 'react-redux';
import {
  validateEmailField,
  validateNameField,
  validatePhoneField,
} from '../../redux/slices/usersSlice';
import { useState } from 'react';

const InputField = ({
  children,
  showDefaultHint,
  setValue,
  inputValue,
  regExpression,
  typeOfInput,
  indentifier,
}) => {
  const dispatch = useDispatch();
  const [isValidForm, setIsValidForm] = useState(true);

  const handleChnge = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const isValid = formElement.checkValidity();
    setIsValidForm(isValid);

    dispatch(setValue(e.target.value));

    if (isValid) {
      switch (e.target.id) {
        case 'name':
          e.target.value && dispatch(validateNameField(true));
          break;
        case 'email':
          e.target.value && dispatch(validateEmailField(true));
          break;
        case 'phone':
          e.target.value && dispatch(validatePhoneField(true));
      }
    }
    if (!isValid) {
      switch (e.target.id) {
        case 'name':
          dispatch(validateNameField(false));
          break;
        case 'email':
          dispatch(validateEmailField(false));
          break;
        case 'phone':
          dispatch(validatePhoneField(false));
      }
    }
  };

  return (
    <div>
      <input
        className={isValidForm ? 'inputText' : 'inputText-invalid'}
        placeholder={children}
        type={typeOfInput}
        name='text'
        id={indentifier}
        value={inputValue}
        pattern={regExpression}
        onChange={(e) => {
          handleChnge(e);
        }}
      ></input>
      {isValidForm
        ? showDefaultHint && <p className='inputText-hint'>+38(XXX)XXX-XX-XX</p>
        : (showDefaultHint && <p className='inputText-hint_errorNum'>Wrong format</p>) || (
            <p className='inputText-hint_error'>Wrong format</p>
          )}
    </div>
  );
};

export default InputField;
