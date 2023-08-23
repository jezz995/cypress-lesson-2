/*// <reference types ="cypress" />*/

import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

describe("Hrm web test login and add employee", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("scenario-1", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();

    ///open demo web the type password and username
    cy.contains("Admin").should("be.visible").click();
    cy.contains("Add").click();
    cy.get(".oxd-autocomplete-text-input > input").type("Peter Mac Anderson");
    cy.contains("Peter Mac Anderson").click();
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Asolole12345");
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("asolole12345");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("asolole12345");
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
    ).click();
    cy.wait(1500);
    cy.contains("ESS").click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
    ).click();
    cy.wait(1500);
    cy.contains("Enabled").click();
    cy.contains("Save").click();
    cy.wait(2000);
  });
});
