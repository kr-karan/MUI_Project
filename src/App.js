import "./App.css";
import { Box } from "@mui/material";
import SideBar from "./Component/Sidebar";
import RightBar from "./Component/RightBar";
import Feed from "./Component/Feed";
import NavBar from "./Component/NavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from "@mui/system";
import { useState } from "react";
import { light } from "@mui/material/styles/createPalette";


function App() {
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode : mode,
      },    // if you also want to change the color of the input, this is the prop you'd use
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color = {"text.primary"}>
      <NavBar color={mode}/>
      <Stack direction='row' spacing={2} justifyContent='space-between'sx={{paddingTop:'3rem'}}>
        <SideBar mode={mode} setMode={setMode} />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
