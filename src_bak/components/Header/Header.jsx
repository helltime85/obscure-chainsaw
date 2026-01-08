import logoImg from '../../logo192.png';

function Header() {
  return (
    <header className="App-header">
      <img src={logoImg} className="App-logo" alt="logo" />
      <p>
        GitHub Codespace <span className="heart">♥️</span> React
      </p>
    </header>
  )
}

export default Header;