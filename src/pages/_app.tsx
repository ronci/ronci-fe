import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

import setupMSW from '../api/setup';
import GlobalStyle from '../styles/GlobalStyle';
import { UserNameProvider } from '../provider/UserNameProvider';

setupMSW();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserNameProvider>
        <GlobalStyle />
        <Background />
        <Content>
          <Component {...pageProps} />
        </Content>
      </UserNameProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

const Content = styled.div`
  width: 420px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;
