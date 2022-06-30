import {  useRoutes } from 'react-router-dom';
import {routes} from "./routes";
import {QueryClientProvider} from "react-query";
import {getClient} from "./queryClient";
import {ReactQueryDevtools} from "react-query/devtools";
import Gnb from "./components/Gnb";
import Layout from "./components/Layout";

const App =() => {
  const element= useRoutes(routes);
  return <Layout> <QueryClientProvider client={getClient()}>

    <ReactQueryDevtools initialIsOpen={false} />
    <Gnb />
    { element}
  </QueryClientProvider>
  </Layout>
}

export default App;