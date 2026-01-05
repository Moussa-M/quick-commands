import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension is now active!');
  
  const helloCommand = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
  });
  
  context.subscriptions.push(helloCommand);
}

export function deactivate() {}