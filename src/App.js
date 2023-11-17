
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ViewAllSpeciality from './ViewAllSpeciality';
import MenuApp from './MenuApp';
import CreateSpeciality from './CreateSpeciality';
import ViewAllMenuItems from './ViewAllMenuItems';
import CreateMenuItem from './CreateMenuItem';
import TableSelection from './TableSelection';
import BarOrderView from './BarOrderView';
import KitchenOrderView from './KitchenOrderView';
import Menus from './Menus';
import CreateMenu from './CreateMenu';
import ViewAllTables from './ViewAllTables';
import CreateTable from './CreateTable'
import ViewAllOrders from './ViewAllOrders';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/viewAllSpeciality" element={<ViewAllSpeciality />} />
      <Route path="/menu" element={<Menus/>} />
      <Route path="/table/:tableId/menu/:menuId" element={<MenuApp />} />
      <Route path="/createSpeciality" element={<CreateSpeciality />} />
      <Route path="/viewAllMenuItems" element={<ViewAllMenuItems />} />
      <Route path="/viewAllTables" element={<ViewAllTables />} />
      <Route path="/viewAllOrders" element={<ViewAllOrders />} />
      <Route path="/createMenuItem" element={<CreateMenuItem />} />
      <Route path="/createMenu" element={<CreateMenu/>} />
      <Route path="/createTable" element={<CreateTable/>} />
      <Route path="/tableSelection" element={<TableSelection />} />
      <Route path="/barcorderview" element={<BarOrderView />} />
      <Route path="/kitchenorderview" element={<KitchenOrderView />} />
      <Route path="/" element={<DefaultComponent />} />
    </Routes>
  </Router>
  );
}

function DefaultComponent() {
  return (
    <div className="firstPage">
      <div className="content">
       <h2> Please select a route</h2> 
        <nav>
          <ul>
            <li>
              <a href="/menu" className="button-link">Menu</a>
            </li>
            <li>
              <a href="/viewAllSpeciality" className="button-link">View All Specialities</a>
            </li>
            <li>
              <a href="/viewAllMenuItems" className="button-link">View All MenuItems</a>
            </li>
            <li>
              <a href="/tableSelection" className="button-link">Select Table</a>
            </li>
            <li>
              <a href="/viewAllTables" className="button-link">View All Tables</a>
            </li>
            <li>
              <a href="/barcorderview" className="button-link">View Bar Orders</a>
            </li>
            <li>
              <a href="/kitchenorderview" className="button-link">View Kitchen Orders</a>
            </li>
            <li>
              <a href="/viewAllOrders" className="button-link">View All Orders</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default App;