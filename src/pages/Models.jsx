import { HeroPage } from '../components'
import { Link } from 'react-router-dom'
import { IconCar, IconPhone, IconStar } from '@tabler/icons-react'
import { CAR_DATA } from '../mock/_carData'

function Models() {
  return (
    <>
      <section className='models-section'>
        <HeroPage name='Vehicle Models' />
        <div className='container'>
          <div className='models-div'>
            {CAR_DATA.map((car, idx) => {
              const {
                name,
                price,
                img,
                model,
                doors,
                transmission,
                fuel,
              } = car
              return (
                <div key={idx} className='models-div__box'>
                  <div className='models-div__box__img'>
                    <img src={img} alt='car_img' />
                    <div className='models-div__box__descr'>
                      <div className='models-div__box__descr__name-price'>
                        <div className='models-div__box__descr__name-price__name'>
                          <p>{name}</p>
                          <span>
                            {Array.from(5).map((_, i) => (
                              <IconStar key={i} width={15} height={15} />
                            ))}
                          </span>
                        </div>
                        <div className='models-div__box__descr__name-price__price'>
                          <h4>${price}</h4>
                          <p>per day</p>
                        </div>
                      </div>
                      <div className='models-div__box__descr__name-price__details'>
                        <span>
                          <IconCar /> &nbsp; {model}
                        </span>
                        <span style={{ textAlign: 'right' }}>
                          {doors} &nbsp; <IconCar />
                        </span>
                        <span>
                          <IconCar /> &nbsp; {transmission}
                        </span>
                        <span style={{ textAlign: 'right' }}>
                          {fuel} &nbsp; <IconCar />
                        </span>
                      </div>
                      <div className='models-div__box__descr__name-price__btn'>
                        <Link to='/'>
                          Book Ride
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='book-banner'>
          <div className='book-banner__overlay'></div>
          <div className='container'>
            <div className='text-content'>
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Models
