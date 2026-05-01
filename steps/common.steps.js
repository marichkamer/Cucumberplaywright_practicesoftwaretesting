import { Given } from '@cucumber/cucumber';
import { HomePage } from '../pages/home.page.js';

Given('the user is on the homepage', async function () {
    this.homePage= new HomePage(this.page);
    await this.homePage.mainLink();
});