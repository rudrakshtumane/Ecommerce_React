import { Link } from 'react-router-dom';
import navImg from '../assets/h-m.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col bg-white">
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-white rounded-box z-[1]">
                  <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black">Sign in</div>
              <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link to="/login"
                    className="btn btn-active text-white"
                    onClick={() => document.getElementById('login_modal').showModal()}
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/Register"
                    className="btn btn-link text-sm text-black"
                    onClick={() => document.getElementById('registration_modal').showModal()}
                  >
                    Not a member yet? Join here!
                  </Link>
                </li>
              </ul>
            </div>
            <div className='btn btn-ghost text-black'>Favorites</div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black">Shopping Bag</div>
              <div tabIndex={0} className="dropdown-content bg-white rounded-box z-[1] w-[300px] p-2 shadow text-sm">
                <p>Your shopping bag is empty</p>
              </div>
            </div>
              </ul>
            </div>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal text-black text-lg px-1">
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Find a Store</a></li>
                <li tabIndex={0}>
                  <details>
                    <summary>App</summary>
                    <ul className="p-2 bg-white">
                      <li><a href="#">Download Android</a></li>
                      <li><a href="#">Download iOS</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/"><img src={navImg} className='w-14 h-10' alt="Logo" /></Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black">Sign in</div>
              <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link to="/login"
                    className="btn btn-active text-white"
                    onClick={() => document.getElementById('login_modal').showModal()}
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/Register"
                    className="btn btn-link text-sm text-black"
                    onClick={() => document.getElementById('registration_modal').showModal()}
                  >
                    Not a member yet? Join here!
                  </Link>
                </li>
              </ul>
            </div>
            <div className='btn btn-ghost text-black'>Favorites</div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black">Shopping Bag</div>
              <div tabIndex={0} className="dropdown-content bg-white rounded-box z-[1] w-[300px] p-2 shadow text-sm">
                <p>Your shopping bag is empty</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar bg-white flex justify-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-5 text-lg text-black font-semibold">
              <li><a href="#">Ladies</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Baby</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">H&M Home</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          <div className="navbar-end w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full lg:w-auto">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
