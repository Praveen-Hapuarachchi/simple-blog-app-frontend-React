// WelcomePage.js
import React from 'react';
import Button from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus, List, LogOut, Sparkles } from 'lucide-react';

const WelcomePage = () => {
  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleCreatePost = () => {
    console.log('Navigating to create post...');
  };

  const handleViewPosts = () => {
    console.log('Navigating to view posts...');
  };

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
            className="w-full h-14 text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white"
            onClick={handleCreatePost}
          >
            <Plus className="h-6 w-6 mr-2" />
            Create New Post
          </Button>
          
          <Button 
            variant="success"
            className="w-full h-14 text-lg bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white"
            onClick={handleViewPosts}
          >
            <List className="h-6 w-6 mr-2" />
            View All Posts
          </Button>
          
          <Button 
            variant="danger"
            className="w-full h-14 text-lg bg-gradient-to-r from-red-400 to-yellow-500 hover:from-red-500 hover:to-yellow-600 text-white"
            onClick={handleLogout}
          >
            <LogOut className="h-6 w-6 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;