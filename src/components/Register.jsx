import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: '', type: '', show: false });

  const navigate = useNavigate();

  const saveRegisteration = { userName, email, password };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName !== "" && email !== "" && password !== "") {
      showToast('Registration Successful!', 'success');
      localStorage.setItem('user', JSON.stringify(saveRegisteration));
      
      navigate('/login');
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
     

      {/* Modal */}
      <dialog id="registration_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" text-lg text-black font-thin text-center">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered bg-white text-black font-thin"
                required
                onChange={(e) => setUserName(e.target.value)}
                 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white text-black font-thin"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white text-black font-thin"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-active">Register</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>

      {/* Toast notification (uncomment and add Toast component if needed) */}
      {/* {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />} */}
    </>
  );
};

export default Registration;
