const CognitoExpress = require("cognito-express");
const cognitoExpress = new CognitoExpress({
	region: "us-east-1",
	cognitoUserPoolId: "us-east-1_0DzYDeY6K",
	tokenUse: "id", 
	tokenExpiration: 3600000 ,
	
});

module.exports={
    cognitoExpress
}