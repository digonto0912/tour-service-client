import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MyDeals from './components/MyDeals/MyDeals';
import Deals from './components/Deals/Deals';
import Partners from './components/Partners/Partners';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import BookDeal from './components/BookDeal/BookDeal';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import AddDeal from './components/AddDeal/AddDeal';
import ManagesDeal from './components/ManagesDeal/ManagesDeal';
import MyOrder from './components/MyOrder/MyOrder';
import UserRegistrationForm from './components/UserRegistrationForm/UserRegistrationForm';
import Footer from './components/Footer';
import Footers from './components/Footers/Footers';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>

          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          
          <Route path= '/myDeals'>
            <MyDeals></MyDeals>
          </Route>
          <Route path="/partner">
            <Partners></Partners>

          </Route>
          <Route path='/deals'>
            <Deals></Deals>
          </Route>
            <PrivateRoute path='/admin'>
            <Admin></Admin>
            </PrivateRoute>
            <Route path= '/managesDeal'>
              <ManagesDeal></ManagesDeal>
            </Route>
            <Route path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/addDeal'>
              <AddDeal></AddDeal>

          </Route>
            <Route path='/orderDeal/:id'>
              <UserRegistrationForm></UserRegistrationForm>

          </Route>
          <Route path ='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/bookDeal/:id'>
            <BookDeal></BookDeal>
          </PrivateRoute>

          
          <Route path ='*'>
              <NotFound></NotFound>
          </Route>
         

        </Switch>
      </BrowserRouter>
      <Footers></Footers>
      </AuthProvider>
      
    </div>
  );
}

export default App;
