import './Header.css';

function Header() {
  return (
    <header className="cw-header">
      <div className="cw-header__left">Career Wave</div>
      <div className="cw-header__right">
        <button className="cw-header__btn">알림</button>
        <button className="cw-header__btn">로그인</button>
      </div>
    </header>
  );
}

export default Header;
