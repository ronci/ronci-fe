import { useContext, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { UserNameContext } from '../provider/UserNameProvider';
import { FlexBox } from './@shared/FlexBox';
import { useGetUserInfo } from '../requestAPI';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Title role='button'>HAUS</Title>
      </Link>
      <LoginInfo />
    </HeaderWrapper>
  );
};

export default Header;

const LoginInfo = () => {
  const { userName, setUserName } = useContext(UserNameContext);
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const { refetch } = useGetUserInfo(
    { userId: String(userId) },
    {
      enabled: !userId,
      onSuccess: ({ data }) => {
        const { NAME } = data.data.user;
        setUserName(NAME);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [userId]);

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setUserName('');
  };

  if (userName) {
    return (
      <FlexBox flexDirection='column' alignItems='flex-end'>
        <NameText>{userName}</NameText>
        <button onClick={logout}>logout</button>
      </FlexBox>
    );
  }

  return (
    <Link href='/login'>
      <button>login</button>
    </Link>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const NameText = styled.p`
  font-size: 18px;
`;
