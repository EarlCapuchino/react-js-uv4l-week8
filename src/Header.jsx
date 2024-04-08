function Header({ navs }) {
    return (
      <header className="appHeader">
        {navs.map((navItem, index) => (
          <a key={index} href="/" className="navItem">{navItem}</a>
        ))}
      </header>
    );
  }
  export default Header;