import { auth } from '../../firebase/firebase.utils';

const userSignOut = () => {
    auth.signOut()
        .then(resolve => {
            console.log(resolve);
            // return success 
        })
        .catch(error => {
            console.log(error);
            // return error or throw error 
        });
}

export default userSignOut;