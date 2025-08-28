# email_validator

**Author**: Uche  
**Email**: uche.okele@student.vinci.be  
**GitHub Repository**: https://github.com/uche-okele-vinci/devops.git


## Project Overvie

This project is part of the BIMV2190 DevOps exam. It implements an email validation function using **Test-Driven Development (TDD)** and integrates a **Continuous Integration (CI)** pipeline via **GitHub Actions**.


##  Code Explanation

The core of the project is the `emailValidator(email)` function located in `src/emailValidator.js`. It checks whether a given string qualifies as a valid email address based on the following rules:

- The string must contain exactly one `@` symbol.
- There must be text both before and after the `@`.
- The domain part (after `@`) must contain at least one dot (`.`), and the dot must not be the last character.
- The string must not contain any spaces.

The function is developed using **TDD** with **Jest**. All test cases are written in `tests/emailValidator.test.js`, covering both valid and invalid scenarios.

To ensure code reliability, a **CI pipeline** is configured using GitHub Actions. Every push or pull request to the `main` branch triggers the pipeline, which installs dependencies and runs the test suite automatically. This helps catch errors early and maintain code quality throughout development.


##  How to Run the Tests

```bash
npm test
