
import { FaUser,  FaLock } from "react-icons/fa";
import styles from '../style.module.css';
import Link from "next/link";


export default function page() {
  return (
    <main className={`flex justify-center items-center  min-h-screen ${styles.bromo}`}>
        <div className={`w-96 text-white rounded p-10 ${styles.background}`}>
          <form action=".">
            <h1 className=" text-center font-bold text-2xl ">Login</h1>
            <div className='relative w-full h-12  my-6'>
              <input type="text" placeholder='username'   required className={`w-full h-full bg-transparent border-none outline-none ${styles.input}`}/>
              <FaUser className="absolute right-5 top-5 translate-x-2/4	text-base"/>
            </div>
            <div className='relative w-full h-12  my-6'>
              <input type="password" placeholder='password' required className={`w-full h-full bg-transparent border-none outline-none ${styles.input}`}/>
              <FaLock className="absolute right-5 top-5 translate-x-2/4	text-base"/>
            </div>
            <div className='flex justify-between text-sm my-0 '>
              <label><input type="checkbox" className=" accent-white mr-1"/>Remember me </label>
              <a href="#" className="text-white no-underline hover:underline">Forgot password?</a>
            </div>
            <button type='submit' className={`w-[100%] h-11 bg-white text-black border-none outline-none mt-5 ${styles.button}`}>Login</button>

            <div className=" text-xs text-center mt-5">
            <p>Don&apos;t have an account <Link href="/started" className="text-white font-bold hover:underline">Register</Link></p>            </div>
          </form>
        </div>
        </main>
































    // <main className={`bg-slate-600 w-[60%] m-auto ${style.login}`}>
    //     <ul className='m-auto ml-60 mt-40 mb-40 h-100'>
    //     <li className='p-[30px]'>
    //       <label htmlFor="email">Email address</label><br />
    //       <input type="email" name='email' id='email' placeholder='example@gmail.com' required  className=' border-b-2 border-b-yellow-500 bg-slate-800 '/>
    //     </li>
    //     <li  className='p-[30px]'>
    //       <label htmlFor="pwd">Password</label><br />
    //       <input type="pwd" name='pwd' id='pwd' placeholder='password'className='outline-none border-b-2 border-b-yellow-500 bg-slate-800' required/>
    //     </li>
    //     <li  className='p-[30px]'>
    //       <label htmlFor="name">Fullname</label><br />
    //       <input type="name" name='name' id='name' placeholder='Fullname'className='outline-none border-b-2 border-b-yellow-500 bg-slate-800' required/>
    //     </li>
    //     </ul>
    // </main>
  )
}
