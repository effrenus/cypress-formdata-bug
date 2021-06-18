context("request with file in form data", () => {
  const TEST_URL = "http://localhost:8000/";

  it("without intercept", () => {
    cy.visit(TEST_URL);

    cy.get("#image-file").attachFile("office_no.jpg", {
      subjectType: "drag-n-drop",
    });

    cy.get("#send-button").click();
    cy.get("#preview img").should("be.visible");

    cy.wait(3000);
  });

  it("intercept with function handler", () => {
    cy.intercept(/api\/media/, () => {});

    cy.visit(TEST_URL);

    cy.get("#image-file").attachFile("office_no.jpg", {
      subjectType: "drag-n-drop",
    });

    cy.get("#send-button").click();
    cy.get("#preview img").should("be.visible");
  });

  it("intercept with undefined handler", () => {
    cy.intercept(/api\/media/);

    cy.visit(TEST_URL);

    cy.get("#image-file").attachFile("office_no.jpg", {
      subjectType: "drag-n-drop",
    });

    cy.get("#send-button").click();
    cy.get("#preview img").should("be.visible");

    cy.wait(3000);
  });
});
