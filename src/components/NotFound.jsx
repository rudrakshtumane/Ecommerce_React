import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link to="/" className="mt-6 btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
