import { useEffect } from "react";
// import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";

// TODO IN PROGRESS
// STILL THINKING SHOULD WE USE `react-gtm-module` PACKAGE
export const GoogleTagManager = () => {
  const { pathname, search } = useLocation();
  console.log("pathname + search", pathname + search);

  const tagManagerArgs = {
    gtmId: "GTM-PGNNSKH",
  };

  // TagManager.initialize(tagManagerArgs);
  useEffect(() => {}, [[pathname]]);
};
