import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    /*UserPoolId: "us-east-1_DPUs7FNhM",
    ClientId:"6shneeaaegqb4ddl7t7dboqsqq"
    */
    UserPoolId: "us-east-1_0DzYDeY6K",
    ClientId:"1d7vkkmbh22eerifr012v22r95"

}

export default new CognitoUserPool(poolData);