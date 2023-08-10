describe("Nz Formly", () => {
  it("Check all form functionalities", () => {
    cy.visit("/");
    // Test Purpose: Required and min length validations
    cy.get("#control-firstName").type("sj").blur();
    cy.get("#wrapper-firstName .error-message").contains(
      "Field must be at least 3 characters",
    );
    cy.get("#control-firstName").clear().blur();
    cy.get("#wrapper-firstName .error-message").contains(
      "This field is required",
    );
    cy.get("#control-firstName").clear().type("sajjad").blur();
    cy.get("#wrapper-firstName .error-message").should("not.exist");

    // Test Purpose: Max length validation
    cy.get("#control-lastName").type("bayat@gmail.com").blur();
    cy.get("#wrapper-lastName .error-message").contains(
      "Field must be at most 10 characters",
    );
    cy.get("#control-lastName").clear().type("bayat").blur();
    cy.get("#wrapper-lastName .error-message").should("not.exist");

    // Test Purpose: Email validation
    cy.get("#control-phoneNumber").type("555555").blur();
    cy.get("#wrapper-phoneNumber .error-message").contains("Invalid data");
    cy.get("#control-phoneNumber").clear().type("15555555555").blur();
    cy.get("#wrapper-phoneNumber .error-message").should("not.exist");
    cy.get("#control-phoneNumber").should("have.value", "+1(555)555-5555");
    cy.get("#control-phoneNumber").clear().type("962555555555").blur();
    cy.get("#control-phoneNumber").should("have.value", "+962-5-5555-5555");
    cy.get("#wrapper-phoneNumber .error-message").should("not.exist");

    // Test Purpose: Phone Mask validation
    cy.get("#control-email").type("sajjad").blur();
    cy.get("#wrapper-email .error-message").contains(
      "Email format is not correct",
    );
    cy.get("#control-email").clear().type("sajjad@gmail").blur();
    cy.get("#wrapper-email .error-message").should("exist");
    cy.get("#control-email").clear().type("sajjad@gmail.com").blur();
    cy.get("#wrapper-email .error-message").should("not.exist");

    // Test Purpose: Password complexity validation
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
    cy.get("#wrapper-password .show-password span").click();
    cy.get("#control-password").should("have.attr", "type", "text");
    cy.get("#wrapper-password .show-password span").should(
      "have.class",
      "anticon-eye-invisible",
    );
    cy.get("#wrapper-password .show-password span").click();
    cy.get("#control-password").should("have.attr", "type", "password");

    // Test Purpose: Checkbox and input disabled and switch visibility
    cy.get("#control-age").should("be.disabled");
    cy.get("#control-allowNotifications").should("not.be.visible");
    cy.get("#control-olderThan20").check().should("be.checked");
    cy.get("#control-age").should("not.be.disabled");
    cy.get("#control-allowNotifications").should("be.visible");

    // Test Purpose: Switch
    cy.get("#control-allowNotifications")
      .click()
      .should("have.class", "ant-switch-checked");
    cy.get("#control-allowNotifications")
      .click()
      .should("not.have.class", "ant-switch-checked");
  });
});
