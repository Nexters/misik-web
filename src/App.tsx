import { Outlet } from "react-router-dom";

import useHotjar from "@/hooks/common/useHotjar";

const App = () => {
  useHotjar();

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
