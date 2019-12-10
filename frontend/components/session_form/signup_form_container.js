import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);