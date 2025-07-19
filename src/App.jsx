import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import Browse from './components/Browse';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ]);
    
  return <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
}

export default App
