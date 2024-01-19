import { useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { navlinks } from '../constants/nav'
import { Link } from 'react-router-dom'
import Logo from '../images/logo/logo.png'

function Navbar() {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav>
        {/* mobile navigation*/}
        <div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
          <div onClick={toggleNav} className='mobile-navbar__close'>
            <IconX width={30} height={30} />
          </div>
          <ul className='mobile-navbar__links'>
            {navlinks.map((item) => (
              <li key={item.link}>
                <Link onClick={toggleNav} to={`/${item.link}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* desktop navigation bar*/}

        <div className='navbar'>
          <div className='navbar__img'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt='logo-img' />
            </Link>
          </div>
          <ul className='navbar__links'>
            {navlinks.map((item) => (
              <li key={item.link}>
                <Link to={`/${item.link}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='navbar__buttons'>
            <Link className='navbar__buttons__sign-in' to='/'>
              Sign In
            </Link>
            <Link className='navbar__buttons__register' to='/'>
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className='mobile-hamb' onClick={toggleNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
