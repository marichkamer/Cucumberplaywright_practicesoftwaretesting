import { Given, When, Then } from '@cucumber/cucumber';
import { languages } from '../test-data/languages.js';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';

Given('the language switcher is visible', async function () {
  this.homePage = new HomePage(this.page);
  await expect(this.homePage.languageBtn).toBeVisible();
});

When('the user selects {string} from the language dropdown', async function (lang) {
  await this.homePage.changeLanguage(lang);
});

Then('the site interface should be displayed in {string}', async function (lang) {
  await expect(this.homePage.page.locator('body')).toContainText(languages[lang].expectedText);
});
