function changeLanguage() {
    const language = document.getElementById('language').value;

    const translations = {
        en: {
            loginHeader: 'Login',
            userLabel: 'User',
            passwordLabel: 'Password',
            loginButton: 'Login',
            registerButton: 'Register'
        },
        pt: {
            loginHeader: 'Entrar',
            userLabel: 'Usuário',
            passwordLabel: 'Senha',
            loginButton: 'Entrar',
            registerButton: 'Registrar'
        }
    };

    document.getElementById('login-header').innerText = translations[language].loginHeader;
    document.getElementById('user-label').innerText = translations[language].userLabel;
    document.getElementById('password-label').innerText = translations[language].passwordLabel;
    document.getElementById('login-button').innerText = translations[language].loginButton;
    document.getElementById('register-button').innerText = translations[language].registerButton;
}

// Set default language to English
window.onload = function () {
    changeLanguage();
};
