import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";

export const GoogleTagManager = () => {
  const { pathname, search } = useLocation();
  console.log("pathname + search", pathname + search);

  const tagManagerArgs = {
    gtmId: "GTM-PGNNSKH",
  };

  TagManager.initialize(tagManagerArgs);
  useEffect(() => {}, [[pathname]]);
};
