import axios from 'axios'
import config from '../../../../config'

export const doLogin = (values) => {

	return function(dispatch) {
	
		var endpoint_url = config.api_url + '/login/';

		dispatch({
			type : 'DO_LOGIN',
			payload: values
		})
	
		axios.post( endpoint_url, values )
			 .then((response) =>{
			 	dispatch({
			 		type : 'DO_LOGIN_SUCCESS',
			 		payload: response.data
			 	})
			 })
			 .catch((err) => {
			 	dispatch({
			 		type : 'DO_LOGIN_FAILURE',
			 		payload: err
			 	})
			 })
			 	
	}

}

export const doRegister = (values) => {

	return function(dispatch) {
	
		var endpoint_url = config.api_url + '/register/';

		dispatch({
			type : 'DO_REGISTER',
			payload: values
		})
	
		axios.post( endpoint_url, values )
			 .then((response) =>{
			 	dispatch({
			 		type : 'DO_REGISTER_SUCCESS',
			 		payload: response.data
			 	})
			 })
			 .catch((err) => {
			 	dispatch({
			 		type : 'DO_REGISTER_FAILURE',
			 		payload: err
			 	})
			 })
			 	
	}

}