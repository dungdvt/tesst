import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LayoutWebsite from "./components/layouts/LayoutWebsite";

import TripList from "./TripList";
import TripsList from "./pages/admin/trips";
import AddTrip from "./pages/admin/trips/add";
import AdminLayout from "./components/layouts/AdminLayout";
import UpdateTrip from "./pages/admin/trips/update";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Home />} />
          <Route path="trips" element={<TripList />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<TripsList />} />
          <Route path="trips/add" element={<AddTrip />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<TripsList />} />
          <Route path="trips/update/:id" element={<UpdateTrip />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
