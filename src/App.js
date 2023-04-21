import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Countries from './components/countries/Countries';
import CountryDetails from './components/countries/Country/CountryDetails';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <Countries />,
  },
  {
    path: '/:name',
    element: <CountryDetails />,
  },
]);

//

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
