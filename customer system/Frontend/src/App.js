import React from 'react';
import Footer from './Components/customer_footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import HomePage from './Pages/Guest/home_page';


import RegisterForm from './Pages/User/register';
import LoginForm from './Pages/User/login';
import ForgotPasswordForm from './Pages/User/forgot-password';
import ResetPasswordPage from './Pages/User/reset-password';

import ViewUsers from './Pages/User/view_users';
import UserReportPage from './Pages/User/user_report';
import UpdateUser from './Pages/User/update-user';

import ManageProfile from './Pages/User/manage_profile';




function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/home-page" element={<HomePage />} />
          
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />     
          
          <Route path="/view-users" element={<ViewUsers />} />             
          <Route path="/user-report" element={<UserReportPage />} />    
          <Route path="/update-user/:id" element={<UpdateUser />} />     
          <Route path="/manage-profile/:id" element={<ManageProfile />} />     
          
          


          

          

        </Routes>
        <Footer></Footer>
      </div>
  );
}

export default App;
