import { Outlet } from "react-router-dom";

import { useChannelTalk } from "@/hooks/common/useChannelTalk";
import useHotjar from "@/hooks/common/useHotjar";

const App = () => {
  useHotjar();
  useChannelTalk();

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
