
function Footer() {
  return ( 
    <>
      {/* site__footer */}
      <footer className="site__footer">
        <div className="site-footer">
          <div className="container">
            <div className="site-footer__widgets">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="site-footer__widget footer-contacts">
                    <h5 className="footer-contacts__title">Contact Us</h5>
                    <div className="footer-contacts__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.
                    </div>
                    <ul className="footer-contacts__contacts">
                      <li><i className="footer-contacts__icon fas fa-globe-americas" /> 715 Fake Street, New York 10021 USA</li>
                      <li><i className="footer-contacts__icon far fa-envelope" /> stroyka@example.com</li>
                      <li><i className="footer-contacts__icon fas fa-mobile-alt" /> (800) 060-0730, (800) 060-0730</li>
                      <li><i className="footer-contacts__icon far fa-clock" /> Mon-Sat 10:00pm - 7:00pm</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="site-footer__widget footer-links">
                    <h5 className="footer-links__title">Information</h5>
                    <ul className="footer-links__list">
                      <li className="footer-links__item"><a href className="footer-links__link">About Us</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Delivery Information</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Privacy Policy</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Brands</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Contact Us</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Returns</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Site Map</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="site-footer__widget footer-links">
                    <h5 className="footer-links__title">My Account</h5>
                    <ul className="footer-links__list">
                      <li className="footer-links__item"><a href className="footer-links__link">Store Location</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Order History</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Wish List</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Newsletter</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Specials</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Gift Certificates</a></li>
                      <li className="footer-links__item"><a href className="footer-links__link">Affiliate</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="site-footer__widget footer-newsletter">
                    <h5 className="footer-newsletter__title">Newsletter</h5>
                    <div className="footer-newsletter__text">
                      Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.
                    </div>
                    <form action className="footer-newsletter__form">
                      <label className="sr-only" htmlFor="footer-newsletter-address">Email Address</label>
                      <input type="text" className="footer-newsletter__form-input form-control" id="footer-newsletter-address" placeholder="Email Address..." />
                      <button className="footer-newsletter__form-button btn btn-primary">Subscribe</button>
                    </form>
                    <div className="footer-newsletter__text footer-newsletter__text--social">
                      Follow us on social networks
                    </div>
                    {/* social-links */}
                    {/* <div className="social-links footer-newsletter__social-links social-links--shape--circle">
                      <ul className="social-links__list">
                        <li className="social-links__item">
                          <a className="social-links__link social-links__link--type--rss" href target="_blank">
                            <i className="fas fa-rss" />
                          </a>
                        </li>
                        <li className="social-links__item">
                          <a className="social-links__link social-links__link--type--youtube" href target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li className="social-links__item">
                          <a className="social-links__link social-links__link--type--facebook" href target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-links__item">
                          <a className="social-links__link social-links__link--type--twitter" href target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-links__item">
                          <a className="social-links__link social-links__link--type--instagram" href target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    {/* social-links / end */}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div> 
      </footer> 

      {/* site__footer end */}
    </>
  ); 
}

export default Footer;