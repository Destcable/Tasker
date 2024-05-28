const auth = {
    login: (email, password) => {
        const data = JSON.stringify({
            "email": email,
            "password": password
        });
        
        return $.ajax(
            apiMethodPost('/login', data)
        ).done(response => response);
    }
};