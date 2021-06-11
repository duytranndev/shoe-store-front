import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Image from '../../atoms/image'

type HomeTemplateProps = {
  urlImages: []
  products?: []
}

const HomeTemplate = ({ urlImages, products }: HomeTemplateProps): JSX.Element => {
  return (
    <div className='home-content'>
      <div className='intro'>
        {urlImages.map((item: { url: string }, index: number) => (
          <div key={index} className={`block block-${index + 1}`} style={{ backgroundImage: `URL(${item.url})` }}>
            <div className='content'>
              <div className='collection'>AMAZING WITH LEATHER JACCKET</div>
              <div className='title'>NEW ARRIVALS</div>
              <p className='description'>
                Over +1000 new product was available on our store. Let come here and grab it. You certain will love it.
              </p>
              <div className='btn-group'>
                <Link to='' className='shop'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className='section-featured'>
        <div className='title'>
          <h2>featured products</h2>
          <div className='underline'></div>
        </div>
        <div className='featured-content'>
          {products?.map((item: { image: string; title: string; price: string }, index) => {
            return (
              <div className='item' key={index}>
                <div className='container'>
                  <Image src={item.image} />
                  <div className='icon'>
                    <Link to=''>
                      <FaSearch />
                    </Link>
                  </div>
                </div>
                <footer>
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                </footer>
              </div>
            )
          })}
        </div>
        <Link to='' className='btn'>
          all products
        </Link>
      </section>
      <div className='news'></div>
    </div>
  )
}
export default HomeTemplate
