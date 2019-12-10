import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, deleteSessionErrors } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user)),
  deleteSessionErrors: () => dispatch(deleteSessionErrors())
});

export default connect(msp, mdp)(SessionForm);