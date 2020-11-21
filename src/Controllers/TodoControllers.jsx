import firebase from 'firebase/app'
// import {} from 'firebase/'
import 'firebase/firestore'
import { firebaseConfig } from '../config/firebase.config'

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}

const db = firebase.firestore()


export function login(username,password){
    console.log(username,password)
    let userRef = db.collection('users')
    userRef.get()
    .then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data()
            if(data.username===username && data.password==password){
                localStorage.setItem("userId",doc.id)
                window.location.reload(false)
            } 


        })
    })

}
export function getTodoOf(userId){
    return db.collection('todos').where("userId",'==',userId)
    .get()
    .then(query=>{
        let todos = []
        query.forEach(doc=>{
            todos.push(doc.data())
        })
        return todos
    })
}