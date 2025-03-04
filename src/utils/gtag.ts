export const gTagLogEvent = (eventName: string, eventParams: object = {}) => {
  if (!window.gtag) return;
  window.gtag("event", eventName, eventParams);
};
