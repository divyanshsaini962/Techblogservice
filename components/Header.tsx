import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// other imports 
import { useSession, signIn, signOut } from "next-auth/react"

import Link from "next/link";
import Image from "next/image";
import logoDark from "../public/images/logoDark.png";



export default function Navbar() {
  const { data: session } = useSession();
  const [navigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'Blog', href: './blog', current: false },
    { name: 'About', href: './about', current: false },
    { name: 'Privacy', href: './privacy', current: false },
    { name: 'Contact', href: './contact', current: false }
  ]);
  
  return (
    <Disclosure as="nav" className="bg-white ">

      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-around ">

              {/* Logo */}
              <Link href="/">
                 <div>
                  <Image width={200} height={200} src={logoDark} alt="logoDark" />
                </div>
             </Link>

              

              {/* Navigation links for desktop */}
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4 ">
                  
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-base uppercase font-semibold ${
                        item.current ? 'bg-secondaryColor  text-white' : 'text-cyan-700 hover:bg-secondaryColor hover:text-white'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}

                </div>
              </div>
                                        {/* user login */}
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={
                session 
                ? session? .user! .image!
                :"https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              }
              alt="logo"
            />
            <p className="text-sm font-semibold text-slate-600	">
               {session ? session?.user!.name : "Hello Stranger"}
              </p>
          </div>
          {
            session ? ( <button onClick={()=> signOut()} 
            className="uppercase text-sm text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign Out
            </button>
            ):(
            <button onClick={()=> signIn()} 
            className="uppercase text-sm text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
            )
          }
          
        </div> 

        {/* Hamburger button for mobile menu */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-700 
              hover:bg-secondaryColor hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white 
              lg:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button> 
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-semibold uppercase ${
                    item.current ? 'bg-secondaryColor text-white' : 'text-cyan-700 hover:bg-secondaryColor hover:text-white'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}

            </div>
          </Disclosure.Panel>
          
        </>
      )}
     
    </Disclosure>
  );
}
















































































































































































// const Header = () => {
//   const { data:session } = useSession();
  
//   // Hamburger onlick function
 
//   return (
//     <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4 ">
//       <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
//         <Link href="/">
//           <div>
//             <Image width={200} height={200} src={logoDark} alt="logoDark" />
//           </div>
//         </Link>
//         <div>
//           <ul className="md:ml-8 md:my-0 my-7 lg:inline-flex gap-8 uppercase text-sm font-semibold">
//           <Link href="/"><li className="headerLi">Home</li></Link> 
//           <Link href={`/blog`}><li className="headerLi">Blog</li></Link>
//            <Link href={`/privacy`}><li className="headerLi">Privacy</li></Link>
//            <Link href={`/about`}><li className="headerLi">About</li></Link>
//             <Link href={`/contact`}><li className="headerLi">Contact</li></Link>
//           </ul>
//         </div>
    //     <div className="flex items-center gap-8 text-lg">
    //       <div className="flex items-center gap-1">
    //         <img
    //           className="w-8 h-8 rounded-full"
    //           src={
    //             session 
    //             ? session? .user! .image!
    //             :"https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
    //           }
    //           alt="logo"
    //         />
    //         <p className="text-sm font-medium">
    //            {session ? session?.user!.name : "Hello Stranger"}
    //           </p>
    //       </div>
    //       {
    //         session ? ( <button onClick={()=> signOut()} 
    //         className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
    //         Sign Out
    //         </button>
    //         ):(
    //         <button onClick={()=> signIn()} 
    //         className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
    //         Sign In
    //       </button>
    //         )
    //       }
          
    //     </div>
    //   </div>
    // </div>

    
//   );
// };

// export default Header;
