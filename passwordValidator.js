function validatePassword(str) {
    if (typeof str === typeof 'String') {
        let veryWeakPassword1 = RegExp('([A-Z])\\w+');
        let veryWeakPassword2 = RegExp('([a-z])\\w+');
        let weakPassword = RegExp('([0-9])\\w+');
        let strongPassword = RegExp('([0-9A-Z][0-9a-z])\\w+');
        let veryStrongPassword = RegExp('([0-9A-Za-z][~!@#$%^&*()_+{}|:"<>?`[\]\\;\',./])\\w+');

        if (veryWeakPassword1.test(str)) {
            console.log('Very Weak Password');
            return 0;

        } else if (veryWeakPassword2.test(str)) {
            console.log('Very Weak Password');
            return 0;

        } else if (weakPassword.test(str)) {
            console.log('Weak Password');
            return 1;

        } else if (strongPassword.test(str)) {
            console.log('Strong Password');
            return 2;

        } else if (veryStrongPassword.test(str)) {
            console.log('Very Strong Password');
            return 3;

        } else {
            console.log('Unknown Password Strength');
        }

    } else {
        console.log('Argument is not a string.');
    }
}

validatePassword('P455w0rd');