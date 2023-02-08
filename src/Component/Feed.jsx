import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import Share from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/Favorite';
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import Post from "./Post";

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
}
