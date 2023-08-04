import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {Provider} from "react-redux"
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
    </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: '/watch',
        element: <WatchPage/>
      },

    ]
  }
  
])

// header
// body
   //sidebar
      // MenuItems
  // Maincontainer
     // buttonList
     // videocontainer
        // videoCard


export default App;
