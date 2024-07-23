
import logo from "../assets/img/simple/newlogo.png"
import arrowright from "../assets/img/simple/icon-black-long-arrow-right.svg"
import cheveronright from "../assets/img/simple/icon-black-cheveron-right.svg"
function Header() {


  

  return (
    <div>
      {/* <nav className="  px-2 sm:px-4 py-2.5  custom_gradient shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Website
            </span>
          </a>
          <div className="flex items-center">
            <button
              id="menu-toggle"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
             
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      
<header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
    <div className="global-container">
      <div className="flex items-center justify-between gap-x-8">
        {/* Header Logo */}
        <a href="index.html" className>
          <img src={logo} alt="AIMass" width={96} height={24} />
        </a>
        {/* Header Logo */}
        {/* Header Navigation */}
        <div className="menu-block-wrapper">
          <div className="menu-overlay" />
          <nav className="menu-block" id="append-menu-header">
            <div className="mobile-menu-head">
              <div className="go-back">
                <img className="dropdown-icon" src={arrowright} alt="cheveron-right" width={16} height={16} />
              </div>
              <div className="current-menu-title" />
              <div className="mobile-menu-close">×</div>
            </div>
            <ul className="site-menu-main">
              <li className="nav-item nav-item-has-children">
                <a href="#" className="nav-link-item drop-trigger">Demo
                  <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} /></a>
                <ul className="sub-menu" id="submenu-1">
                  <li className="sub-menu--item">
                    <a href="index.html">home 01</a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="index-2.html">home 02</a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="index-3.html">home 03</a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="index-4.html"> home 04</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link-item">About</a>
              </li>
              <li className="nav-item nav-item-has-children">
                <a href="#" className="nav-link-item drop-trigger">Services
                  <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} /></a>
                <ul className="sub-menu" id="submenu-2">
                  <li className="sub-menu--item">
                    <a href="services.html">Services</a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-has-children">
                <a href="#" className="nav-link-item drop-trigger">Pages
                  <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} /></a>
                <ul className="sub-menu" id="submenu-3">
                  <li className="sub-menu--item nav-item-has-children">
                    <a href="#" data-menu-get="h3" className="drop-trigger">blogs
                      <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} /></a>
                    <ul className="sub-menu shape-none" id="submenu-4">
                      <li className="sub-menu--item">
                        <a href="blog.html">blogs</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="blog-details.html">blog details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu--item nav-item-has-children">
                    <a href="#" data-menu-get="h3" className="drop-trigger">Team
                      <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                    </a>
                    <ul className="sub-menu shape-none" id="submenu-5">
                      <li className="sub-menu--item">
                        <a href="teams.html">Teams</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="team-details.html">Teams Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu--item nav-item-has-children">
                    <a href="#" data-menu-get="h3" className="drop-trigger">FAQ
                      <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                    </a>
                    <ul className="sub-menu shape-none" id="submenu-6">
                      <li className="sub-menu--item">
                        <a href="faq.html">FAQ-1</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="faq-2.html">FAQ-2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu--item nav-item-has-children">
                    <a href="#" data-menu-get="h3" className="drop-trigger">Portfolio
                      <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                    </a>
                    <ul className="sub-menu shape-none" id="submenu-7">
                      <li className="sub-menu--item">
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu--item">
                    <a href="pricing.html" data-menu-get="h3" className="drop-trigger">Pricing
                    </a>
                  </li>
                  <li className="sub-menu--item nav-item-has-children">
                    <a href="#" data-menu-get="h3" className="drop-trigger">Utilities
                      <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                    </a>
                    <ul className="sub-menu shape-none" id="submenu-8">
                      <li className="sub-menu--item">
                        <a href="error-404.html">Error 404</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="login.html">Login</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="signup.html">Signup</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link-item">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Header Navigation */}
        {/* Header User Event */}
        <div className="flex items-center gap-6">
          <a href="login.html" className="button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white lg:inline-block">Login</a>
          <a href="signup.html" className="button hidden rounded-[50px] border-black bg-black text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white lg:inline-block">Sign
            up free</a>
          {/* Responsive Offcanvas Menu Button */}
          <div className="block lg:hidden">
            <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        {/* Header User Event */}
      </div>
    </div>
  </header>
  </div>
  );
}

export default Header;
