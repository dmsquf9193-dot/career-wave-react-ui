import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="cw-app-layout">
      <Sidebar />

      <main className="cw-app-main">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
