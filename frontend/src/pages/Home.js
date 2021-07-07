import React from 'react'
import car from "../components/img/2002847.jpg"

function Home() {
  return (
    <>
      {/* site__body */}
      <div className="site__body">
  {/* .block-finder */}
  <div className="block-finder block-finder--layout--full block">
    <form>
      <div className="container">
        <div className="row">
          <div className="col-12">
          {/* d */}
            <div className="block-finder__body" style={{ backgroundImage: 'url("/src/components/img/2002847.jpg")' }}>
              <div className="block-finder__header">
                <div className="block-finder__title">Find Parts For Your Vehicle</div>
                <div className="block-finder__subtitle">Over hundreds of brands and tens of thousands of parts</div>
              </div>
              <div className="block-finder__form">
                <div className="block-finder__form-item">
                  <select className="block-finder__select">
                    <option value="none">Select Year</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
                <div className="block-finder__form-item">
                  <select className="block-finder__select" disabled>
                    <option value="none">Select Make</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Ferrari</option>
                    <option>Ford</option>
                    <option>KIA</option>
                    <option>Nissan</option>
                    <option>Tesla</option>
                    <option>Toyota</option>
                  </select>
                </div>
                <div className="block-finder__form-item">
                  <select className="block-finder__select" disabled>
                    <option value="none">Select Model</option>
                    <option>Explorer</option>
                    <option>Focus S</option>
                    <option>Fusion SE</option>
                    <option>Mustang</option>
                  </select>
                </div>
                <div className="block-finder__form-item">
                  <select className="block-finder__select" disabled>
                    <option value="none">Select Engine</option>
                    <option>Gas 1.6L 125 hp AT/L4</option>
                    <option>Diesel 2.5L 200 hp AT/L5</option>
                    <option>Diesel 3.0L 250 hp MT/L5</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="block-finder__button btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  {/* .block-finder / end */}
  {/* .block-features */}
  <div className="block block-features block-features--layout--boxed">
    <div className="container">
      <div className="block-features__list">
        <div className="block-features__item">
          <div className="block-features__icon">
            <svg width="48px" height="48px">
              <use xlinkHref="images/sprite.svg#fi-free-delivery-48" />
            </svg>
          </div>
          <div className="block-features__content">
            <div className="block-features__title">Free Shipping</div>
            <div className="block-features__subtitle">For orders from $50</div>
          </div>
        </div>
        <div className="block-features__divider" />
        <div className="block-features__item">
          <div className="block-features__icon">
            <svg width="48px" height="48px">
              <use xlinkHref="images/sprite.svg#fi-24-hours-48" />
            </svg>
          </div>
          <div className="block-features__content">
            <div className="block-features__title">Support 24/7</div>
            <div className="block-features__subtitle">Call us anytime</div>
          </div>
        </div>
        <div className="block-features__divider" />
        <div className="block-features__item">
          <div className="block-features__icon">
            <svg width="48px" height="48px">
              <use xlinkHref="images/sprite.svg#fi-payment-security-48" />
            </svg>
          </div>
          <div className="block-features__content">
            <div className="block-features__title">100% Safety</div>
            <div className="block-features__subtitle">Only secure payments</div>
          </div>
        </div>
        <div className="block-features__divider" />
        <div className="block-features__item">
          <div className="block-features__icon">
            <svg width="48px" height="48px">
              <use xlinkHref="images/sprite.svg#fi-tag-48" />
            </svg>
          </div>
          <div className="block-features__content">
            <div className="block-features__title">Hot Offers</div>
            <div className="block-features__subtitle">Discounts up to 90%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-features / end */}
  {/* .block-products-carousel */}
  <div className="block block-products-carousel" data-layout="grid-5" data-mobile-grid-columns={2}>
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">Featured Products</h3>
        <div className="block-header__divider" />
        <ul className="block-header__groups-list">
          <li><button type="button" className="block-header__group  block-header__group--active ">All</button></li>
          <li><button type="button" className="block-header__group ">Power Tools</button></li>
          <li><button type="button" className="block-header__group ">Hand Tools</button></li>
          <li><button type="button" className="block-header__group ">Plumbing</button></li>
        </ul>
        <div className="block-header__arrows-list">
          <button className="block-header__arrow block-header__arrow--left" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11" />
            </svg>
          </button>
          <button className="block-header__arrow block-header__arrow--right" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11" />
            </svg>
          </button>
        </div>
      </div>
      <div className="block-products-carousel__slider">
        <div className="block-products-carousel__preloader" />
        <div className="owl-carousel">
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--new">New</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-1.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $749.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-2.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,019.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-3.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $850.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--sale">Sale</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-4.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    <span className="product-card__new-price">$949.00</span>
                    <span className="product-card__old-price">$1189.00</span>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-5.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Router Power Tool 2017ERXPK</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,700.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-6.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Drilling Machine DM2019KW4 4kW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $3,199.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-7.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Pliers</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $24.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-8.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Water Hose 40cm</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $15.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-9.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Spanner Wrench</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $19.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-10.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Water Tap</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $15.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-11.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Hand Tool Kit</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $149.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-12.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Ash's Chainsaw 3.5kW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $666.99
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-13.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Angle Grinder KZX3890PQW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $649.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-14.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Air Compressor DELTAKX500</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,800.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-15.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Electric Jigsaw JIG7000BQ</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $290.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-16.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Screwdriver SCREW1500ACC</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,499.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-products-carousel / end */}
  {/* .block-banner */}
  <div className="block block-banner">
    <div className="container">
      <a href className="block-banner__body">
        <div className="block-banner__image block-banner__image--desktop" style={{backgroundImage: 'url("images/banners/banner-1.jpg")'}} />
        <div className="block-banner__image block-banner__image--mobile" style={{backgroundImage: 'url("images/banners/banner-1-mobile.jpg")'}} />
        <div className="block-banner__title">Hundreds <br className="block-banner__mobile-br" /> Hand Tools</div>
        <div className="block-banner__text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>
        <div className="block-banner__button">
          <span className="btn btn-sm btn-primary">Shop Now</span>
        </div>
      </a>
    </div>
  </div>
  {/* .block-banner / end */}
  {/* .block-products */}
  <div className="block block-products block-products--layout--large-last" data-mobile-grid-columns={2}>
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">Bestsellers</h3>
        <div className="block-header__divider" />
      </div>
      <div className="block-products__body">
        <div className="block-products__list">
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__badges-list">
                <div className="product-card__badge product-card__badge--hot">Hot</div>
              </div>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-2.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">11 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $1,019.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-3.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">9 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $850.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__badges-list">
                <div className="product-card__badge product-card__badge--sale">Sale</div>
              </div>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-4.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">7 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  <span className="product-card__new-price">$949.00</span>
                  <span className="product-card__old-price">$1189.00</span>
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-5.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Brandix Router Power Tool 2017ERXPK</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">9 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $1,700.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-6.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Brandix Drilling Machine DM2019KW4 4kW</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">7 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $3,199.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products__list-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-7.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Brandix Pliers</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">4 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $24.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-products__featured">
          <div className="block-products__featured-item">
            <div className="product-card product-card--hidden-actions ">
              <button className="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#quickview-16" />
                </svg>
                <span className="fake-svg-icon" />
              </button>
              <div className="product-card__badges-list">
                <div className="product-card__badge product-card__badge--new">New</div>
              </div>
              <div className="product-card__image product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-1.jpg" alt />
                </a>
              </div>
              <div className="product-card__info">
                <div className="product-card__name">
                  <a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
                </div>
                <div className="product-card__rating">
                  <div className="product-card__rating-stars">
                    <div className="rating">
                      <div className="rating__body">
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge rating__star--active">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                        <svg className="rating__star " width="13px" height="12px">
                          <g className="rating__fill">
                            <use xlinkHref="images/sprite.svg#star-normal" />
                          </g>
                          <g className="rating__stroke">
                            <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                          </g>
                        </svg>
                        <div className="rating__star rating__star--only-edge ">
                          <div className="rating__fill">
                            <div className="fake-svg-icon" />
                          </div>
                          <div className="rating__stroke">
                            <div className="fake-svg-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__rating-legend">9 Reviews</div>
                </div>
                <ul className="product-card__features-list">
                  <li>Speed: 750 RPM</li>
                  <li>Power Source: Cordless-Electric</li>
                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </ul>
              </div>
              <div className="product-card__actions">
                <div className="product-card__availability">
                  Availability: <span className="text-success">In Stock</span>
                </div>
                <div className="product-card__prices">
                  $749.00
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                  <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#wishlist-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                  </button>
                  <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                    <svg width="16px" height="16px">
                      <use xlinkHref="images/sprite.svg#compare-16" />
                    </svg>
                    <span className="fake-svg-icon fake-svg-icon--compare-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-products / end */}
  {/* .block-categories */}
  <div className="block block--highlighted block-categories block-categories--layout--compact">
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">Popular Categories</h3>
        <div className="block-header__divider" />
      </div>
      <div className="block-categories__list">
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-1.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Power Tools</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Screwdrivers</a></li>
                <li><a href>Milling Cutters</a></li>
                <li><a href>Sanding Machines</a></li>
                <li><a href>Wrenches</a></li>
                <li><a href>Drills</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                572 Products
              </div>
            </div>
          </div>
        </div>
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-2.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Hand Tools</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Screwdrivers</a></li>
                <li><a href>Hammers</a></li>
                <li><a href>Spanners</a></li>
                <li><a href>Handsaws</a></li>
                <li><a href>Paint Tools</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                134 Products
              </div>
            </div>
          </div>
        </div>
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-4.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Machine Tools</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Lathes</a></li>
                <li><a href>Milling Machines</a></li>
                <li><a href>Grinding Machines</a></li>
                <li><a href>CNC Machines</a></li>
                <li><a href>Sharpening Machines</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                301 Products
              </div>
            </div>
          </div>
        </div>
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-3.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Power Machinery</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Generators</a></li>
                <li><a href>Compressors</a></li>
                <li><a href>Winches</a></li>
                <li><a href>Plasma Cutting</a></li>
                <li><a href>Electric Motors</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                79 Products
              </div>
            </div>
          </div>
        </div>
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-5.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Measurement</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Tape Measure</a></li>
                <li><a href>Theodolites</a></li>
                <li><a href>Thermal Imagers</a></li>
                <li><a href>Calipers</a></li>
                <li><a href>Levels</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                366 Products
              </div>
            </div>
          </div>
        </div>
        <div className="block-categories__item category-card category-card--layout--compact">
          <div className="category-card__body">
            <div className="category-card__image">
              <a href><img src="images/categories/category-6.jpg" alt /></a>
            </div>
            <div className="category-card__content">
              <div className="category-card__name">
                <a href>Clothes and PPE</a>
              </div>
              <ul className="category-card__links">
                <li><a href>Winter Workwear</a></li>
                <li><a href>Summer Workwear</a></li>
                <li><a href>Helmets</a></li>
                <li><a href>Belts and Bags</a></li>
                <li><a href>Work Shoes</a></li>
              </ul>
              <div className="category-card__all">
                <a href>Show All</a>
              </div>
              <div className="category-card__products">
                81 Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-categories / end */}
  {/* .block-products-carousel */}
  <div className="block block-products-carousel" data-layout="grid-5" data-mobile-grid-columns={2}>
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">New Arrivals</h3>
        <div className="block-header__divider" />
        <ul className="block-header__groups-list">
          <li><button type="button" className="block-header__group  block-header__group--active ">All</button></li>
          <li><button type="button" className="block-header__group ">Power Tools</button></li>
          <li><button type="button" className="block-header__group ">Hand Tools</button></li>
          <li><button type="button" className="block-header__group ">Plumbing</button></li>
        </ul>
        <div className="block-header__arrows-list">
          <button className="block-header__arrow block-header__arrow--left" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11" />
            </svg>
          </button>
          <button className="block-header__arrow block-header__arrow--right" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11" />
            </svg>
          </button>
        </div>
      </div>
      <div className="block-products-carousel__slider">
        <div className="block-products-carousel__preloader" />
        <div className="owl-carousel">
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--new">New</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-1.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $749.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-2.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,019.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-3.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $850.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--sale">Sale</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-4.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    <span className="product-card__new-price">$949.00</span>
                    <span className="product-card__old-price">$1189.00</span>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-5.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Router Power Tool 2017ERXPK</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,700.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-6.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Drilling Machine DM2019KW4 4kW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $3,199.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-7.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Pliers</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $24.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-8.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Water Hose 40cm</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $15.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-9.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Spanner Wrench</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $19.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-10.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Water Tap</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $15.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-11.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Hand Tool Kit</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $149.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-12.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Ash's Chainsaw 3.5kW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $666.99
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-13.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Angle Grinder KZX3890PQW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $649.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-14.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Air Compressor DELTAKX500</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,800.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-15.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Electric Jigsaw JIG7000BQ</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $290.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card product-card--hidden-actions ">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-16.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Screwdriver SCREW1500ACC</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,499.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-products-carousel / end */}
  {/* .block-posts */}
  <div className="block block-posts" data-layout="grid-4" data-mobile-columns={2}>
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">Latest News</h3>
        <div className="block-header__divider" />
        <div className="block-header__arrows-list">
          <button className="block-header__arrow block-header__arrow--left" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11" />
            </svg>
          </button>
          <button className="block-header__arrow block-header__arrow--right" type="button">
            <svg width="7px" height="11px">
              <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11" />
            </svg>
          </button>
        </div>
      </div>
      <div className="block-posts__slider">
        <div className="owl-carousel">
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-1.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Special Offers</a>
              </div>
              <div className="post-card__name">
                <a href>Philosophy That Addresses Topics Such As Goodness</a>
              </div>
              <div className="post-card__date">October 19, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-2.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Latest News</a>
              </div>
              <div className="post-card__name">
                <a href>Logic Is The Study Of Reasoning And Argument Part 2</a>
              </div>
              <div className="post-card__date">September 5, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-3.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>New Arrivals</a>
              </div>
              <div className="post-card__name">
                <a href>Some Philosophers Specialize In One Or More Historical Periods</a>
              </div>
              <div className="post-card__date">August 12, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-4.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Special Offers</a>
              </div>
              <div className="post-card__name">
                <a href>A Variety Of Other Academic And Non-Academic Approaches Have Been Explored</a>
              </div>
              <div className="post-card__date">Jule 30, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-5.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>New Arrivals</a>
              </div>
              <div className="post-card__name">
                <a href>Germany Was The First Country To Professionalize Philosophy</a>
              </div>
              <div className="post-card__date">June 12, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-6.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Special Offers</a>
              </div>
              <div className="post-card__name">
                <a href>Logic Is The Study Of Reasoning And Argument Part 1</a>
              </div>
              <div className="post-card__date">May 21, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-7.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Special Offers</a>
              </div>
              <div className="post-card__name">
                <a href>Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense</a>
              </div>
              <div className="post-card__date">April 3, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-8.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Latest News</a>
              </div>
              <div className="post-card__name">
                <a href>An Advantage Of Digital Circuits When Compared To Analog Circuits</a>
              </div>
              <div className="post-card__date">Mart 29, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-9.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>New Arrivals</a>
              </div>
              <div className="post-card__name">
                <a href>A Digital Circuit Is Typically Constructed From Small Electronic Circuits</a>
              </div>
              <div className="post-card__date">February 10, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-card  ">
            <div className="post-card__image">
              <a href>
                <img src="images/posts/post-10.jpg" alt />
              </a>
            </div>
            <div className="post-card__info">
              <div className="post-card__category">
                <a href>Special Offers</a>
              </div>
              <div className="post-card__name">
                <a href>Engineers Use Many Methods To Minimize Logic Functions</a>
              </div>
              <div className="post-card__date">January 1, 2019</div>
              <div className="post-card__content">
                In one general sense, philosophy is associated with wisdom,
                intellectual culture and a search for knowledge.
                In that sense, all cultures...
              </div>
              <div className="post-card__read-more">
                <a href className="btn btn-secondary btn-sm">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-posts / end */}
  {/* .block-brands */}
  <div className="block block-brands">
    <div className="container">
      <div className="block-brands__slider">
        <div className="owl-carousel">
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-1.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-2.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-3.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-4.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-5.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-6.png" alt /></a>
          </div>
          <div className="block-brands__item">
            <a href><img src="images/logos/logo-7.png" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-brands / end */}
  {/* .block-product-columns */}
  <div className="block block-product-columns d-lg-block d-none">
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="block-header">
            <h3 className="block-header__title">Top Rated Products</h3>
            <div className="block-header__divider" />
          </div>
          <div className="block-product-columns__column">
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--new">New</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-1.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $749.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-2.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">11 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,019.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-3.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $850.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="block-header">
            <h3 className="block-header__title">Special Offers</h3>
            <div className="block-header__divider" />
          </div>
          <div className="block-product-columns__column">
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--sale">Sale</div>
                </div>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-4.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    <span className="product-card__new-price">$949.00</span>
                    <span className="product-card__old-price">$1189.00</span>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-5.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Router Power Tool 2017ERXPK</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $1,700.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-6.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Drilling Machine DM2019KW4 4kW</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">7 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $3,199.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="block-header">
            <h3 className="block-header__title">Bestsellers</h3>
            <div className="block-header__divider" />
          </div>
          <div className="block-product-columns__column">
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-7.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Brandix Pliers</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $24.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-8.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Water Hose 40cm</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">4 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $15.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-product-columns__item">
              <div className="product-card product-card--hidden-actions product-card--layout--horizontal">
                <button className="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg>
                  <span className="fake-svg-icon" />
                </button>
                <div className="product-card__image product-image">
                  <a href="product.html" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-9.jpg" alt />
                  </a>
                </div>
                <div className="product-card__info">
                  <div className="product-card__name">
                    <a href="product.html">Spanner Wrench</a>
                  </div>
                  <div className="product-card__rating">
                    <div className="product-card__rating-stars">
                      <div className="rating">
                        <div className="rating__body">
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star rating__star--active" width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge rating__star--active">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                          <svg className="rating__star " width="13px" height="12px">
                            <g className="rating__fill">
                              <use xlinkHref="images/sprite.svg#star-normal" />
                            </g>
                            <g className="rating__stroke">
                              <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                            </g>
                          </svg>
                          <div className="rating__star rating__star--only-edge ">
                            <div className="rating__fill">
                              <div className="fake-svg-icon" />
                            </div>
                            <div className="rating__stroke">
                              <div className="fake-svg-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-card__rating-legend">9 Reviews</div>
                  </div>
                  <ul className="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    $19.00
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                    </button>
                    <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--compare-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .block-product-columns / end */}
</div>
      {/* site__body / end */}
    </>
  )
}

export default Home
