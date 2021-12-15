import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@hellofresh/scm-design-system";

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

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion Test</Typography>
        </AccordionSummary>
        <AccordionDetails>Information</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
