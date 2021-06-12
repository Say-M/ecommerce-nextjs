import Link from 'next/link'
import { useRef, useState } from 'react'
import Styles from '../../../styles/scss/frontend/Hero.module.scss'

const Category = ({ name }) => {
    //hooks
    const [subcategories, setSubcategories] = useState([
        'Subcategory 1', 'Subcategory 2', 'Subcategory 3', 'Subcategory 4'
    ])
    const subcategoryElement = useRef()
    const [height, setHeight] = useState(0)

    //handle functions
    const handleToggle = () => {
        console.log(subcategoryElement.current.scrollHeight)
        if (height === 0) setHeight(subcategoryElement.current.scrollHeight)
        else setHeight(0)
    }

    return (
        <li><span onClick={handleToggle} className={height > 0 ? Styles.active : ''}>{name}</span>
            <ul ref={subcategoryElement} style={{ height }}>
                {subcategories.map((subcategoryItem, i) => <li key={i}><Link href="#"><a>{subcategoryItem}</a></Link></li>)}
            </ul>
        </li>
    )
}

export default Category
