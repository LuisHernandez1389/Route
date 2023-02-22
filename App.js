
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home  from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
