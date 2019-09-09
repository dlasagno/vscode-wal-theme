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
	// Import colors from pywal cache
	let colors: Color[];
	try {
		colors = fs.readFileSync(path.join(os.homedir(), '/.cache/wal/colors'))
										 .toString()
										 .split('\n')
										 .slice(0,16)
										 .map(hex => Color(hex));
	} catch(error) {
		vscode.window.showErrorMessage('Couldn\'t load colors from pywal cache, be sure to run pywal before updating.');
		return;
	}
		
	// Generate the normal theme
	const colorTheme = template(colors, false);
	fs.writeFileSync(path.join(__dirname,'../themes/wal.json'), JSON.stringify(colorTheme, null, 4));
	
	// Generate the bordered theme
	const colorThemeBordered = template(colors, true);
	fs.writeFileSync(path.join(__dirname,'../themes/wal-bordered.json'), JSON.stringify(colorThemeBordered, null, 4));
}
