$(document).ready(function () {
    $('#submitLogin').off('click').on('click', () => {
        const email = $('#email').val();
        const password = $('#password').val();

        if (email.length > 1 && password.length > 1) { 
            auth.login(email, password).then(({ status }) => { 
                if (status === true) { 
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    window.location.href = 'index.html'
                }
            });
        }
    });
})