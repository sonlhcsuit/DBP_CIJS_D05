import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../config/firebase.config'

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}

const db = firebase.firestore()

export function getUser(userId) {
    return db.collection('users').doc(userId).get().then(value => value.data()).catch(e => console.log(e.message))
}

export function signUp(data) {
    return db.collection('users').add(data)
        .then(doc => {
            console.log(`${doc.id} is created`)
        })
        .catch(err => {
            console.log(err.message)
        })
}

export function addTodo(newContent) {
    console.log(newContent)
    return db.collection('todos').add(newContent)
        .then((doc) => {
            return doc.id
        }).catch(err => {
            console.log(err.message)
        })
}
export function removeTodo(todoId) {
    return db.collection("todos").doc(todoId).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (err) {
        console.error(err.message);
    });

}

export function updateTodo(newContent) {
    return db.collection('todos').doc(newContent.id).set(newContent)
        .then((doc) => {
            console.log(`${newContent.id} is updated`)
        }).catch(err => {
            console.log(err.message)
        })
}


export function login(username, password) {
    let userRef = db.collection('users')
    userRef.get()
        .then(querySnapshot => {
            let status = false
            querySnapshot.forEach(doc => {
                let data = doc.data()
                if (data.username === username && data.password === password) {
                    localStorage.setItem("userId", doc.id)
                    status = true
                }
            })
            if (status) alert('Login Succes')
            if (!status) alert('Login Fail')
            window.location.reload(false)
        })

}
export function getTodoOf(userId) {
    return db.collection('todos').where("userId", '==', userId)
        .get()
        .then(query => {
            let todos = []
            query.forEach(doc => {
                todos.push({ ...doc.data() })
            })
            console.log(todos)
            return todos
        })
}