import { IconPhone } from '@tabler/icons-react'
import { HeroPage } from '../components'

function Team() {
  const teamPpl = [
    { img: '/src/images/team/1.png', name: 'Luke Miller', job: 'Salesman' },
    {
      img: '/src/images/team/2.png',
      name: 'Michael Diaz',
      job: 'Business Owner',
    },
    { img: '/src/images/team/3.png', name: 'Briana Ross', job: 'Photographer' },
    {
      img: '/src/images/team/4.png',
      name: 'Lauren Rivera',
      job: 'Car Detailist',
    },
    { img: '/src/images/team/5.png', name: 'Martin Rizz', job: 'Mechanic' },
    { img: '/src/images/team/6.png', name: 'Caitlyn Hunt', job: 'Menager' },
  ]
  return (
    <>
      <section className='team-page'>
        <HeroPage name='Our Team' />
        <div className='cotnainer'>
          <div className='team-container'>
            {teamPpl.map((ppl, id) => (
              <div key={id} className='team-container__box'>
                <div className='team-container__box__img-div'>
                  <img src={ppl.img} alt='team_img' />
                </div>
                <div className='team-container__box__descr'>
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team
