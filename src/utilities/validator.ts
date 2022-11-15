import useInput from '../hooks/useInput';

type IsValidFormatFunction = (value: string) => boolean;
export type ValidatorReturn = {
  isValidated: boolean;
  message: string;
};
export type ValidatorFunction = (value: string) => ValidatorReturn;

const isValidIdFormat: IsValidFormatFunction = (id) => {
  const idRule = /^[A-Za-z0-9]{5,30}$/;

  return idRule.test(id);
};

const isValidPasswordFormat: IsValidFormatFunction = (password) => {
  const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9]{8,30}$/;

  return passwordRule.test(password);
};

export const validateId: ValidatorFunction = (id) => {
  if (!isValidIdFormat(id)) {
    return { isValidated: false, message: '올바른 아이디 형식으로 입력해주세요.' };
  }

  return { isValidated: true, message: '' };
};

export const validatePassword: ValidatorFunction = (password) => {
  if (!isValidPasswordFormat(password)) {
    return { isValidated: false, message: '올바른 비밀번호 형식으로 입력해주세요.' };
  }

  return { isValidated: true, message: '' };
};

type ValidateInputsFunction = (array: ReturnType<typeof useInput>[]) => boolean;

export const validateInputs: ValidateInputsFunction = (inputs) => {
  return inputs.every((input) => input.validatedInfo.isValidated && input.value !== '');
};
