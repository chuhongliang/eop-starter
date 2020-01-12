const shell = require('shelljs');

if (!shell.which('git')) {
	shell.echo('Sorry, this script requires git');
	shell.exit(1);
}

if (shell.exec('git status').code !== 0) {
	shell.echo('Error: Git status failed');
	shell.exit(1);
}

// Run external tool synchronously
if (shell.exec('git add .').code !== 0) {
	shell.echo('Error: Git commit failed');
	shell.exit(1);
}

if (shell.exec('git commit -m "auto commit"').code !== 0) {
	shell.echo('Error: Git commit failed');
	shell.exit(1);
}

if (shell.exec('git pull').code !== 0) {
	shell.echo('Error: Git pull failed');
	shell.exit(1);
}

if (shell.exec('git push').code !== 0) {
	shell.echo('Error: Git push failed');
	shell.exit(1);
}