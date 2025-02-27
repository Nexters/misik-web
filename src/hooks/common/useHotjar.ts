/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const useHotjar = () => {
  useEffect(() => {
    const hotjarId = import.meta.env.VITE_HOTJAR_ID;

    if (import.meta.env.PROD && hotjarId) {
      (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
        (h.hj as any) =
          h.hj ||
          function () {
            // eslint-disable-next-line prefer-rest-params
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: parseInt(hotjarId, 10), hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
    }
  }, []);
};

export default useHotjar;
