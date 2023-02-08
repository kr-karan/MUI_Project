import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import Share from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/Favorite';
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';

export default function Post() {
  return (
    <Box padding={3}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Karan Soni"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20% "
          image="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color
          :'red'}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share/>
          </IconButton>
          
        </CardActions>
       
      </Card>
    </Box>
  )
}
