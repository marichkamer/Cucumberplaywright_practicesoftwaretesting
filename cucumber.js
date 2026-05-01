export default {
    paths: ['features/**/*.feature'],
    require: ['steps/**/*.js',
        'features/support/**/*.js' 
    ],
    format: [
    'progress',
    'json:reports/cucumber-report.json'
  ],
    publishQuiet: true,
    timeout: 120000
};