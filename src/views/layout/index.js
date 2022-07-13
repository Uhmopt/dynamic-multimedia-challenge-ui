import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Container className="pt-4">
        <Outlet />
      </Container>
    </div>
  );
}
