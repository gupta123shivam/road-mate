/* eslint-disable react/prop-types */
import { useState } from 'react'

function CarBox({ data }) {
  const [carLoad, setCarLoad] = useState(true)
  const { price, model, mark, year, doors, air, transmission, fuel, img, id } =
    data
  const a = ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel']
  return (
    <>
      <div key={id} className='box-cars'>
        {/* car image */}
        <div className='pick-car'>
          {carLoad && <span className='loader'></span>}
          <img
            style={{ display: carLoad ? 'none' : 'block' }}
            src={img}
            alt='car_img'
            onLoad={() => setCarLoad(false)}
          />
        </div>
        {/* car description */}
        <div className='pick-description'>
          <div className='pick-description__price'>
            <span>${price}</span>/ rent per day
          </div>
          <div className='pick-description__table'>
            <div className='pick-description__table__col'>
              <span>Model</span>
              <span>{model}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>Mark</span>
              <span>{mark}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>Year</span>
              <span>{year}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>Doors</span>
              <span>{doors}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>AC</span>
              <span>{air}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>Transmission</span>
              <span>{transmission}</span>
            </div>

            <div className='pick-description__table__col'>
              <span>Fuel</span>
              <span>{fuel}</span>
            </div>
          </div>

          {/* button */}
          <a className='cta-btn' href='#booking-section'>
            Reserve Now
          </a>
        </div>
      </div>
    </>
  )
}

export default CarBox
