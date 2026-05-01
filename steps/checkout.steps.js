
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { LoginPage } from '../pages/login.page.js';
import { HomePage } from '../pages/home.page.js';
import { CheckoutPage } from '../pages/checkout.page.js';

import { paymentMethod } from '../test-data/paymentMethods.js';
import { addressData } from '../test-data/adressData.js';


Given('the user is logged in', async function () {
  this.loginPage = new LoginPage(this.page);

  await this.loginPage.login(
    process.env.EMAIL,
    process.env.PASSWORD
  );

  await this.page.waitForLoadState('networkidle');
});

When('the user adds {string} to the basket', async function (product) {
  this.homePage = new HomePage(this.page);

  await this.homePage.addProductToCart(product);
});

When('the user proceeds to checkout', async function () {
  this.checkoutPage = new CheckoutPage(this.page);

  await this.checkoutPage.mainCartBtn.click();
});

When('the user enters valid shipping and payment details', async function () {
  await this.page.waitForLoadState('networkidle');
  await this.checkoutPage.checkout(paymentMethod.cash, addressData);
});

Then('the order should be successfully placed', async function () {
  await expect(this.checkoutPage.paymentSuccessMsg).toBeVisible({ timeout: 10000 });
});