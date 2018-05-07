import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active"><Link to={routes.LANDING} class="nav-link">Landing</Link></li>        
    <li class="nav-item"><Link to={routes.HOME} class="nav-link">Home</Link></li>
    <li class="nav-item"><Link to={routes.ACCOUNT} class="nav-link">Account</Link></li>
    <li class="nav-item"><Link to={routes.CUSTOMER} class="nav-link">Customers</Link></li>
    <li class="nav-item"><Link to={routes.TRAINING} class="nav-link">Trainings</Link></li>
    <li class="nav-item"><Link to={routes.CALENDAR} class="nav-link">Calendar</Link></li>   
    <li class="nav-item"><SignOutButton /></li>
   </ul>
  </div>
</nav>

const NavigationNonAuth = () =>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active"><Link to={routes.LANDING} class="nav-link">Landing</Link></li>
    <li class="nav-item"><Link to={routes.SIGN_IN} class="nav-link">Sign In</Link></li>
    </ul>
  </div>
</nav>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
