import apiHome from './endpoints/home' 
import apiRegister from './endpoints/register' 
import apiLogin from './endpoints/login' 

const setRoutes = ( apiRoutes ) => {

	apiRoutes.get('/', apiHome);
	apiRoutes.post('/register', apiRegister);
	apiRoutes.post('/login', apiLogin);

	return apiRoutes;

}

export default setRoutes;