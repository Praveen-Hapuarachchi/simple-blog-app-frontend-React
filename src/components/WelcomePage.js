// WelcomePage.js
import React, { useState } from 'react';
import Button from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus, List, LogOut, Sparkles } from 'lucide-react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const WelcomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleCreatePost = () => {
    console.log('Navigating to create post...');
  };

  const handleViewPosts = () => {
    console.log('Navigating to view posts...');
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-3 pb-6">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome Back! <Sparkles className="inline h-8 w-8 text-yellow-400" />
          </CardTitle>
          <p className="text-gray-600">
            You've successfully logged in to your account
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button 
            variant="primary"
            className="w-full h-14 text-lg"
            onClick={handleCreatePost}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Plus className="h-6 w-6 mr-2" />
            Create New Post
          </Button>
          
          <Button 
            variant="success"
            className="w-full h-14 text-lg"
            onClick={handleViewPosts}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <List className="h-6 w-6 mr-2" />
            View All Posts
          </Button>
          
          <Button 
            variant="danger"
            className="w-full h-14 text-lg"
            onClick={handleLogout}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <LogOut className="h-6 w-6 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Popover content</Typography>
      </Popover>
    </div>
  );
};

export default WelcomePage;