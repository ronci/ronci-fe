import { ChangeEventHandler, FocusEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { ValidatorReturn } from '../utilities/validator';

type InputProps = {
  labelFor: string;
  labelName: string;
  inputType: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLElement>;
  validatedInfo?: ValidatorReturn;
};

type CheckIsValidProps = Partial<Pick<ValidatorReturn, 'isValidated'>>;

const Input = ({ labelFor, labelName, inputType, onChange, onBlur, validatedInfo }: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={labelFor}>{labelName}</Label>
      <CustomInput
        type={inputType}
        id={labelFor}
        onChange={onChange}
        onBlur={onBlur}
        isValidated={validatedInfo?.isValidated}
      />
      <ValidateMessage isValidated={validatedInfo?.isValidated}>
        {validatedInfo?.message}
      </ValidateMessage>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

const CustomInput = styled.input<CheckIsValidProps>`
  ${({ isValidated }) => css`
    padding: 16px;
    border-radius: 12px;
    background-color: #f7f7fa;

    ${isValidated === false &&
    css`
      background-color: #fdedee;
    `}
  `}
`;

const ValidateMessage = styled.p<CheckIsValidProps>`
  ${({ isValidated }) => css`
    display: ${isValidated ? 'none' : 'block'};
    font-weight: 400;
    font-size: 13px;
    color: #ed4e5c;
  `}
`;
