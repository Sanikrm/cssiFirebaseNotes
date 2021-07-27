window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user)
            console.log('logged in');
            googleUser = user;
            console.log(googleUser)
            if(user.displayName){
            alert('Welcome ' + user.displayName)
            }else {
                alert("You successfully signed in with email!")
            }
         } else {
            window.location.href = 'index.html'
        }
    })
}
const noteTitle = document.querySelector("#noteTitle");
const noteText = document.querySelector("#noteText");
const labels = document.querySelector("#labels");
function handleNoteSubmit() {
    let date = new Date();
    console.log(date);
    alert("Posted Note!")
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value,
        date: String(date),
        labels: labels.value
    });
}