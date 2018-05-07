import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type="button"
    class="btn btn-primary"    
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
