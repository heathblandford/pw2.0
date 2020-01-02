import Link from 'next/link';

const Header = () => (
  <div className="headerMain">
    <Link href="/">
      <a className="main-link">Home</a>
    </Link>
    <Link href="/projects">
      <a className="main-link">Projects</a>
    </Link>
    <Link href="/resume">
      <a className="main-link">Résumé</a>
    </Link>
    <Link href="/contact">
      <a className="main-link">Contact Me</a>
    </Link>
    <style global jsx>{`
      .headerMain{
        text-align: center;
        margin-bottom: 50px;
      }
      .main-link {
        margin-right: 15px;
      }

      .main-link:link, .main-link:visited {
        border-bottom: 2px solid transparent;
        color: black;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
      
      .main-link:hover, .main-link:active {
        border-bottom: 2px solid black;
      }
    `}</style>
  </div>
);

export default Header;
