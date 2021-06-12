import Link from 'next/link'
import { Badge } from 'react-bootstrap'
import Styles from '../../../styles/scss/frontend/Product.module.scss'

const Product = () => {
    return (
        <div className={Styles.product_item}>
            <div className={Styles.image}>
                <Badge variant="success">New</Badge>
                <img src="https://mageblueskytech.com/dukamarket/media/catalog/product/cache/3a762b5998ca4bc48cb28c4930088312/1/4/14.jpg" alt="" />
            </div>
            <Link href="/"><a><h6>I-phone 10 pro max</h6></a></Link>
            <p>Electronic Mobile</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <strong>$18.90</strong>
        </div>
    )
}

export default Product
