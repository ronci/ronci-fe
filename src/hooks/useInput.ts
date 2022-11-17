import { useState, useEffect, useRef, ChangeEventHandler, FocusEventHandler } from 'react';
import { ValidatorFunction, ValidatorReturn } from '../utilities/validator';

const useInput = (initialValue: string, validator?: ValidatorFunction) => {
  const [value, setValue] = useState('');
  const [validatedInfo, setValidatedInfo] = useState<ValidatorReturn>({
    isValidated: true,
    message: '',
  });

  useEffect(() => {
    if (typeof validator === 'undefined' || value === undefined) {
      return;
    }

    if (validatedInfo.isValidated) {
      return;
    }

    const newValidatedInfo = validator(value);

    if (newValidatedInfo.isValidated) {
      setValidatedInfo(newValidatedInfo);
    }
  }, [value]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };

  const onBlur: FocusEventHandler<HTMLElement> = () => {
    if (typeof validator === 'undefined' || value === undefined) {
      return;
    }

    if (!validatedInfo.isValidated) {
      return;
    }

    const newValidatedInfo = validator(value);

    if (!newValidatedInfo.isValidated) {
      setValidatedInfo(newValidatedInfo);
    }
  };

  return { value, onChange, onBlur, validatedInfo };
};

export default useInput;
