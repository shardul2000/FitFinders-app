const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
})

const s3= new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken:  process.env.AWS_SESSION_TOKEN
});


const dynamoClient = new AWS.DynamoDB.DocumentClient();


module.exports = {
    dynamoClient, s3
};