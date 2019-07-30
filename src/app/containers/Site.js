import React from "react";

export const Site = ({ content }) => {
  return (
    <div>
      <code>{JSON.stringify(content)}</code>
    </div>
  );
};
