import type { NextPage } from 'next';
import { FormEventHandler, useContext } from 'react';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Input from '../components/@shared/Input';
import useInput from '../hooks/useInput';
import { usePostLogin } from '../requestAPI';
import { validateId, validateInputs, validatePassword } from '../utilities/validator';
import { useRouter } from 'next/router';
import { UserNameContext } from '../provider/UserNameProvider';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { userName, setUserName } = useContext(UserNameContext);
  const loginId = useInput('', validateId);
  const loginPassword = useInput('', validatePassword);
  const { mutate: mutatePostLogin } = usePostLogin({
    onSuccess: ({ data }) => {
      const {
        accessToken,
        user: { ID, NAME },
      } = data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userId', ID);
      setUserName(NAME);
      router.push('/');
    },
  });

  const isValidLogin = validateInputs([loginId, loginPassword]);

  const login: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutatePostLogin({ id: loginId.value, password: loginPassword.value });
  };

  return (
    <>
      <Header />
      <Form onSubmit={login}>
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
