'use client';
import { useEffect, useState } from 'react';
import Logo from './ui/Logo';

export default function CustomerPortal() {
  const [iframeUrl, setIframeUrl] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [embedToken, setEmbedToken] = useState<string>('')

  const getEmbedToken = async () => {
    setLoading(true)
    try {
      const request = await fetch('http://localhost:3002/api/v2/embed/token', {
        method: 'POST',
        body: JSON.stringify({
          projectId: '51518f2e-6863-4ba9-8381-a5a066485cec',
          // userEmail: "phil@awesome.com"
          userEmail: "brad@awesome.com"
        }),
        headers: {
          Authorization: 'Bearer 1nocAhvJKYJJtzdvChsHuzLU',
          'Content-Type': 'application/json'
        }
      })
      
      const result = await request.json()
      
      setEmbedToken(result.embedToken)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const generateIframeUrl = () => { 
    const url = new URL(`/customer/today/${'51518f2e-6863-4ba9-8381-a5a066485cec'}`, 'http://localhost:3000')

    url.searchParams.append('token', embedToken)

    return url.toString()
  }

  useEffect(() => {
    const url = generateIframeUrl();
  
    setIframeUrl(url);
  }, [embedToken])

  useEffect(() => {
   getEmbedToken() 
  }, [])

  return (
    <section className="bg-black h-[95vh]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 h-full">
        {
          loading ? (
            <div className='border flex flex-col items-center justify-center w-full h-full'>
              <Logo loading={loading} />
            </div>
          ) :
          null
        }

        {iframeUrl && !loading ? (
          <iframe className='border w-full h-full bg-white' src={iframeUrl}/>
        ) : null
        }

      </div>
    </section>
  );
}

