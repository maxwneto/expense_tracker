function changeLanguage() {
    const language = document.getElementById('language').value;
    localStorage.setItem('selectedLanguage', language);
    applyTranslations(language);
}

function applyTranslations(language) {
    const translations = {
        en: {
            loginHeader: 'Login',
            userLabel: 'Email',
            userPlaceholder: 'youremail@example.com',
            passwordLabel: 'Password',
            loginButton: 'Login',
            registerButton: 'Register',
            registerHeader: 'Register',
            registerEmailLabel: 'Email',
            registerEmailPlaceholder: 'youremail@example.com',
            registerPasswordLabel: 'Password',
            registerConfirmPasswordLabel: 'Confirm Password',
            registerButtonSubmit: 'Register',
            backToLoginButton: 'Back to Login'
        },
        pt: {
            loginHeader: 'Entrar',
            userLabel: 'Email',
            userPlaceholder: 'seuemail@exemplo.com',
            passwordLabel: 'Senha',
            loginButton: 'Entrar',
            registerButton: 'Registrar',
            registerHeader: 'Registrar',
            registerEmailLabel: 'Email',
            registerEmailPlaceholder: 'seuemail@exemplo.com',
            registerPasswordLabel: 'Senha',
            registerConfirmPasswordLabel: 'Confirmar Senha',
            registerButtonSubmit: 'Registrar',
            backToLoginButton: 'Voltar para Login'
        }
    };

    // Login page
    if (document.getElementById('login-header')) {
        document.getElementById('login-header').innerText = translations[language].loginHeader;
        document.getElementById('user-label').innerText = translations[language].userLabel;
        document.getElementById('user').placeholder = translations[language].userPlaceholder;
        document.getElementById('password-label').innerText = translations[language].passwordLabel;
        document.getElementById('login-button').innerText = translations[language].loginButton;
        document.getElementById('register-button').innerText = translations[language].registerButton;
    }

    // Register page
    if (document.getElementById('register-header')) {
        document.getElementById('register-header').innerText = translations[language].registerHeader;
        document.getElementById('register-email-label').innerText = translations[language].registerEmailLabel;
        document.getElementById('register-email').placeholder = translations[language].registerEmailPlaceholder;
        document.getElementById('register-password-label').innerText = translations[language].registerPasswordLabel;
        document.getElementById('register-confirm-password-label').innerText = translations[language].registerConfirmPasswordLabel;
        document.getElementById('register-button-submit').innerText = translations[language].registerButtonSubmit;
        document.getElementById('login-btn').innerText = translations[language].backToLoginButton;
    }
}

function redirectToRegister() {
    window.location.href = "register.html";
}

function redirectToLogin() {
    window.location.href = "index.html";
}

// Validation functions
function validateLoginForm() {
    const email = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('login-button');

    if (validateEmail(email) && password.length > 0) {
        loginButton.disabled = false;
        loginButton.classList.remove('disabled');
    } else {
        loginButton.disabled = true;
        loginButton.classList.add('disabled');
    }
}

function validateRegisterForm() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const registerButton = document.getElementById('register-button-submit');

    if (validateEmail(email) && password.length > 0 && confirmPassword.length > 0 && password === confirmPassword) {
        registerButton.disabled = false;
        registerButton.classList.remove('disabled');
    } else {
        registerButton.disabled = true;
        registerButton.classList.add('disabled');
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
}

// Set default language or load from localStorage
window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language').value = savedLanguage;
    applyTranslations(savedLanguage);
};
