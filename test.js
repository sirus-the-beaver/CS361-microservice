const axios = require('axios');

const apiUrl = 'https://glacial-plains-67311-bdf01ddd306c.herokuapp.com';

const logResponse = (response) => {
    console.log(`Response from ${response.config.url}:`);
    console.log(response.data);
};

const logError = (error) => {
    console.error(`Error from ${error.config.url}:`);
    console.error(error.response.data);
};

const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/register`, { username, email, password });
        logResponse(response);
    } catch (error) {
        logError(error);
    }
};

const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
        logResponse(response);
        return response.data.token;
    } catch (error) {
        logError(error);
    }
}

const logoutUser = async (token) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/logout`, null, { headers: { Authorization: `Bearer ${token}` } });
        logResponse(response);
    } catch (error) {
        logError(error);
    }
}

const runTests = async () => {
    console.log('Testing user registration...');
    await registerUser('testuser', 'test@email.com', 'password');

    console.log('\nTesting user login...');
    const token = await loginUser('test@email.com', 'password');

    console.log('\nTesting user logout...');
    await logoutUser(token);
}

runTests();