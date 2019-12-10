import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, deleteSessionErrors } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  deleteSessionErrors: () => dispatch(deleteSessionErrors())
});

export default connect(msp, mdp)(SessionForm);