import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  reportName: 'Automation Report',
  pageTitle: 'Playwright Cucumber Report',
  displayDuration: true,
  openReportInBrowser: true
});