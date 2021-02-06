import { db, auth } from './firebase.init'



export function signUpGoogle({ }) {
    let provider = new auth.GoogleAuthProvider()
    auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user,token)
            console.log(user.toJSON())
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}







export function signUpUltis({
    email,
    name,
    username,
    password,
}) {
    // check if username,email are taken
    return db.collection('users').where('username', '==', username).get()
        .then(qs => {
            if (!qs.empty) throw new Error('Your username was taken!')
            return db.collection('users').where('email', '==', email).get()
        })
        .then(qs => {
            if (!qs.empty) throw new Error('Your email has been registered!')
            return db.collection('users').add({
                email,
                name,
                username,
                password,
                joinDate: new Date().toDateString(),
                avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/mindx-cijs.appspot.com/o/pokeball.png?alt=media&token=5ed18a00-8ab0-4737-8d21-996a35640673',
                dob: null,
            })
        })
        .then(data => {
            return data.id
        })
        .catch(error => {
            // console.error(error)
            throw error

        })
}
export function signInUltis({
    username,
    password
}) {
    let type = 'username'
    if (username.indexOf('@') !== -1) {
        type = 'email'
    }
    return db.collection('users').where(type, '==', username).limit(1).get()
        .then(querySnapshot => {
            if (querySnapshot.empty) throw new Error('Username or email were not existed!')
            const users = []
            querySnapshot.forEach(doc => {
                users.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            let user = users[0]
            if (user.password === password) {
                delete user.password
                return user
            } else {
                throw new Error('Password does not match with username or email!')
            }
        })
        .catch(error => {
            console.error(error)
            throw error
        })
}