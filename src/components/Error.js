import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>An Error Occurred</h1>
      <button
        type="submit"
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default Error;
