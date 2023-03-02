/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
const databaseCredential = "devuser:password";

// Task: Add code here

    switch (env){
        case "DEV":
            console.log(`Database credential for environment ${env} is ${databaseCredential}`);
        break;
            case "STAGE":
                console.log(`Database credential for environment ${env} is stageuser:password`);
        break;
                case "PROD":
                console.log(`Database credential for environment ${env} is produser:password`);
        break;
        default:
            console.log("Invalid enviroment specified");
    
    

console.log(`Database credential for environment ${env} is ${databaseCredential}`);
    }  