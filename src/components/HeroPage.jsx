/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function HeroPage({ name }) {
  return (
    <>
      <section className='hero-pages'>
        <div className='hero-pages__overlay'></div>
        <div className='container'>
          <div className='hero-pages__text'>
            <h3>{name}</h3>
            <p>
              <Link to='/'>Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroPage
