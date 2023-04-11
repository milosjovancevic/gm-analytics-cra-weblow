import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import { useLocation } from "react-router-dom";

export const FacebookPixel = () => {
  const { pathname } = useLocation();
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init("171416229175563", undefined, options);

  useEffect(() => {
    ReactPixel.pageView();
  }, [pathname]);

  // return null;
};
// const advancedMatching = { em: "some@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
// ReactPixel.pageView(); // For tracking page view
// ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
// ReactPixel.trackSingle("PixelId", event, data); // For tracking default events.
// ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
// ReactPixel.trackSingleCustom("PixelId", event, data); // For tracking custom events.
