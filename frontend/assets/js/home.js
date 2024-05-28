$(document).ready(function () {
    const navigateLogin = () => window.location.href = "login.html";

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    
    if (email && password) { 
        auth.login(email, password)
        .then(({ status }) => {
            if (status === true) {
                $('#section-widgets').append(widgetUpcomingTasks())
                $('#section-widgets').append(widgetInProgressTasks())
                $('#section-widgets').append(widgetCompleteTasks())
            } else navigateLogin()
        });
    } else navigateLogin()
});