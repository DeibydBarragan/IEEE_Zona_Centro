
import './Styles/app.sass'; 

import routes from './Helpers/routes'

import LandingPage from './Pages/LandingPage';
import Chapter from './Pages/Chapter';
import ChapterDetails from './Pages/ChapterDetails';
import ZonaCentro from './Pages/ZonaCentro';
import Login from './Pages/Login';
import NotFound404 from './Pages/NotFound404';

import { Routes, Route } from 'react-router-dom';
import ChangePassword from './Pages/ChangePassword';
import ValidateUser from './Pages/ValidateUser';
import Admin from './Pages/Admin';
import AdminSubPages from './Pages/AdminSubPages';
import AdminUser from './Pages/AdminUser';
import AdminMember from './Pages/AdminMember';
import AdminChapter from './Pages/AdminChapter';
import AdminMessage from './Pages/AdminMessage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.identidy} element={<ValidateUser />} />
        <Route path={routes.changePassword} element={<ChangePassword />} />
        <Route path={routes.chapter} element={<Chapter />} />
        <Route path={routes.zonaCentro} element={<ZonaCentro />} />
        <Route
          exact
          strict
          sensitive={false}
          path={routes.chapterId}
          element={<ChapterDetails />}
        />
        <Route path={routes.admin} element={<Admin />} />
        {/* <Route path={routes.adminId} element={<AdminSubPages />} /> */}
        <Route path={routes.adminUser} element={<AdminUser />} />
        <Route path={routes.adminMember} element={<AdminMember />} />
        <Route path={routes.AdminChapter} element={<AdminChapter />} />
        <Route path={routes.AdminMessage} element={<AdminMessage />} />

        
        <Route path={routes.notFound} element={<NotFound404 />} />
      </Routes>
    </>
  );
}

