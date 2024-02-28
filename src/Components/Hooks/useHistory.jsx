import React from 'react';
// import { useHistory } from 'react-router-dom';

const useHistory = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/new-route');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to new route</button>
    </div>
  );
};

export default useHistory;