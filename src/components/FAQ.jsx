import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'
import { que as faq } from '../mock/_faq'

function Faq() {
  const [activeQ, setActiveQ] = useState(0)

  return (
    <>
      <section className='faq-section'>
        <div className='container'>
          <div className='faq-content'>
            <div className='faq-content__title'>
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className='all-questions'>
              {faq.map((data, i) => (
                <div key={i} className='faq-box'>
                  <div
                    onClick={() => setActiveQ(i)}
                    className={`faq-box__question  ${
                      activeQ == i ? 'active-question' : ''
                    }`}
                  >
                    <p>
                      {i + 1}. {data.que}?
                    </p>
                    <IconChevronDown />
                  </div>
                  <div
                    onClick={() => setActiveQ(i)}
                    className={`faq-box__answer ${
                      activeQ == i ? 'active-answer' : ''
                    }`}
                  >
                    {data.ans}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
