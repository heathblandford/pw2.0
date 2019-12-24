import Link from 'next/link';

const Header = () => (
  <div className="headerMain">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/contact">
      <a>Contact Me</a>
    </Link>
    <style global jsx>{`
      .headerMain{
        text-align: center;
        margin-bottom: 50px;
      }
      a {
        margin-right: 15px;
      }
    `}</style>
  </div>
);

export default Header;
