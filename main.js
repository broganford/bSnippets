const fileSystem = require("fs");
const readLineR = require("readline");

const input = "input.txt";
const output = "output.json";

const readLine = readLineR.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("What would you like to name this snippet? ", (name) => {
  readLine.question(
    "What would you like the description of this snippet to be? ",
    (descriptionS) => {
      readLine.question(
        "What would you like the prefix of this snippet to be? ",
        (prefixS) => {
          fileSystem.readFile(input, "utf8", (rError, data) => {
            if (rError) {
              console.error("reading error: ", rError);
              readLine.close();
              return;
            }

            const lines = data.split(/\r?\n/);

            const pLines = lines
              .filter((line) => line.length > 0)
              .map((line) => {
                return line.replace(/"/g, '\\"');
              });

            const config = {
              [name]: {
                prefix: prefixS,
                body: pLines,
                description: descriptionS,
              },
            };

            const writeData = JSON.stringify(config, null, 2);

            fileSystem.writeFile(output, writeData, "utf8", (wError) => {
              if (wError) {
                console.error("writing error: ", wError);
                readLine.close();
                return;
              }
              readLine.close();
            });
          });
        }
      );
    }
  );
});
