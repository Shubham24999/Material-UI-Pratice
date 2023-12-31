import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const FriendsIcons=["https://material-ui.com/static/images/avatar/1.jpg",
                    "https://material-ui.com/static/images/avatar/2.jpg",
                    "https://material-ui.com/static/images/avatar/3.jpg",
                    "https://material-ui.com/static/images/avatar/6.jpg",
                    "https://material-ui.com/static/images/avatar/8.jpg",
                    "https://material-ui.com/static/images/avatar/7",
                    "https://material-ui.com/static/images/avatar/2.jpg",
                    "https://material-ui.com/static/images/avatar/8.jpg",
                    "https://material-ui.com/static/images/avatar/1.jpg"]

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{display:{
        xs:'none',
        sm:'block'
    }}}
    >
    <Box position="fixed">
      <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={6}>
         {
          FriendsIcons.map((elm,id)=> <Avatar key={elm} alt="Remy Sharp" src={elm} />)
         }
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
      <ImageList cols={2} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
    </Box>
    </Box>
  )
}

export default Rightbar