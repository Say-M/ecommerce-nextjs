import Layout from '../components/common/Layout'
import '../styles/bootstrap/bootstrap.scss'
import '../styles/scss/reset.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
