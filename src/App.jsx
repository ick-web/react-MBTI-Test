import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";
import Layout from "./shared/Layout";
import ProtectedLayout from "./shared/ProtectedLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<ProtectedLayout />}>
                <Route path="profile" element={<Profile />} />
                <Route path="test" element={<TestPage />} />
                <Route path="result" element={<TestResultPage />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
