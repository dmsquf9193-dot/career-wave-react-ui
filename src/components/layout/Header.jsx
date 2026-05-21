import { ChevronDown, Menu, Search, Sparkles } from 'lucide-react';
import './Header.css';

const primaryMenu = [
  '채용정보',
  '취업축하금',
  '신입·인턴',
  '커리어스토어',
  '기업·연봉',
  '커뮤니티',
  '취업 자료',
];

function Header() {
  return (
    <header className="cw-header">
      <div className="cw-header__top">
        <a className="cw-header__brand" href="/">
          Career Wave
        </a>

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
          <a href="/auth/login">로그인</a>
          <a href="/auth/register">회원가입</a>
          <a className="cw-header__company" href="/company/profile">
            기업서비스
            <ChevronDown size={16} />
          </a>
        </nav>
      </div>

      <div className="cw-header__bottom">
        <button className="cw-header__menu" type="button" aria-label="전체 메뉴">
          <Menu size={25} />
        </button>

        <nav className="cw-header__nav" aria-label="주요 메뉴">
          {primaryMenu.map((item, index) => (
            <a className={index === 1 ? 'is-featured' : ''} href="#" key={item}>
              {index === 1 && <span>취업 시 커피쿠폰</span>}
              {item}
            </a>
          ))}
        </nav>

        <a className="cw-header__post" href="/community">
          조언이 필요할 때 문세 포스터디
          <Sparkles size={18} />
        </a>
      </div>
    </header>
  );
}

export default Header;
