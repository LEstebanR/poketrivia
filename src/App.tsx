import React, { createContext } from 'react';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Root from './utils/Root';
import { getPokemons } from './utils/ReactQuery';

const queryClient = new QueryClient();


const App = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      <Root/>
    </QueryClientProvider>
  );
};

export default App;
