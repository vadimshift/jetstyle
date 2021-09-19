import './Footer.css';

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {date} Jet Style - Test Task</p>
    </footer>
  );
}

export default Footer;
