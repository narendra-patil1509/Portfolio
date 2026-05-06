const fs = require('fs');
fetch('https://www.Narendraprakash.com/')
  .then(res => res.text())
  .then(html => {
    fs.writeFileSync('site_html.txt', html);
    const classes = html.match(/class="([^"]*)"/g) || [];
    fs.writeFileSync('site_classes.txt', classes.join('\n'));
    console.log('done');
  });
