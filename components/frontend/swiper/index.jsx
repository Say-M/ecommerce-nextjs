import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner from '../../../styles/scss/frontend/Banner.module.scss'

SwiperCore.use([Pagination, Autoplay])

const Slider = ({ setCategoryHeight }) => {
    //hooks
    const bannerElement = useRef()
    const [bannerHeight, setBannerHeight] = useState(0)
    const getBannerWight = () => {
        const bannerWidth = bannerElement.current.offsetWidth
        setBannerHeight(bannerWidth * .5973)
        setCategoryHeight(bannerWidth * .5973)
    }
    useEffect(() => {
        window.addEventListener('resize', e => getBannerWight())
        getBannerWight()
    }, [])

    return (
        <div className={Banner.banner_wrapper}>
            <Swiper ref={bannerElement} spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-1.png" />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-2.jpg" />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-1.png" />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-2.jpg" />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-1.png" />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/">
                        <a className={Banner.banner_image}>
                            <img style={{ height: 'calc(' + bannerHeight + 'px + 1rem)' }} src="/assets/images/banner-2.jpg" />
                        </a>
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className={Banner.mini_banner}>
                <div className={Banner.mini_banner_item}>
                    <img style={{ height: (bannerHeight / 2) + 'px' }} src="/assets/images/banner-1.png" alt="" />
                </div>
                <div className={Banner.mini_banner_item}>
                    <img style={{ height: (bannerHeight / 2) + 'px' }} src="/assets/images/banner-2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider
