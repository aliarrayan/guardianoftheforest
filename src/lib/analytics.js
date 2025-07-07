// src/lib/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-DN96W4908N"); // ganti dengan ID milikmu
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
