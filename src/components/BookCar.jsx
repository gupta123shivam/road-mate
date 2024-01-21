import { useEffect, useState } from 'react'
import CarAudi from '../images/cars-big/audia1.jpg'
import CarGolf from '../images/cars-big/golf6.jpg'
import CarToyota from '../images/cars-big/toyotacamry.jpg'
import CarBmw from '../images/cars-big/bmw320.jpg'
import CarMercedes from '../images/cars-big/benz.jpg'
import CarPassat from '../images/cars-big/passatcc.jpg'
import {
  IconCar,
  IconX,
  IconMapPinFilled,
  IconCalendarEvent,
} from '@tabler/icons-react'
import BookingModal from './BookingModal'

function BookCar() {
  const [modal, setModal] = useState(false) //  class - active-modal

  // booking car
  const [carType, setCarType] = useState('')
  const [pickUp, setPickUp] = useState('')
  const [dropOff, setDropOff] = useState('')
  const [pickTime, setPickTime] = useState('')
  const [dropTime, setDropTime] = useState('')
  const [carImg, setCarImg] = useState('')

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault()
    const errorMsg = document.querySelector('.error-message')
    if (
      pickUp === '' ||
      dropOff === '' ||
      pickTime === '' ||
      dropTime === '' ||
      carType === ''
    ) {
      errorMsg.style.display = 'flex'
    } else {
      setModal(true)
      const modalDiv = document.querySelector('.booking-modal')
      modalDiv.scroll(0, 0)
      errorMsg.style.display = 'none'
    }
  }

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value)
    setCarImg(e.target.value)
  }

  const handlePick = (e) => {
    setPickUp(e.target.value)
  }

  const handleDrop = (e) => {
    setDropOff(e.target.value)
  }

  const handlePickTime = (e) => {
    setPickTime(e.target.value)
  }

  const handleDropTime = (e) => {
    setDropTime(e.target.value)
  }

  // based on value name show car img
  let imgUrl = ''
  switch (carImg) {
    case 'Audi A1 S-Line':
      imgUrl = CarAudi
      break
    case 'VW Golf 6':
      imgUrl = CarGolf
      break
    case 'Toyota Camry':
      imgUrl = CarToyota
      break
    case 'BMW 320 ModernLine':
      imgUrl = CarBmw
      break
    case 'Mercedes-Benz GLK':
      imgUrl = CarMercedes
      break
    case 'VW Passat CC':
      imgUrl = CarPassat
      break
    default:
      imgUrl = ''
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector('.booking-done')
    doneMsg.style.display = 'none'
  }

  return (
    <>
      <section id='booking-section' className='book-section'>
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? 'active-modal' : ''}`}
        ></div>

        <div className='container'>
          <div className='book-content'>
            <div className='book-content__box'>
              <h2>Book a car</h2>

              <p className='error-message'>
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className='booking-done'>
                Check your email to confirm an order.
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className='box-form'>
                <div className='box-form__car-type'>
                  <label>
                    <IconCar className='input-icon' /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value='Audi A1 S-Line'>Audi A1 S-Line</option>
                    <option value='VW Golf 6'>VW Golf 6</option>
                    <option value='Toyota Camry'>Toyota Camry</option>
                    <option value='BMW 320 ModernLine'>
                      BMW 320 ModernLine
                    </option>
                    <option value='Mercedes-Benz GLK'>Mercedes-Benz GLK</option>
                    <option value='VW Passat CC'>VW Passat CC</option>
                  </select>
                </div>

                <div className='box-form__car-type'>
                  <label>
                    <IconMapPinFilled className='input-icon' /> &nbsp; Pick-up{' '}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className='box-form__car-type'>
                  <label>
                    <IconMapPinFilled className='input-icon' /> &nbsp; Drop-of{' '}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className='box-form__car-time'>
                  <label htmlFor='picktime'>
                    <IconCalendarEvent className='input-icon' /> &nbsp; Pick-up{' '}
                    <b>*</b>
                  </label>
                  <input
                    id='picktime'
                    value={pickTime}
                    onChange={handlePickTime}
                    type='date'
                  ></input>
                </div>

                <div className='box-form__car-time'>
                  <label htmlFor='droptime'>
                    <IconCalendarEvent className='input-icon' /> &nbsp; Drop-of{' '}
                    <b>*</b>
                  </label>
                  <input
                    id='droptime'
                    value={dropTime}
                    onChange={handleDropTime}
                    type='date'
                  ></input>
                </div>

                <button onClick={openModal} type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* modal ------------------------------------ */}

      <BookingModal
        modal={modal}
        setModal={setModal}
        pickTime={pickTime}
        dropTime={dropTime}
        pickUp={pickUp}
        dropOff={dropOff}
        imgUrl={imgUrl}
        carType={carType}
      />
    </>
  )
}

export default BookCar
