import '../styles/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <div className='h-screen bg-gray-900 text-gray-100 '>
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
