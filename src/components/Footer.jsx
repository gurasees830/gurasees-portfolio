import { profile } from "../data.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
