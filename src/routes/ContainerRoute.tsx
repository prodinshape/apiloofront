import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Root from "../containers/Root";
import Workspaces from "../containers/Workspaces";
import Workspace from "../containers/Workspaces/Workspace";
import ErrorPage from "./ErrorPage";

const ContainerRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Workspaces />} />
      <Route path="/workspaces" element={<Workspaces />} />
      <Route path="/workspaces/:idWorkspace" element={<Workspace />} />
    </Routes>
  </BrowserRouter>
);

export default ContainerRoute;
