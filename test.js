const axios = require('axios');

//Uji coba POST/user menggunakan express-validator
const testExpressValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user', {
            username: 'Daffa',
            email: 'invalidemail.com',
        });
        console.log('Response from /user (express-validator):', response.data);
    } catch (error) {
        console.log('Error from /user (express-validator):', error.response.data);
    }
};

// Uji coba POST /user-joi menggunakan Joi
const testJoiValidator = async () => {
    try {
        const response = await axios.post('https://localhost:3000/user-joi', {
            username: 'Jphn',
    email: 'invalidemail.com',
        });
        console.log('Response from /user-joi (Joi):', response.data);
    } catch (error) {
        console.log('Error from /user-joi (Joi):', error.response.data);
    }
};

const runTest = async () => {
    console.log('Testing /user route with express-validator.....');
    await testExpressValidator();

    console.log('\nTesting /user-joi route with joi...');
};

runTests();