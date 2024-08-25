const fs = require("fs");
const { Command } = require("commander");
const tod = "./todo.json";
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });
// ---
program
  .command("todo-add")
  .description("Add a task to todo list")
  .argument("<task-name>", "task to add")

.action((taskname) => {
  fs.readFile(tod, "utf8", function (err, data) {
    if (err) {
      console.log("Error reading file", err);
    } else if (data) {
      console.log("imherex");
      console.log(data);

      const convertToJSON = JSON.parse(data);
      let tasks = [...convertToJSON];
      // Add logic here to add the new task
    } else {
      console.log("no data to convert");
      console.log(data);

    }
  });
});

// program.command("todo-list");
// program.command("todo-modify");

program.parse();
