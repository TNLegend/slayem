import React from "react";
import "./App.css";
import { Box } from "@mui/material";

/* Import components */
import Left from "./components/Left";
import Right from "./components/Right";

const App = () => {
  return (
    <Box className="app">
      <Left />
      <Right />
    </Box>
  );
};

export default App;
