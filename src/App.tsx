import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      <h1>PokeTrivia</h1>
    </QueryClientProvider>
  );
};

export default App;
