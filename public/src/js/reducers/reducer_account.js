import { DO_LOGIN } from '../actions/userActions';

export default function reducer( state={}, action ) {
	
	switch( action.type ){

		case 'DO_LOGIN_FAILURE': {
			return { ...state, error: action.payload, loggedin: 'false' }

		}

		case 'DO_LOGIN_SUCCESS': {
			return { ...state, success: action.payload, loggedin: 'true' }

		}

	}

	return state
}