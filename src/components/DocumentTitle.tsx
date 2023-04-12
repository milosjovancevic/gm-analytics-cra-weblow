import React, { FC, useEffect } from "react";

type Props = {
  title?: string;
};

export const DocumentTitle: FC<Props> = ({ title }) => {
  const defaultTitle = "GM Store";

  useEffect(() => {
    document.title = title ? title : defaultTitle;
  });

  return null;
};
