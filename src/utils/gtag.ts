export const gTagLogEvent = (eventLabel: string) => {
  window.gtag("event", "click", {
    event_category: "button",
    event_label: eventLabel,
  });
};
