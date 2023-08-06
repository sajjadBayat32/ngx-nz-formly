describe("Nz Formly", () => {
  it("Check all form functionalities", () => {
    cy.visit("/");
    // Test Purpose: required and min length validations
    cy.get("#control-firstName").type("sj").blur();
    cy.get("#wrapper-firstName .error-message").contains("Field must be at least 3 characters");
    cy.get("#control-firstName").clear().blur();
    cy.get("#wrapper-firstName .error-message").contains("This field is required");
    cy.get("#control-firstName").clear().type("sajjad").blur();
    cy.get("#wrapper-firstName .error-message").should("not.exist");

    // Test Purpose: max length validation
    cy.get("#control-lastName").type("bayat@gmail.com").blur();
    cy.get("#wrapper-lastName .error-message").contains("Field must be at most 10 characters");
    cy.get("#control-lastName").clear().type("bayat").blur();
    cy.get("#wrapper-lastName .error-message").should("not.exist");

    // Test Purpose: email validation
    cy.get("#control-email").type("sajjad").blur();
    cy.get("#wrapper-email .error-message").contains("Email format is not correct");
    cy.get("#control-email").clear().type("sajjad@gmail").blur();
    cy.get("#wrapper-email .error-message").should("exist");
    cy.get("#control-email").clear().type("sajjad@gmail.com").blur();
    cy.get("#wrapper-email .error-message").should("not.exist");

    // Test Purpose: password complexity validation
    cy.get("#control-password").type("pass").blur();
    cy.get("#wrapper-password .error-message").contains(
      "Password should be at least 8 characters, including one capital letter, one number and one special character",
    );
    cy.get("#control-password").clear().type("Pass").blur();
    cy.get("#wrapper-password .error-message").should("exist");
    cy.get("#control-password").clear().type("Pass12").blur();
    cy.get("#wrapper-password .error-message").should("exist");
    cy.get("#control-password").clear().type("Pass12@").blur();
    cy.get("#wrapper-password .error-message").should("exist");
    cy.get("#control-password").clear().type("Pass12@w").blur();
    cy.get("#wrapper-password .error-message").should("not.exist");
    cy.get("#control-password").clear().type("Pass12@word").blur();
    cy.get("#wrapper-password .error-message").should("not.exist");
  });
});
