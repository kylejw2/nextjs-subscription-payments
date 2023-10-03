'use client';

import Button from '@/components/ui/Button';
// import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingDots from './ui/LoadingDots/LoadingDots';


export default function Pricing() {
  const [projects, setProjects] = useState([{name: 'Swig Pre-Onboarding', id: 'a45f83e1-d258-490e-9852-f3ae266f77fa'}, {name: 'Swig Onboarding', id: 'a45f83e1-d258-490e-9852-f3ae266f77fa'}, {name: 'Swig Post-Onboarding', id: 'a45f83e1-d258-490e-9852-f3ae266f77fa'}])

  const [selectedProjectId, setSelectedProjectId] = useState<null | string>(null)
  const [iframeUrl, setIframeUrl] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [embedToken, setEmbedToken] = useState<string | null>(null)

  const getEmbedToken = async () => {
    setLoading(true)
console.log(selectedProjectId)
    try {
      const request = await fetch('http://localhost:3002/api/v2/embed/tokens', {
        method: 'POST',
        body: JSON.stringify({
          projectId: selectedProjectId,
          userEmail: "gcxtest+none+2f165294-7072-4b0a-af8a-b71e7dc281bf@guidecx.io"
        }),
        headers: {
          Authorization: 'Bearer 1nocAhvJKYJJtzdvChsHuzLU',
          'Content-Type': 'application/json'
        }
      })
      
      const result = await request.json()
      
      console.log(result)
      
      setEmbedToken(result.embedToken)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  const generateIframeUrl = () => {
    if (!embedToken) return ''
    
    const url = new URL(`/customer/embed/today/${selectedProjectId}`, 'http://localhost:3000')

    url.searchParams.append('token', embedToken)

    return url.toString()
  }

  useEffect(() => {
    const url = generateIframeUrl();
  
    setIframeUrl(url);
  }, [embedToken])

  useEffect(() => {
    if (!selectedProjectId) return

    getEmbedToken()
  }, [selectedProjectId])

  return (
    <section className="bg-black h-[70vh]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center gap-48 mb-4">
          {projects.map(project => (
            <div className="text-xl font-bold text-zinc-400 sm:text-center cursor-pointer" onClick={() => setSelectedProjectId(project.id)}>
              {project.name}
            </div>
          ))}
        </div>

        {/* <p>{iframeUrl}</p> */}
        {
          loading ? (
            <div className='border flex flex-col items-center justify-center w-full h-full'>
              {/* <LoadingDots /> */}
              <LogoCloud loading={loading} />
            </div>
          ) :
          null
        }

        {selectedProjectId && iframeUrl && !loading ? (
          <iframe className='border w-full h-full' src={iframeUrl}/>
        ) : null
        }

      </div>

      {loading ? null : (<LogoCloud loading={false} />)}
    </section>
  );
}

function LogoCloud({loading}: {loading: boolean}) {
  return (
    <div>
      <p className={["mt-16 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]", loading ? 'animate-pulse' : ''].join(' ')}>
        {loading ? 'Waiting on' : 'Brought to you by'}
      </p>
      <div className="flex justify-center sm:space-y-0 md:mx-auto md:max-w-2xl">
        <div className="flex items-center justify-center">
          <a href="https://localhost:3000" aria-label="github.com Link" className='flex flex-col justify-center' target='_blank'>
            <img
              src="/GUIDEcx.webp"
              alt="github.com Logo"
              className="h-24 text-white"
            />
            <span className="ml-[10px] mt-[-10px] uppercase text-white text-center font-bold tracking-[0.15em] font-mono">
              Labs
              <span className='animate-blink'>_</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
