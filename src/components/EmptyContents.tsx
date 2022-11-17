import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FlexBox } from './@shared/FlexBox';
import Header from './Header';

const EmptyContents = ({ children }: PropsWithChildren<{}>) => (
  <Wrapper flexDirection='column'>
    <Header />
    <ErrorPage justifyContent='center' alignItems='center'>
      {children}
    </ErrorPage>
  </Wrapper>
);

export default EmptyContents;

const Wrapper = styled(FlexBox)`
  height: 100vh;
`;

const ErrorPage = styled(FlexBox)`
  flex-grow: 1;
  height: 100%;
`;
