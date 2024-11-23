import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <Switch>
        <Route path="/viewAllSpeciality" component={ViewAllSpeciality} />
        <Route path="/table/:tableId/menu/:menuId" component={MenuApp} />
        <Route path="/createSpeciality" component={CreateSpeciality} />
        <Route path="/viewAllMenuItems" component={ViewAllMenuItems} />
        <Route path="/createMenuItem" component={CreateMenuItem} />
        <Route path="/tableSelection" component={TableSelection} />
        <Route path="/barcorderview" component={BarOrderView} />
        <Route path="/kitchenorderview" component={KitchenOrderView} />
        
        <Route path="/" component={DefaultComponent} />
      </Switch>
    </Router>
  );
}

function DefaultComponent() {
    {/* Navigation links with href */}
  

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