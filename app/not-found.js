import '/app/styles/main.scss';
import { oswald } from './fonts';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="container-fluid vh-100">
      <div className='row w-100 h-100'>
        <div className='col p-0' 
          style={{
            backgroundImage: "url('/images/cover-bg.jpg')",
            backgroundSize: "cover"
          }}
          >
        </div>
        <div className='col centered flex-column p-0'>
          <h1 className={`section-title ${oswald.className}`}>404<br/> Not Found</h1>
          <Link href="/#" className="btn btn-secondary">Back to home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound;