import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('the user searches for {string}', async function (productName) {
  await this.homePage.searchExactProduct(productName);
});

Then('the search results should contain {string}', async function (productName) {
  await expect(this.page.locator('body')).toContainText(productName);
});