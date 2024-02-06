import { IconPhone } from '@tabler/icons-react'
import { HeroPage, Testimonials } from '../components'

function TestimonialsPage() {
  return (
    <>
      <section className='testimonial-page'>
        <HeroPage name='Testimonials' />
        <Testimonials />
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

export default TestimonialsPage
