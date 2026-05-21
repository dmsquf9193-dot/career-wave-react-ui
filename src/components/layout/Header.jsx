import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, Sparkles } from 'lucide-react';
import { serviceMenus } from '../../constants/serviceMenus';
import './Header.css';

function Header() {
  const { pathname } = useLocation();

  const isMenuActive = (item) =>
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`) ||
    item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));

  return (
    <header className="cw-header">
      <div className="cw-header__top">
        <Link className="cw-header__brand" to="/">
          Career Wave
        </Link>

        <div className="cw-header__search-group">
          <form className="cw-header__search" role="search">
            <Search size={26} />
            <input aria-label="검색" placeholder="커리어의 시작, 커리어 웨이브" />
          </form>
          <button className="cw-header__ai" type="button">
            <Sparkles size={17} />
            검색
          </button>
        </div>

        <nav className="cw-header__account" aria-label="계정 메뉴">
          <NavLink to="/auth/login">로그인</NavLink>
          <NavLink to="/auth/register">회원가입</NavLink>
        </nav>
      </div>

      <div className="cw-header__bottom">
        <button className="cw-header__menu" type="button" aria-label="전체 메뉴">
          <Menu size={25} />
        </button>

        <nav className="cw-header__nav" aria-label="주요 메뉴">
          {serviceMenus.map((item) => (
            <div className={`cw-header__nav-item ${isMenuActive(item) ? 'is-active' : ''}`} key={item.label}>
              <NavLink className="cw-header__nav-link" to={item.href}>
                {item.label}
              </NavLink>
              {item.children && (
                <div className="cw-header__submenu" role="menu">
                  {item.children.map((child) => (
                    <NavLink
                      className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                      end
                      key={child.label}
                      role="menuitem"
                      to={child.href}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
