import { db } from './firebase.init'


export function subscribeTodo(userId, callback) {
    // subscribe to todos of an user
    console.log(`subscribe to ${userId}`)
    return db.collection('todos').where('userId', '==', userId)
        .onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(doc => {
                switch (doc.type) {
                    case 'added':
                        callback(doc.doc.data(), 'added')
                        break;
                    case 'modified':
                        callback(doc.doc.data(), 'modified')
                        break;
                    case 'removed':
                        callback(doc.doc.data(), 'removed')
                        break;
                }
            })
        })
}
export function addTodo(todo, user) {
    const { title, content } = todo
    const { id } = user

    return db.collection('todos').add({
        content,
        created:new Date(Date.now()).toDateString(),
        isComplete:false,
        title,
        userId:id
    })
        .then((doc) => {
            return doc.id
        })
        .then(id=>{
            return db.collection('todos').doc(id).update({id:id})
        })
        .catch(err => {
            console.log(err.message)
        })
}
export function removeTodo(todo) {
    return db.collection("todos").doc(todo.id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (err) {
        console.error(err.message);
    });

}

export function updateTodo(todo) {
    return db.collection('todos').doc(todo.id).set(todo)
        .then((doc) => {
            console.log(`${todo.id} is updated`)
        }).catch(err => {
            console.log(err.message)
        })
}
