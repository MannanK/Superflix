import NavBar from './navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'; // logout will be a modal?

const msp = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(NavBar));