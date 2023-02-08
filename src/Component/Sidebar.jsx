import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AttachmentIcon from "@mui/icons-material/Attachment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Sidebar({mode,setMode}) {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalGroceryStoreIcon />
            </ListItemIcon>
            <ListItemText primary="Market" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AttachmentIcon />
            </ListItemIcon>
            <ListItemText primary="Attachment" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmark" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <SettingsSuggestIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DarkModeIcon />
              <Switch onChange={e=>setMode(mode == 'light'?'dark':'light')}/>
            </ListItemIcon>
            <ListItemText primary="Dark" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}
