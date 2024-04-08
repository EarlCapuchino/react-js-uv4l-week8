
function Footer({ socialMedia }) {
    return (
      <footer className="appFooter">
        <div className="copyright">
          © 2024 FlightTracker. All rights reserved.
        </div>
        <div className="socialMedia">
          {socialMedia.map((media, index) => (
            <a key={index} href={media.url} target="_blank" rel="noopener noreferrer" className="socialMediaIcon">
              <img src={media.url} alt={media.soc} />
            </a>
          ))}
        </div>
      </footer>
    );
  }
  export default Footer;