/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

switch (env) {
  case "STAGE":
    databaseCredential = "stageuser:password";
    break;
  case "PROD":
    databaseCredential = "producer:password";
    break;
  case "DEV":
  default:
    break;
}

console.log(
  `Database credential for environment ${env} is ${databaseCredential}`
);
