import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  Divider,
  Skeleton,
  Table,
} from "@hellofresh/scm-design-system";
import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { Link, Route, Routes } from "react-router-dom";

const TableTemplate = () => {
  const headers = ["Image", "Title", "Date", "Info", "Actions"];

  return (
    <Table stickyHeader aria-label="sticky table" headers={headers}>
      <TableBody>
        <TableRow>
          <TableCell>
            {/* <MuiAvatar src="https://picsum.photos/500/300" /> */}
          </TableCell>
          <TableCell>Some Title</TableCell>
          <TableCell>01/08/2021</TableCell>
          <TableCell>Some info</TableCell>
          {/* <TableCell>
            <IconButton variant="secondary" color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton variant="secondary" color="negative">
              <SaveIcon />
            </IconButton>
          </TableCell> */}
        </TableRow>
        <TableRow>
          <TableCell>
            {/* <MuiAvatar src="https://picsum.photos/500/300" /> */}
          </TableCell>
          <TableCell>Some Title</TableCell>
          <TableCell>01/08/2021</TableCell>
          <TableCell>Some info</TableCell>
          <TableCell>
            {/* <IconButton variant="secondary" color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton variant="secondary" color="negative">
              <SaveIcon />
            </IconButton> */}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

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
      <TableTemplate />
      <Typography color="primary" variant="h1">
        Heading
      </Typography>

      <Card>
        {/* <TopContentExample /> */}
        <p>asdasd</p>
        <Divider />
        {/* <BottomContentExample /> */}
        <Button
          color="primary"
          fullWidth
          label="Select Card"
          variant="primary"
        />
      </Card>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
