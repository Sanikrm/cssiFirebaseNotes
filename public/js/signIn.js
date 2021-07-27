function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user)
            window.location.href = 'writeNote.html'
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
}
const username = document.querySelector("#username");
const password = document.querySelector("#password");
function signupwithusername() {
    const email = username.value + '@gmail.com'
console.log(email)
    firebase.auth().createUserWithEmailAndPassword(email, password.value)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential)
            var user = userCredential.user;
            console.log(user);
            // ...
        window.location.href = 'writeNote.html'
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            console.log(email)
            alert(errorMessage)
            // ..
        });
}