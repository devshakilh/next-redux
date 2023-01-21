import { useSelector } from 'react-redux';

import Login from '../Login';



const PrivateRoute = () => {
    const logindata: any = useSelector(loginUser);

    const loginStatus: any = logindata.payload.showReducer.loginStatus

    if (loginStatus) {
        return <detailspage />
    }

    return <Login />



};

export default PrivateRoute;
