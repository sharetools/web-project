// Get data on firestore
db.collection('assinantes').get().then(snapshot => {
    setupGuides(snapshot.docs);
});

// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // Get data on firestore
        db.collection('assinantes').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
    }, err => {
        console.log(err.message)
    });
    } else {
        setupUI();
        setupGuides([]);
    }
});

// Create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('assinantes').add({
        empresa: createForm['title'].value,
        nome: createForm['content'].value,
        assinatura: createForm['plano'].value
    }).then(() => {
        // Close the create modal and reset the form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message)
    });
});

// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            nickname: signupForm['signup-nickname'].value
        });
    }).then(() => {
        // Close the signup modal and reset the form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        });
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
});

// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // Sign in the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // Close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});