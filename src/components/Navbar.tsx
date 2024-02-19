import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">

      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center h-1'>
              <Link href="/" className="h-8 w-32">
                <Image 
                  src="/logo.png"
                  alt="Logo"
                  width={75}
                  height={10}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:block h-0'>
              <div className='flex space-x-4 mt-1'>
                <Link href="/" className="hover:bg-green hover:text-[#42b13e]  rounded-md px-3 py-2 text-sm font-medium">
                  <p><b>Inicio</b></p>
                </Link>
                <Link href="/" className="hover:bg-green hover:text-[#42b13e] rounded-md px-3 py-2 text-sm font-medium">
                  <p><b>Login</b></p>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar