import {Box, Stack, createTheme} from "@mui/material"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";


function App() {

  const [mode,setmode]=useState("light");

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setmode={setmode} mode={mode}/>
      <Feed />
      <Rightbar />
      </Stack>
      <AddPost />
    </Box>
    </ThemeProvider>
  );
}

export default App;
