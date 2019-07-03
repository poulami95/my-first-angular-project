var ghpages = require('gh-pages');
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/poulami95/my-first-angular-project.git'
}, callback);