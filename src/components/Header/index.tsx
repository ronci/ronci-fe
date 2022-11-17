import Link from 'next/link';
import styled from 'styled-components';
import { FlexBox } from '../@shared/FlexBox';
import useLoginInfo from './useLoginInfo';

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
  const { userName, logout } = useLoginInfo();

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
