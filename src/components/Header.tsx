import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Title role='button'>HAUS</Title>
      </Link>
      <Link href='/login'>
        <button>login</button>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;
