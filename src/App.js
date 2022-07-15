import './App.css';
import Navbar from './MyComponents/Navbar';
import Homescreen from './Screens/Homescreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Screens/Cart';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { useSelector } from 'react-redux';
import MyOrders from './Screens/MyOrders';
import Adminscreen from './MyComponents/Admin/Adminscreen';
import UserList from './MyComponents/Admin/UserList';
import PizzaList from './MyComponents/Admin/PizzaList';
import AddPizza from './MyComponents/Admin/AddPizza';
import OrderList from './MyComponents/Admin/OrderList';
import EditPizza from './MyComponents/Admin/EditPizza';


function App() {

  const mystate = useSelector(state => state.userloginReducer)
  const { loggedIn } = mystate

  return (
    <div>

      <Router>
        <Navbar loggedIn={loggedIn} />
        <Routes>

          <Route path="/" exact element={<Homescreen />} />
          <Route path="/Cart" exact element={<Cart />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/MyOrders" exact element={<MyOrders />} />

          <Route path="Admin/*" exact element={<Adminscreen />} >
            <Route path=""  exact element={<UserList />} />
            <Route path="ManageUsers" exact element={<UserList />} />
            <Route path="ManagePizzas" exact element={<PizzaList />} />
            <Route path="NewPizza" exact element={<AddPizza />} />
            <Route path="ManageOrders" exact element={<OrderList />} />
            <Route path="EditPizza/:id" exact element={<EditPizza />} />

          </Route>

          {/* <Route path="/ManageUsers" exact element={<UserList />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
