import styled from "@emotion/styled";
import { borderRadius } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import { flexbox, height, Stack, style } from "@mui/system";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import React, { useState } from "react";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

// import { orange } from '@mui/material/colors';
// const StyledSearch = styled(Search) ({
//   "&::placeholder" :  {
//     color: 'red',
//   }
// })

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 16px",
  borderRadius: "20px",
  width: " 40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  // color: theme.status.danger,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function NavBar({color}) {
  const [open,setOpen] = useState(false);
  return (
    <Box>
      <AppBar position="fixed">
        <StyledToolBar >
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
            >
            {" "}
            Rarible Clone
          </Typography>
          <AdUnitsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search sx={{backgroundColor:'red'}} >
            {/* {console.log("c", color)} */}
            {" "}
            <InputBase placeholder="Search..." > Search</InputBase>{" "}
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 30, height: 30 }} src="1.jpg" onClick={(e)=>{setOpen(true)}}></Avatar>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              // anchorEl={anchorEl}
              open={open}
              onClose={e =>(setOpen(false))}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              >
              <MenuItem >Profile</MenuItem>
              <MenuItem >My account</MenuItem>
              <MenuItem >Logout</MenuItem>
            </Menu>
          </Icons>
          <UserBox>
            {" "}
            <Avatar sx={{ width: 30, height: 30 }} src="1.jpg" onClick={(e)=>{setOpen(true)}}></Avatar>
            <Typography variant="span">Karan</Typography>
          </UserBox>
        </StyledToolBar>
      </AppBar>
  
    </Box>
  );
}
