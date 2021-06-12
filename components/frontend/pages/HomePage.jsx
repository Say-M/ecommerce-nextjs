import { Container } from "react-bootstrap"
import Header from "../common/Header"
import Hero from "../home/Hero"
import Product from "../home/Product"
import Styles from '../../../styles/scss/frontend/Product.module.scss'

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <section className={Styles.product}>
                <Container fluid>
                    <div className={Styles.product_header}>
                        <h2>Flash Deals</h2>
                        <div className={Styles.counter_wrapper}>
                            <span>Hurry Up! Offer ends in:</span>
                            <span className={Styles.count}><strong>5</strong> days</span>
                            <span className={Styles.count}><strong>21</strong> hours</span>
                            <span className={Styles.count}><strong>29</strong> mins</span>
                            <span className={Styles.count}><strong>10</strong> secs</span>
                        </div>
                    </div>
                    <Product />
                </Container>
            </section>
        </>
    )
}

export default HomePage
