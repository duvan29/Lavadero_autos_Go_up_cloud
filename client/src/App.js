import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import FormPatente from "./components/FormPatente/FormPatente";
import Services from "./views/Services/Services";
import FormVehicle from "./components/FormVehicle/FormVehicle";
import Billing from "./components/CardServices/Billing/Billing";
import Edit from "./components/CardServices/Edit/Edit";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Workers from "./views/Workers/Workers";
import BillingList from "./views/BillingList/BillingList";
import Withdrawals from "./views/Withdrawals/Withdrawals";
import FormService from "./components/FormService/FormService";
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
      {!(location.pathname === "/") && <Nav />}
      <Routes location={background || location}>
        <Route path="/createVehicle" element={<FormPatente />} />
        <Route path="/formVehicle" element={<FormVehicle />} />
        <Route path="/formService" element={<FormService />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/billinglist" element={<BillingList />} />
        <Route path="/withdrawals" element={<Withdrawals />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/billing" element={<Billing />} />
          <Route path="/services/edit" element={<Edit />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/services/billing" element={<Billing />} />
          <Route path="/services/edit" element={<Edit />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
