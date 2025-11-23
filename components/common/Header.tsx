import {CardSim} from 'lucide-react';
import NavLink from './NavLink'
const Header = () =>{
  const isLoggedIn = false;
  return <nav className="container flex items-center justify-between py-4 px-2 lg:px-6 mx-auto sticky top-0">
      <div className="flex ">
          <NavLink href='/' className="flex items-center gap-1 lg:gap-2 shrink-0">
            <CardSim className="inline-block  w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />  
            <span className="font-bold text-lg hover:text-rose-500 lg:text-xl text-gray-900 ">FlashCardAI</span>
          </NavLink>
      </div>

      <div className="flex justify-between gap-6 lg:gap-8">
          <NavLink href={'/#pricing'}>Pricing</NavLink>
          {isLoggedIn&& <NavLink href={'/dashboard'}>Summaries</NavLink>}
      </div>
      <div className="flex justify-between gap-6 lg:gap-8">
        {
          isLoggedIn ?
          (<div>
              <NavLink href={'/upload'}>Upload PDF</NavLink>
          </div>)
          :
          ( <div>
               <NavLink href={'/sign-in'}>Sign In</NavLink>

          </div>)
        }
          
         
      </div>
  </nav>
}
export default Header;