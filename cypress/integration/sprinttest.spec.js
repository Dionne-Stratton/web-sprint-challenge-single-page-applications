describe("Enter text into name field", function () {
    it("Types in a name and checks it has the same value", function () {
        cy.visit("http://localhost:3000/pizza");
        cy.get("input[name=name")
            .type("Mad Max")
            .should("have.value", "Mad Max")
    })
})

describe("Select Multiple toppings", function () {
    it("Checks multiple toppings", function () {
        cy.get("input[name=sausage").check();
        cy.get("input[name=onion]").check();

        cy.get("input[name=sausage").should("be.checked");
        cy.get("input[name=onion").should("be.checked");
    })
})

describe("Submits form", function () {
    it("Submits the form", function () {
        cy.get("button").click();
        cy.get("input[name=name]")
            .should("have.value", "");
    })
});