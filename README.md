# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  The `bug.js` file shows an Express.js route that uses a promise but doesn't properly handle rejection cases.  This results in silent failures and a degraded user experience.

The `bugSolution.js` file provides a corrected version with proper error handling to address the issue and provide better feedback to users and developers.