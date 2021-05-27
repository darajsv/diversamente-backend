module.exports.messages = {
    notFound: (resource) => `${resource}-not-found`,
    alreadyExists: (param) => `${param}-already-registered`,
    invalidFields: "invalid-fields",
    internalError: "internal-server-error",
    invalidPassword: "invalid-password",
    expiredToken: "expired-token",
    invalidAuthFormat: `invalid-authorization-format`,
    authMissing: `missing-authorization-header`,
  };