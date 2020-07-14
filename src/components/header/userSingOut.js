import { auth } from '../../firebase/firebase.utils';

const userSignOut = () => {
    auth.signOut()
        .then(resolve => {
            console.log(resolve);
            console.log('In resolve portion...');
            // return success 
        })
        .catch(error => {
            console.log(error);
            console.log('In error portion...');
            // return error or throw error 
        });
}

export default userSignOut;