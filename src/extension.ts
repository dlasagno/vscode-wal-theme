import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as Color from 'color';
import template from './template';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('walTheme.update', generateColorThemes);

	context.subscriptions.push(disposable);
	
}


function generateColorThemes() {
	console.log('Test 1');
	// Import colors from pywal cache
	const colors = fs.readFileSync(path.join(os.homedir(), '/.cache/wal/colors'))
									 .toString()
									 .split('\n')
									 .slice(0,16)
									 .map(hex => Color(hex));
	console.log(colors);
	console.log('Test 2');

	// Generate the normal theme
	const colorTheme = template(colors, false);
	fs.writeFileSync(path.join(__dirname,'../themes/wal.json'), JSON.stringify(colorTheme, null, 4));
	console.log('Test 3');
	
	// Generate the bordered theme
	const colorThemeBordered = template(colors, true);
	fs.writeFileSync(path.join(__dirname,'../themes/wal-bordered.json'), JSON.stringify(colorTheme, null, 4));
	console.log('Test 4');
}
