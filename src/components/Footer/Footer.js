import './Footer.css';

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {date} JetStyle - тестовое задание</p>
    </footer>
  );
}

export default Footer;
