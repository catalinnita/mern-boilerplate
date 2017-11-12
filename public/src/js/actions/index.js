import axios from 'axios'
import config from '../../../../config'

export const DO_LOGIN = 'do_login';
export const DO_REGISTER = 'do_register';

export const doLogin = (values) => {

	var endpoint_url = config.api_url + '/login/';

	const request = axios.post( endpoint_url, values );

	console.log(request);

	return {
		type: DO_LOGIN, 
		payload: request
	}

}

export const doRegister = (values) => {

	var endpoint_url = config.api_url + '/register/';

	const req = {
		method: 'post',
		url: endpoint_url,
		data: {
		  email: values.email,
		  password: values.password
		}
     }
    
    console.log(req);
	const request = axios(req);

	return {
		type: DO_REGISTER,
		payload: request
	}

}