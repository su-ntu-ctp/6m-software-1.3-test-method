/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/
const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD".
let databaseCredential = "devuser:password";

// Implement a switch statement to check against `env` environmental variable.
switch (env) {
  // If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
  case "STAGE":
    databaseCredential = "stageuser:password";
    break;

  // If `env` is "PROD", modify `databaseCredential` to "produser:password"
  case "PROD":
    databaseCredential = "produser:password";
    break;

  // If `env` is "DEV", no change to `databaseCredential`.
  case "DEV":
  default:
    break;
}

console.log(
  `Database credential for environment ${env} is ${databaseCredential}`
);
