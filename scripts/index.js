const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        // Account Info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
                <div>User: ${doc.data().nickname}</div>
                <div>Email: ${user.email}</div>
            `;
            accountDetails.innerHTML = html;
        })
        
        // Toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        // Hide account info
        accountDetails.innerHTML = '';
        // Toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// Setup Guides
const setupGuides = (data) => {
    
    if (data.length) {
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
                <div class="collapsible-header grey lighten-4"><b>Empresa: </b>${guide.empresa}</div>
                <div class="collapsible-body white"><b>Assinante: </b>${guide.nome}</div>
                <div class="collapsible-body white"><b>Plano: </b>${guide.assinatura}</div>
            </li>
        `;
        html += li
    });

    guideList.innerHTML = html;
    } else {
        guideList.innerHTML = '<h3 class="center-align">LOGIN TO VIEW DASHBOARD</h3>'
    }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});
