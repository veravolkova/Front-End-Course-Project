import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import Customer from '../Customer';
// import Calendar from '../Calendar';
// import Training from '../Training';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class HomePage extends Component {

  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props;

    return (
      <div>        
        {/* <BrowserRouter>
          <div>

          <nav class="navbar navbar-dark bg-dark">        
           
            <Link to="customer">Customers</Link>{' '}               
            <Link to="training" >Trainings</Link>{' '} 
            <Link to="calendar">Calendar</Link>{' '}           
           
          </nav>

            <Switch>             
              <Route exact path="/calendar" component={Calendar} />
              <Route path="/customer" component={Customer} />
              <Route path="/training" component={Training} />
            </Switch>
          </div>
        </BrowserRouter>     */}

        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {/* { !!users && <UserList users={users} /> } */}
      </div>
    );
  }
}

// const UserList = ({ users }) =>
//   <div>
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].username}</div>
//     )} 
//   </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);