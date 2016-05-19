System.config({
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('/scripts/bootstrap').then(null, console.error.bind(console));
