# bSnippets

Easily convert .txt files to Visual Studio Code snippets.

## Requirements:
[Node.js](https://nodejs.org/en)

## How to Run
1. Ensure the folder containing the `main.js` file has a .txt file called `input.txt` and a .json file called `output.json`.

2. Fill the `input.txt` file with the code you would like to convert into a VS Code snippet.

3. Run the `main.js` file by opening the folder in your terminal and running

```console
node main
```

## How to Import Snippets to VS Code
1. Copy the contents from the `output.json` file
2. In VS Code press CTRL + P and enter `>Snippets: Configure Snippets`
3. Select the language of your choice from the snippets list
4. Paste the contents you copied into the file
