import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ message: '', type: '', show: false });
  const navigate = useNavigate();

  let userData = localStorage.getItem('user');
  userData = JSON.parse(userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData && email === userData.email && password === userData.password) {
      showToast('Login successful!', 'success');
      navigate('/ProductList');
    } else {
      showToast('Invalid credentials', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(() => setToast({ ...toast, show: false }), 5000);
  };

  return (
    <>
      <dialog id="login_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='
                  text-black font-thin'
                />
              </label>

              <label className="label bg-white">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M4.5 6.5A3.5 3.5 0 0 1 12 6.5V7h.5A1.5 1.5 0 0 1 14 8.5v6A1.5 1.5 0 0 1 12.5 16h-9A1.5 1.5 0 0 1 2 14.5v-6A1.5 1.5 0 0 1 3.5 7H4v-.5ZM6 7V6.5a2 2 0 1 1 4 0V7H6Z"
                    clipRule="evenodd" />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                   className='
                  text-black font-thin'
                />
              </label>
            </div>
            <div className="modal-action">
              <button className="btn btn-active" type="submit">Login</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {toast.show && (
        <div className={`toast toast-${toast.type} fixed top-0 right-0 m-4`}>
          <div className="alert">
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
