import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AppBar,
  Button,
  Skeleton,
  Typography,
} from "@hellofresh/scm-design-system";
// import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div>
      <Skeleton variant="circle" width={40} height={40} />

      <div style={{ width: "400px" }}>
        <Alert
          message="Package successfully added!!!"
          onClose={function noRefCheck() {}}
          severity="error"
        />
      </div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion Test</Typography>
        </AccordionSummary>
        <AccordionDetails>Information</AccordionDetails>
      </Accordion>
      <Button
        color="primary"
        label="Button"
        onClick={function noRefCheck() {}}
        onFocusVisible={function noRefCheck() {}}
        variant="primary"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
