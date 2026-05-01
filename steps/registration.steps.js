import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registration.page.js';
import { LoginPage } from '../pages/login.page.js';
import { registrationDataUser1 } from '../test-data/registration.js';

Given('the user is on login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.mainLink();
});

Given('the {string} button is visible', async function (buttonName) {
  this.registrationPage = new RegistrationPage(this.page);
  await expect(this.registrationPage.signInBtn).toBeVisible();
});
When('the user registers with valid data', async function () {
  this.registrationPage = new RegistrationPage(this.page);
  await this.registrationPage.register(registrationDataUser1);
});


Then('the account should be created successfully', async function () {
  await expect(this.page).toHaveURL(/login|dashboard/);
});