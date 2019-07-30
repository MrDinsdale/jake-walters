import React from "react";
import { FetchContent } from "./utils/FetchContent";

import { Site } from "./Site";

export const App = () => (
  <FetchContent
    render={({ items }) => (
      <div>
        <Site content={items} />
      </div>
    )}
  />
);
