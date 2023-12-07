/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
switch (env)  {
    case "STAGE":
        databaseCredential = "stageuser:password";
        break;
    case "PROD":
        databaseCredential = "produser:password";
        break;
    default
    databaseCredential = "databaseCredential";

}
console.log(`Database credential for environment ${env} is ${databaseCredential}`);
