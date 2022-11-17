import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FlexBox } from './@shared/FlexBox';

const EmptyContents = ({ children }: PropsWithChildren<{}>) => (
  <ErrorPage justifyContent='center' alignItems='center'>
    {children}
  </ErrorPage>
);

export default EmptyContents;

const ErrorPage = styled(FlexBox)`
  flex-grow: 1;
  height: 100%;
`;
