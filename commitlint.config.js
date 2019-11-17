// https://commitlint.js.org/#/reference-rules
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "scope-case": [2, "always", "upper-case"]
  }
};
