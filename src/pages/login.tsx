import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import { validateId, validateInputs, validatePassword } from '../utilities/validator';

const LoginPage: NextPage = () => {
  const loginId = useInput('', validateId);
  const loginPassword = useInput('', validatePassword);
  const isValidLogin = validateInputs([loginId, loginPassword]);

  return (
    <>
      <Header />
      <Form>
        <Input labelFor='loginId' labelName='아이디' inputType='text' {...loginId} />
        <Input
          labelFor='loginPassword'
          labelName='비밀번호'
          inputType='password'
          {...loginPassword}
        />
        <LoginButton type='submit' disabled={!isValidLogin}>
          로그인
        </LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
  gap: 16px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
