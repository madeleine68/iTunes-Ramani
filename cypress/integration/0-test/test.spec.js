describe(" The Main Page", () => {
    it("loads successfully", () => {
      cy.visit("http://localhost:3000");
  
      cy.get("header").should("be.visible");
      cy.get("input").type("taylor swift").type("{enter}");
  
      cy.get("#images").click();
    });
  });
  