import React from "react";
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"
import * as GiIcons from "react-icons/gi"
import * as AiIcons from "react-icons/ai"

function Header() {
  return (
    <div className="site">
      {/* mobile site__header */}
      <header className="site__header d-lg-none">
        {/* data-sticky-mode - one of [pullToShow, alwaysOnTop] */}
        <div
          className="mobile-header mobile-header--sticky"
          data-sticky-mode="pullToShow"
        >
          <div className="mobile-header__panel">
            <div className="container">
              <div className="mobile-header__body">
                <button className="mobile-header__menu-button" style={{ color: "#fff", fontSize: "20px" }}>
                  <span> <GiIcons.GiHamburgerMenu /> </span>
                </button>
                <a className="mobile-header__logo" href="index.html">
                  {/* mobile-logo */}
                  <h4>AutoLand</h4>
                  {/* mobile-logo / end */}
                </a>
                <div className="search search--location--mobile-header mobile-header__search">
                  <div className="search__body">
                    <form className="search__form" action>
                      <input
                        className="search__input"
                        name="search"
                        placeholder="Search over 10,000 products"
                        aria-label="Site search"
                        type="text"
                        autoComplete="off"
                      />
                      <button
                        className="search__button search__button--type--submit"
                        type="submit"
                        style={{ color: "#21319e", fontSize: "20px" }}
                      >
                        <FaIcons.FaArrowRight />
                      </button>
                      <button
                        className="search__button search__button--type--close"
                        type="button"
                      >
                        <FaIcons.FaRegWindowClose />
                      </button>
                      <div className="search__border" />
                    </form>
                    <div className="search__suggestions suggestions suggestions--location--mobile-header" />
                  </div>
                </div>
                <div className="mobile-header__indicators">
                  <div className="indicator indicator--mobile-search indicator--mobile d-md-none">
                    <button className="indicator__button">
                      <span className="indicator__area">
                      <FaIcons.FaSearch />
                      </span>
                    </button>
                  </div>
                  <div className="indicator indicator--mobile d-sm-flex d-none">
                    <a href="wishlist.html" className="indicator__button">
                      <span className="indicator__area">
                        wishlist
                        <span className="indicator__value">0</span>
                      </span>
                    </a>
                  </div>
                  <div className="indicator indicator--mobile">
                    <a href="/cart" className="indicator__button">
                      <span className="indicator__area">
                        <FaIcons.FaCartPlus />
                        <span className="indicator__value">3</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* mobile site__header / end */}
      {/* desktop site__header */}
      <header className="site__header d-lg-block d-none">
        <div className="site-header">
          {/* .topbar */}
          <div className="site-header__topbar topbar">
            <div className="topbar__container container">
              <div className="topbar__row">
                {/* <div className="topbar__item topbar__item--link">
                <a className="topbar-link" href="about-us.html">About Us</a>
              <div className="topbar__item topbar__item--link">
                <a className="topbar-link" href="blog-classic.html">Blog</a>
              </div> */}
                <div className="topbar__spring" />

                <div className="topbar__item">
                  <div className="topbar-dropdown">
                    <button className="topbar-dropdown__btn" type="button">
                      Currency: <span className="topbar__item-value">NGN</span>
                      <svg width="7px" height="5px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5" />
                      </svg>
                    </button>
                    <div className="topbar-dropdown__body">
                      {/* .menu */}
                      <div className="menu menu--layout--topbar ">
                        <div className="menu__submenus-container" />
                        <ul className="menu__list">
                          <li className="menu__item">
                            {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                            <div className="menu__item-submenu-offset" />
                            <a className="menu__item-link" href>
                              $ US Dollar
                            </a>
                          </li>
                          <li className="menu__item">
                            {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                            <div className="menu__item-submenu-offset" />
                            <a className="menu__item-link" href>
                              N Nigerian Naira
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* .menu / end */}
                    </div>
                  </div>
                </div>
                <div className="topbar__item">
                  <div className="topbar-dropdown">
                    <button className="topbar-dropdown__btn" type="button">
                      Language: <span className="topbar__item-value">EN</span>
                      <svg width="7px" height="5px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5" />
                      </svg>
                    </button>
                    <div className="topbar-dropdown__body">
                      {/* .menu */}
                      <div className="menu menu--layout--topbar  menu--with-icons ">
                        <div className="menu__submenus-container" />
                        <ul className="menu__list">
                          <li className="menu__item">
                            {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                            <div className="menu__item-submenu-offset" />
                            <a className="menu__item-link" href>
                              <div className="menu__item-icon">
                                <img
                                  srcSet="images/languages/language-1.png 1x, images/languages/language-1@2x.png 2x"
                                  src=""
                                  alt
                                />
                              </div>
                              English
                            </a>
                          </li>
                          <li className="menu__item">
                            {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                            <div className="menu__item-submenu-offset" />
                            <a className="menu__item-link" href>
                              <div className="menu__item-icon">
                                <img
                                  srcSet="images/languages/language-2.png 1x, images/languages/language-2@2x.png 2x"
                                  src="images/languages/language-2.png"
                                  alt
                                />
                              </div>
                              French
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* .menu / end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .topbar / end */}
          <div className="site-header__nav-panel">
            {/* data-sticky-mode - one of [pullToShow, alwaysOnTop] */}
            <div
              className="nav-panel nav-panel--sticky"
              data-sticky-mode="pullToShow"
            >
              <div className="nav-panel__container container">
                <div className="nav-panel__row">
                  <div className="nav-panel__logo">
                    <a href="/">
                      {/* logo */}
                      <h4 style={{ color: "#fff" }}> AutoLand </h4>
                      {/* logo / end */}
                    </a>
                  </div>
                  {/* .nav-links */}
                  <div className="nav-panel__nav-links nav-links">
                    <ul className="nav-links__list">
                      <li className="nav-links__item  nav-links__item--has-submenu ">
                        <a className="nav-links__item-link" href="/">
                          <div className="nav-links__item-body">
                            Home
                            <svg
                              className="nav-links__item-arrow"
                              width="9px"
                              height="6px"
                            >
                              <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6" />
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li className="nav-links__item  nav-links__item--has-submenu ">
                        <a className="nav-links__item-link" href>
                          <div className="nav-links__item-body">
                            Categories
                            <svg
                              className="nav-links__item-arrow"
                              width="9px"
                              height="6px"
                            >
                              <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6" />
                            </svg>
                          </div>
                        </a>
                        <div className="nav-links__submenu nav-links__submenu--type--megamenu nav-links__submenu--size--nl">
                          {/* .megamenu */}
                          <div className="megamenu ">
                            <div className="megamenu__body">
                              <div className="row">
                                <div className="col-6">
                                  <ul className="megamenu__links megamenu__links--level--0">
                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                      <a href>Power Tools</a>
                                      <ul className="megamenu__links megamenu__links--level--1">
                                        <li className="megamenu__item">
                                          <a href>Engravers</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Wrenches</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Wall Chaser</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Pneumatic Tools</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                      <a href>Machine Tools</a>
                                      <ul className="megamenu__links megamenu__links--level--1">
                                        <li className="megamenu__item">
                                          <a href>Thread Cutting</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Chip Blowers</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Sharpening Machines</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Pipe Cutters</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Slotting machines</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Lathes</a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <ul className="megamenu__links megamenu__links--level--0">
                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                      <a href>Hand Tools</a>
                                      <ul className="megamenu__links megamenu__links--level--1">
                                        <li className="megamenu__item">
                                          <a href>Screwdrivers</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Handsaws</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Knives</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Axes</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Multitools</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Paint Tools</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                      <a href>Garden Equipment</a>
                                      <ul className="megamenu__links megamenu__links--level--1">
                                        <li className="megamenu__item">
                                          <a href>Motor Pumps</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Chainsaws</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Electric Saws</a>
                                        </li>
                                        <li className="megamenu__item">
                                          <a href>Brush Cutters</a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .megamenu / end */}
                        </div>
                      </li>
                      <li className="nav-links__item  nav-links__item--has-submenu ">
                        <a
                          className="nav-links__item-link"
                          href="shop-grid-3-columns-sidebar.html"
                        >
                          <div className="nav-links__item-body">
                            Shop
                            <svg
                              className="nav-links__item-arrow"
                              width="9px"
                              height="6px"
                            >
                              <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6" />
                            </svg>
                          </div>
                        </a>
                        <div className="nav-links__submenu nav-links__submenu--type--menu">
                          {/* .menu */}
                          <div className="menu menu--layout--classic ">
                            <div className="menu__submenus-container" />
                            <ul className="menu__list">
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a className="menu__item-link" href="cart.html">
                                  Cart
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="checkout.html"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="wishlist.html"
                                >
                                  Wishlist
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="track-order.html"
                                >
                                  Track Order
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* .menu / end */}
                        </div>
                      </li>
                      <li className="nav-links__item  nav-links__item--has-submenu ">
                        <a
                          className="nav-links__item-link"
                          href="account-login.html"
                        >
                          <div className="nav-links__item-body">
                            Account
                            <svg
                              className="nav-links__item-arrow"
                              width="9px"
                              height="6px"
                            >
                              <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6" />
                            </svg>
                          </div>
                        </a>
                        <div className="nav-links__submenu nav-links__submenu--type--menu">
                          {/* .menu */}
                          <div className="menu menu--layout--classic ">
                            <div className="menu__submenus-container" />
                            <ul className="menu__list">
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-login.html"
                                >
                                  Login
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-dashboard.html"
                                >
                                  Dashboard
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-profile.html"
                                >
                                  Edit Profile
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-orders.html"
                                >
                                  Order History
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-order-details.html"
                                >
                                  Order Details
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-addresses.html"
                                >
                                  Address Book
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-edit-address.html"
                                >
                                  Edit Address
                                </a>
                              </li>
                              <li className="menu__item">
                                {/* This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. */}
                                <div className="menu__item-submenu-offset" />
                                <a
                                  className="menu__item-link"
                                  href="account-password.html"
                                >
                                  Change Password
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* .menu / end */}
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* .nav-links / end */}
                  <div className="nav-panel__indicators">
                    <div className="indicator indicator--trigger--click">
                      <button type="button" className="indicator__button">
                        <span className="indicator__area">
                          <FaIcons.FaSearch />
                        </span>
                      </button>
                      <div className="indicator__dropdown">
                        <div className="search search--location--indicator ">
                          <div className="search__body">
                            <form className="search__form" action>
                              <input
                                className="search__input"
                                name="search"
                                placeholder="Search over 10,000 products"
                                aria-label="Site search"
                                type="text"
                                autoComplete="off"
                              />
                              <button
                                className="search__button search__button--type--submit"
                                type="submit"
                              >
                                <span>
                                  <FaIcons.FaArrowRight />
                                </span>
                              </button>
                              <div className="search__border" />
                            </form>
                            <div className="search__suggestions suggestions suggestions--location--indicator" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="indicator">
                      <a href="wishlist.html" className="indicator__button">
                        <span className="indicator__area">
                          wishlist
                          <span className="indicator__value">0</span>
                        </span>
                      </a>
                    </div>
                    {/* indicator--trigger--click */}
                    <div className="indicator ">
                      <a href="/cart" className="indicator__button">
                        <span className="indicator__area">
                          cart <FaIcons.FaCartPlus />
                          <span className="indicator__value">3</span>
                        </span>
                      </a>
                      <div className="indicator__dropdown">
                        {/* .dropcart */}
                        {/* <div className="dropcart dropcart--style--dropdown">
                        <div className="dropcart__body">
                          <div className="dropcart__products-list">
                            <div className="dropcart__product">
                              <div className="product-image dropcart__product-image">
                                <a href="product.html" className="product-image__body">
                                  <img className="product-image__img" src="images/products/product-1.jpg" alt />
                                </a>
                              </div>
                              <div className="dropcart__product-info">
                                <div className="dropcart__product-name"><a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a></div>
                                <ul className="dropcart__product-options">
                                  <li>Color: Yellow</li>
                                  <li>Material: Aluminium</li>
                                </ul>
                                <div className="dropcart__product-meta">
                                  <span className="dropcart__product-quantity">2</span> ×
                                  <span className="dropcart__product-price">$699.00</span>
                                </div>
                              </div>
                              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                <svg width="10px" height="10px">
                                  <use xlinkHref="images/sprite.svg#cross-10" />
                                </svg>
                              </button>
                            </div>
                            <div className="dropcart__product">
                              <div className="product-image dropcart__product-image">
                                <a href="product.html" className="product-image__body">
                                  <img className="product-image__img" src="images/products/product-2.jpg" alt />
                                </a>
                              </div>
                              <div className="dropcart__product-info">
                                <div className="dropcart__product-name"><a href="product.html">Undefined Tool IRadix DPS3000SY 2700 watts</a></div>
                                <div className="dropcart__product-meta">
                                  <span className="dropcart__product-quantity">1</span> ×
                                  <span className="dropcart__product-price">$849.00</span>
                                </div>
                              </div>
                              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                <svg width="10px" height="10px">
                                  <use xlinkHref="images/sprite.svg#cross-10" />
                                </svg>
                              </button>
                            </div>
                            <div className="dropcart__product">
                              <div className="product-image dropcart__product-image">
                                <a href="product.html" className="product-image__body">
                                  <img className="product-image__img" src="images/products/product-5.jpg" alt />
                                </a>
                              </div>
                              <div className="dropcart__product-info">
                                <div className="dropcart__product-name"><a href="product.html">Brandix Router Power Tool 2017ERXPK</a></div>
                                <ul className="dropcart__product-options">
                                  <li>Color: True Red</li>
                                </ul>
                                <div className="dropcart__product-meta">
                                  <span className="dropcart__product-quantity">3</span> ×
                                  <span className="dropcart__product-price">$1,210.00</span>
                                </div>
                              </div>
                              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                <svg width="10px" height="10px">
                                  <use xlinkHref="images/sprite.svg#cross-10" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="dropcart__totals">
                            <table>
                              <tbody><tr>
                                  <th>Subtotal</th>
                                  <td>$5,877.00</td>
                                </tr>
                                <tr>
                                  <th>Shipping</th>
                                  <td>$25.00</td>
                                </tr>
                                <tr>
                                  <th>Tax</th>
                                  <td>$0.00</td>
                                </tr>
                                <tr>
                                  <th>Total</th>
                                  <td>$5,902.00</td>
                                </tr>
                              </tbody></table>
                          </div>
                          <div className="dropcart__buttons">
                            <a className="btn btn-secondary" href="cart.html">View Cart</a>
                            <a className="btn btn-primary" href="checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                      */}
                        {/* .dropcart / end */}
                      </div>
                    </div>
                    <div className="indicator indicator--trigger--click">
                      <a
                        href="/login"
                        className="indicator__button"
                      >
                        <span className="indicator__area">
                          Log In <BiIcons.BiLogIn />
                        </span>
                      </a>
                      <div className="indicator__dropdown">
                        <div className="account-menu">
                          <form className="account-menu__form">
                            <div className="account-menu__form-title">
                              Log In to Your Account
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="header-signin-email"
                                className="sr-only"
                              >
                                Email address
                              </label>
                              <input
                                id="header-signin-email"
                                type="email"
                                className="form-control form-control-sm"
                                placeholder="Email address"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="header-signin-password"
                                className="sr-only"
                              >
                                Password
                              </label>
                              <div className="account-menu__form-forgot">
                                <input
                                  id="header-signin-password"
                                  type="password"
                                  className="form-control form-control-sm"
                                  placeholder="Password"
                                />
                                <a
                                  href
                                  className="account-menu__form-forgot-link"
                                >
                                  Forgot?
                                </a>
                              </div>
                            </div>
                            <div className="form-group account-menu__form-button">
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                              >
                                Login
                              </button>
                            </div>
                            <div className="account-menu__form-link">
                              <a href="account-login.html">Create An Account</a>
                            </div>
                          </form>
                          <div className="account-menu__divider" />
                          <a
                            href="account-dashboard.html"
                            className="account-menu__user"
                          >
                            <div className="account-menu__user-avatar">
                              <img src="images/avatars/avatar-3.jpg" alt />
                            </div>
                            <div className="account-menu__user-info">
                              <div className="account-menu__user-name">
                                Helena Garcia
                              </div>
                              <div className="account-menu__user-email">
                                stroyka@example.com
                              </div>
                            </div>
                          </a>
                          <div className="account-menu__divider" />
                          <ul className="account-menu__links">
                            <li>
                              <a href="account-login.html">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* desktop site__header / end */}

      <div>
        {/* quickview-modal */}
        <div
          id="quickview-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            0
            <div className="modal-content" />
          </div>
        </div>
        {/* quickview-modal / end */}
        {/* mobilemenu */}
        <div className="mobilemenu">
          <div className="mobilemenu__backdrop" />
          <div className="mobilemenu__body">
            <div className="mobilemenu__header">
              <div className="mobilemenu__title">Menu</div>
              <button type="button" className="mobilemenu__close">
                <AiIcons.AiOutlineClose />
              </button>
            </div>
            <div className="mobilemenu__content">
              <ul
                className="mobile-links mobile-links--level--0"
                data-collapse
                data-collapse-opened-class="mobile-links__item--open"
              >
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a href="index.html" className="mobile-links__item-link">
                      Home
                    </a>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a href className="mobile-links__item-link">
                      Categories
                    </a>
                    <button
                      className="mobile-links__item-toggle"
                      type="button"
                      data-collapse-trigger
                    >
                      <AiIcons.AiOutlineDownCircle />
                    </button>
                  </div>
                  <div
                    className="mobile-links__item-sub-links"
                    data-collapse-content
                  >
                    <ul className="mobile-links mobile-links--level--1">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            Power Tools
                          </a>
                          <button
                            className="mobile-links__item-toggle"
                            type="button"
                            data-collapse-trigger
                          >
                            <AiIcons.AiOutlineDownCircle />
                          </button>
                        </div>
                        <div
                          className="mobile-links__item-sub-links"
                          data-collapse-content
                        >
                          <ul className="mobile-links mobile-links--level--2">
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Engravers
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Wrenches
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Wall Chaser
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Pneumatic Tools
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            Machine Tools
                          </a>
                          <button
                            className="mobile-links__item-toggle"
                            type="button"
                            data-collapse-trigger
                          >
                            <AiIcons.AiOutlineDownCircle />
                          </button>
                        </div>
                        <div
                          className="mobile-links__item-sub-links"
                          data-collapse-content
                        >
                          <ul className="mobile-links mobile-links--level--2">
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Thread Cutting
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Chip Blowers
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Sharpening Machines
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Pipe Cutters
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Slotting machines
                                </a>
                              </div>
                            </li>
                            <li
                              className="mobile-links__item"
                              data-collapse-item
                            >
                              <div className="mobile-links__item-title">
                                <a href className="mobile-links__item-link">
                                  Lathes
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a
                      href="shop-grid-3-columns-sidebar.html"
                      className="mobile-links__item-link"
                    >
                      Shop
                    </a>
                    <button
                      className="mobile-links__item-toggle"
                      type="button"
                      data-collapse-trigger
                    >
                      <AiIcons.AiOutlineDownCircle />
                    </button>
                  </div>
                  <div
                    className="mobile-links__item-sub-links"
                    data-collapse-content
                  >
                    <ul className="mobile-links mobile-links--level--1">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="cart.html"
                            className="mobile-links__item-link"
                          >
                            Cart
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="checkout.html"
                            className="mobile-links__item-link"
                          >
                            Checkout
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="wishlist.html"
                            className="mobile-links__item-link"
                          >
                            Wishlist
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="track-order.html"
                            className="mobile-links__item-link"
                          >
                            Track Order
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a
                      href="account-login.html"
                      className="mobile-links__item-link"
                    >
                      Account
                    </a>
                    <button
                      className="mobile-links__item-toggle"
                      type="button"
                      data-collapse-trigger
                    >
                      <AiIcons.AiOutlineDownCircle />
                    </button>
                  </div>
                  <div
                    className="mobile-links__item-sub-links"
                    data-collapse-content
                  >
                    <ul className="mobile-links mobile-links--level--1">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-login.html"
                            className="mobile-links__item-link"
                          >
                            Login
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-dashboard.html"
                            className="mobile-links__item-link"
                          >
                            Dashboard
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-profile.html"
                            className="mobile-links__item-link"
                          >
                            Edit Profile
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-orders.html"
                            className="mobile-links__item-link"
                          >
                            Order History
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-order-details.html"
                            className="mobile-links__item-link"
                          >
                            Order Details
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-addresses.html"
                            className="mobile-links__item-link"
                          >
                            Address Book
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-edit-address.html"
                            className="mobile-links__item-link"
                          >
                            Edit Address
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a
                            href="account-password.html"
                            className="mobile-links__item-link"
                          >
                            Change Password
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a
                      data-collapse-trigger
                      className="mobile-links__item-link"
                    >
                      Currency
                    </a>
                    <button
                      className="mobile-links__item-toggle"
                      type="button"
                      data-collapse-trigger
                    >
                      <AiIcons.AiOutlineDownCircle />
                    </button>
                  </div>
                  <div
                    className="mobile-links__item-sub-links"
                    data-collapse-content
                  >
                    <ul className="mobile-links mobile-links--level--1">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            N Nigerian Naira
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            $ US Dollar
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title">
                    <a
                      data-collapse-trigger
                      className="mobile-links__item-link"
                    >
                      Language
                    </a>
                    <button
                      className="mobile-links__item-toggle"
                      type="button"
                      data-collapse-trigger
                    >
                      <AiIcons.AiOutlineDownCircle />
                    </button>
                  </div>
                  <div
                    className="mobile-links__item-sub-links"
                    data-collapse-content
                  >
                    <ul className="mobile-links mobile-links--level--1">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            English
                          </a>
                        </div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                          <a href className="mobile-links__item-link">
                            French
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mobilemenu / end */}
        {/* photoswipe */}
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                {/*<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>*/}
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        {/* photoswipe / end */}
      </div>
    </div>
  );
}

export default Header;
