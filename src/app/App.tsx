import Header from "@/features/header/Header.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.ts";

const App = () => {
  const location = useLocation()

  const isAuthPAge =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER
  return (
    <div>
      {
        !isAuthPAge && <Header/>
      }
      <Outlet/>
    </div>
  );
};

export default App;
