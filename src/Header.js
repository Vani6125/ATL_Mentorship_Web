import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
function Header(){
    return(
    
            <header className="bg-[linear-gradient(to_right,_#fbfcfc_40%,_#abebc6_70%,_#f9e79f_100%)] text-black  p-4 flex justify-between items-center border-b-2 border-black">
                  <div className=" flex items-center">
                <img src="logo192.png" alt="Atl Logo" className="h-10 w-10 mr-3"></img>
                <h1 className=" font-bold from-neutral-950 text-2xl">ATL Mentorship</h1>
                 
                </div>
             
      <nav className="flex items-center space-x-14 text-2xl font-semibold">
      <Link to="/" className="hover:underline  ">Home</Link>
      <Link to="/" className="hover:underline ">Dashboard</Link>
      <Link to="/" className="hover:underline  ">About</Link>
       <Link to="/Support"className="hover:underline  ">Support</Link>
       <button className='bg-black rounded-full text-white font-semibold px-3 py-2 text-2xl'>Login</button>
    </nav>
            </header>
        
           
    );
}
export default Header;