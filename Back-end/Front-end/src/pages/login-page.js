import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Login from "@/components/Login";
import { Navbar } from 'react-bootstrap';

const LoginPage = () => {

  const [token, setToken] = useState(null);

  return (
    <Layout>
      <Login setToken={setToken} />;
    </Layout>
  ) 
    
}

export default LoginPage;
