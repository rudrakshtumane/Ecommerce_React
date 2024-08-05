// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import navImg from '../assets/h-m.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col p-4 bg-white">
        <div className="navbar bg-white ">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>

            <div className="navbar-left hidden lg:flex">
              <ul className="menu menu-horizontal text-l text-black px-1">
                <li><a>customer service</a></li>
                <li><a>newsletter</a></li>
                <li><a>find a store</a></li>
                <li>
                  <details>
                    <summary>app</summary>
                    <ul className="p-0">
                      <li><a>download android</a></li>
                      <li><a>download ios</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-center">
            <img src={navImg} className='w-14 h-10' alt="Logo" />
          </div>

          <div className="navbar-end">
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
                    className="btn btn-link decoration-solid text-[10px] text-black justify-items-start"
                    onClick={() => document.getElementById('registration_modal').showModal()}
                  >
                    Not a member yet? join here!
                  </Link>
                </li>
              </ul>
            </div>
            <div className='btn btn-ghost text-black'>Favorites</div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black">Shopping bag</div>
              <table tabIndex={0} className="table dropdown-content menu bg-white rounded-box z-[1] w-[500px] p-2 shadow text-lg">
                <thead>
                  {/* <h2 className='pl-5 p-5 text-lg'>Your shopping bag is empty</h2> */}
                  <tr>
                    <th className='text-black text-sm'>Order value</th>
                    <th className='text-black text-sm'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Rs. 0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="navbar bg-white flex justify-center">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-5 pl-[450px] text-l text-black font-semibold">
              <li><a>Ladies</a></li>
              <li><a>Men</a></li>
              <li><a>Baby</a></li>
              <li><a>Kids</a></li>
              <li><a>H&M Home</a></li>
              <li><a>Sport</a></li>
              <li><a>Sale</a></li>
              <li><a>Sustainability</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <label className="input input-bordered flex items-center gap-2 bg-white">
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
}

export default Navbar;
