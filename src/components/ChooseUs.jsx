import MainImg from '../images/chooseUs/main.png'
import { IconChevronRight } from '@tabler/icons-react'
import { textLeft, textRight } from '../mock/_chooseus'

function ChooseUs() {
  return (
    <>
      <section className='choose-section'>
        <div className='container'>
          <div className='choose-container'>
            <img
              className='choose-container__img'
              src={MainImg}
              alt='car_img'
            />
            <div className='text-container'>
              <div className='text-container__left'>
                <h4>Why Choose Us</h4>
                <h2>{textLeft.title}</h2>
                <p>{textLeft.text}</p>
                <a href='#home'>
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className='text-container__right'>
                {textRight.map((_, i) => (
                  <div key={i} className='text-container__right__box'>
                    <img src={_.image} alt='car-img' />
                    <div className='text-container__right__box__text'>
                      <h4>{_.title}</h4>
                      <p>{_.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChooseUs
