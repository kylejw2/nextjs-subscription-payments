export default function Logo({loading}: {loading: boolean}) {
  return (
    <div className="bg-black pt-2 pb-6 w-full">
      <p className={["mt-6 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]", loading ? 'animate-pulse' : ''].join(' ')}>
        {loading ? 'Waiting on' : 'Brought to you by'}
      </p>
      <div className="flex justify-center sm:space-y-0 md:mx-auto md:max-w-2xl">
        <div className="flex items-center justify-center">
          <a href="https://localhost:3000" className='flex flex-col justify-center' target='_blank'>
            <img
              src="/GUIDEcx.webp"
              alt="GUIDEcx logo"
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