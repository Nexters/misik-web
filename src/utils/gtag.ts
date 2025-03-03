export const gTagLogEvent = (eventLabel: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click", {
      event_category: "button",
      event_label: eventLabel,
    });
  } else {
    console.warn("Google Analytics is not initialized yet.");
  }
};
