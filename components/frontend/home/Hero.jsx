import { Container } from 'react-bootstrap'
import Slider from '../swiper'
import Styles from '../../../styles/scss/frontend/Hero.module.scss'
import { useState } from 'react'
import Category from './Category'


const Hero = () => {
    //hooks
    const [categoryHeight, setCategoryHeight] = useState(0)
    const [categories, setCategories] = useState([
        'Apparel & accessories', 'Style & fashion', 'Home & garden', 'Sporting goods', 'Health & wellness', 'Medical health', 'Children & infants', 'Pets & pet supplies', 'Electronic', 'Home improvement', 'Others'
    ])

    return (
        <section className={Styles.hero}>
            <Container fluid>
                <div className={Styles.hero_wrapper}>
                    <div className={Styles.category}>
                        <ul className={Styles.category_lists} style={{ maxHeight: 'calc(' + categoryHeight + 'px + 1rem)' }}>
                            <li>All categories</li>
                            {categories.map((categoryItem, i) => <Category key={i} name={categoryItem} />)}
                        </ul>
                    </div>
                    <div className={Styles.banner}>
                        <Slider setCategoryHeight={setCategoryHeight} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero
