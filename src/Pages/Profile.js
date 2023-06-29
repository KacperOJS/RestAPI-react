import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const username = location?.state?.username;

  return (
    <div>
      Zalogowales sie do {username}
    </div>
  );
}

export default Profile;
