import { useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';

const LoadingComponent = () => {
  const [loading] = useState(true);

  return (
    <div className="sweet-loading">
      <BarLoader size={150} color={'gray'} loading={loading} />
    </div>
  );
};

export default LoadingComponent;
