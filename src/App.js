
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




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/viewAllSpeciality" element={<ViewAllSpeciality />} />
      <Route path="/table/:tableId/menu/:menuId" element={<MenuApp />} />
      <Route path="/createSpeciality" element={<CreateSpeciality />} />
      <Route path="/viewAllMenuItems" element={<ViewAllMenuItems />} />
      <Route path="/createMenuItem" element={<CreateMenuItem />} />
      <Route path="/tableSelection" element={<TableSelection />} />
      <Route path="/barcorderview" element={<BarOrderView />} />
      <Route path="/kitchenorderview" element={<KitchenOrderView />} />
      <Route path="/" element={<DefaultComponent />} />
    </Routes>
  </Router>
  );
}

function DefaultComponent() {
  

  return <div>Please select a route
  <nav>
  <ul>
    <li>
      <a href="/menu">Menu</a>
    </li>
    <li>
      <a href="/viewAllSpeciality">View All Specialities</a>
    </li>
    <li>
      <a href="/viewAllMenuItems">View All MenuItems</a>
    </li>
    <li>
      <a href="/tableSelection">View All Tables</a>
    </li>
    <li>
      <a href="/barcorderview">View barCommands</a>
    </li>
    <li>
      <a href="/kitchenorderview">View KitchenOrders</a>
    </li>
    
    
  </ul>
</nav>
</div>
}

export default App;