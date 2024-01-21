/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  IconInfoCircleFilled,
  IconX,
  IconMapPinFilled,
} from '@tabler/icons-react'

const BookingModal = ({
  modal,
  setModal,
  pickTime,
  dropTime,
  pickUp,
  dropOff,
  imgUrl,
  carType,
}) => {
  // modal infos
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipCode] = useState('')

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleZip = (e) => {
    setZipCode(e.target.value)
  }

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault()
    setModal(!modal)
    const doneMsg = document.querySelector('.booking-done')
    doneMsg.style.display = 'flex'
  }

  return (
    <div className={`booking-modal ${modal ? 'active-modal' : ''}`}>
      {/* title */}
      <div className='booking-modal__title'>
        <h2>Complete Reservation</h2>
        <IconX
          onClick={() => {
            setModal(false)
          }}
        />
      </div>
      {/* message */}
      <div className='booking-modal__message'>
        <h4>
          <IconInfoCircleFilled /> Upon completing this reservation enquiry, you
          will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      {/* car info */}
      <div className='booking-modal__car-info'>
        <div className='dates-div'>
          <div className='booking-modal__car-info__dates'>
            <h5>Location & Date</h5>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Pick-Up Date & Time</h6>
                <p>
                  {pickTime} /{' '}
                  <input type='time' className='input-time'></input>
                </p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Drop-Off Date & Time</h6>
                <p>
                  {dropTime} /{' '}
                  <input type='time' className='input-time'></input>
                </p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Pick-Up Location</h6>
                <p>{pickUp}</p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Drop-Off Location</h6>
                <p>{dropOff}</p>
              </div>
            </span>
          </div>
        </div>
        <div className='booking-modal__car-info__model'>
          <h5>
            <span>Car -</span> {carType}
          </h5>
          {imgUrl && <img src={imgUrl} alt='car_img' />}
        </div>
      </div>
      {/* personal info */}
      <div className='booking-modal__person-info'>
        <h4>Personal Information</h4>
        <form className='info-form'>
          <div className='info-form__2col'>
            <span>
              <label>
                First Name <b>*</b>
              </label>
              <input
                value={name}
                onChange={handleName}
                type='text'
                placeholder='Enter your first name'
              ></input>
              <p className='error-modal'>This field is required.</p>
            </span>

            <span>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type='text'
                placeholder='Enter your last name'
              ></input>
              <p className='error-modal '>This field is required.</p>
            </span>

            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type='tel'
                placeholder='Enter your phone number'
              ></input>
              <p className='error-modal'>This field is required.</p>
            </span>

            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type='number'
                placeholder='18'
              ></input>
              <p className='error-modal '>This field is required.</p>
            </span>
          </div>

          <div className='info-form__1col'>
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type='email'
                placeholder='Enter your email address'
              ></input>
              <p className='error-modal'>This field is required.</p>
            </span>

            <span>
              <label>
                Address <b>*</b>
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type='text'
                placeholder='Enter your street address'
              ></input>
              <p className='error-modal '>This field is required.</p>
            </span>
          </div>

          <div className='info-form__2col'>
            <span>
              <label>
                City <b>*</b>
              </label>
              <input
                value={city}
                onChange={handleCity}
                type='text'
                placeholder='Enter your city'
              ></input>
              <p className='error-modal'>This field is required.</p>
            </span>

            <span>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                value={zipcode}
                onChange={handleZip}
                type='text'
                placeholder='Enter your zip code'
              ></input>
              <p className='error-modal '>This field is required.</p>
            </span>
          </div>

          <span className='info-form__checkbox'>
            <input type='checkbox'></input>
            <p>Please send me latest news and updates</p>
          </span>

          <div className='reserve-button'>
            <button onClick={confirmBooking}>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BookingModal
