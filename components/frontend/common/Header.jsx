import { Container, FormControl, InputGroup } from "react-bootstrap"
import HeaderStyles from '../../../styles/scss/frontend/Header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className={HeaderStyles.header + ' shadow-sm'}>
                <div className={HeaderStyles.top_header}>
                    <Container fluid>
                        <div className={HeaderStyles.top_header_wrapper}>
                            <div className={HeaderStyles.left}>
                                <span><i className="fas fa-phone-alt"></i>+8801515-675571</span>
                                <span><i className="fas fa-envelope"></i>codersayem089@gmail.com</span>
                            </div>
                            <div className={HeaderStyles.right}>
                                <Link href="/login"><a>Sign in</a></Link>
                                <Link href="/signup"><a>Sign Up</a></Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={HeaderStyles.main}>
                    <Container fluid>
                        <div className={HeaderStyles.main_wrapper}>
                            <div className={HeaderStyles.left}>
                                <Link href="/"><a className={HeaderStyles.logo}>E-bazar</a></Link>
                            </div>
                            <div className={HeaderStyles.center}>
                                <div className={HeaderStyles.search}>
                                    <InputGroup>
                                        <FormControl size="lg" placeholder="Search anything..." />
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                                <div className={HeaderStyles.menu}><i className="fas fa-bars"></i></div>
                            </div>
                            <div className={HeaderStyles.right}>
                                <ul>
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <span className={HeaderStyles.icon}><i className="far fa-user"></i></span>
                                                <span>
                                                    <p>Sign in</p>
                                                    <p>Create an account</p>
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <span className={HeaderStyles.icon}><i className="far fa-heart"></i></span>
                                                <span>
                                                    <p>Favorite</p>
                                                    <p>My wishlist</p>
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <span className={HeaderStyles.number}>0</span>
                                                <span className={HeaderStyles.icon}><i className="fas fa-shopping-cart"></i></span>
                                                <span>
                                                    <p>My cart</p>
                                                    <p>0.00 $</p>
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    )
}

export default Header
