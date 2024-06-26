import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Projects from '../components/projects/AppGetProjects';
import AppProfile from '../components/user/AppProfile';
import AppContact from '../components/user/AppContact';
import ProjectDetail from '../components/projects/GetProjectDetail'; // Asegúrate de importar el componente

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/projects/get-all-projects" element={<Projects />} />
      <Route path="/user/profile/get-escnil994-info" element={<AppProfile />} />
      <Route path="/user/profile/contact" element={<AppContact />} />
      <Route path="/projects/get-project/:id/:nameproject" element={<ProjectDetail />} />
      <Route path="/" element={<Navigate to="/projects/get-all-projects" />} />
    </Routes>
  );
};

export default AppRouter;


