import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';


Given('the user is on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.mainLink();
});

When('the user enters a valid email and password', async function () {
  await this.loginPage.login(process.env.EMAIL, process.env.PASSWORD);
});

Then('the "My Account" page should be visible', async function () {
  await expect(this.loginPage.myAccount).toBeVisible();
});