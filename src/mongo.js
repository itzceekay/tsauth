const username = 'kirustudiesalot';
const password = '6CCXU9RFxacv22FI';

// MongoDB connection options
const hostname = 'cluster0.tmqzjrs.mongodb.net';
const database = 'mydatabase';  // Replace 'mydatabase' with your actual database name
const options = {
    retryWrites: true,
    w: 'majority',
    appName: 'Cluster0'
};

// Constructing the MongoDB URL
const MONGO_URL = `mongodb+srv://${username}:${password}@${hostname}/${database}?${new URLSearchParams(options).toString()}`;

module.exports = { MONGO_URL };