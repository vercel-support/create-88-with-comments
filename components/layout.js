import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Nav from './navbar'


export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen bg-grey-200 dark:bg-grey-700">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
