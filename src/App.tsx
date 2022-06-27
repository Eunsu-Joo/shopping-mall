import {  useRoutes } from 'react-router-dom';
import {routes} from "./routes";
import {QueryClientProvider} from "react-query";
import {getClient} from "./queryClient";
import {ReactQueryDevtools} from "react-query/devtools";

const App =() => {
  const element= useRoutes(routes);
  return <QueryClientProvider client={getClient()}>
    <ReactQueryDevtools initialIsOpen={false} />
    { element}
  </QueryClientProvider>
}

export default App;