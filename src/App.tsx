import { Button } from "@hellofresh/scm-design-system";
import React from "react";

function App() {
  return (
    <div>
      <Button
        color="primary"
        label="Button"
        onClick={function noRefCheck() {}}
        onFocusVisible={function noRefCheck() {}}
        variant="primary"
      />
    </div>
  );
}

export default App;
