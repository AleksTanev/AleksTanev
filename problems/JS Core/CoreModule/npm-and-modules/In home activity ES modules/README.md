<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# ES Modules - In home activity

1. Your task is to create module with three functions

   - `fileRead`, `fileJoin`, `fileRename`
   - You could use the [fs](https://nodejs.org/api/fs.html) library which is Node.js standard feature
   - You don't need to install any library

*Don't forget to create the `package.json` file and specify the module system. NodeJS works with CommonJS modules by default and your code will not run unless you **tell** it run in ES modules mode.*

1. Every function must return a result if the operation is successful or an Error if the operation fails. No function must be without return!

1. Use these three functions from `fs` library

   - `readFileSync(path, 'utf8')` - accepts `path` and reads the file on this path in `utf8` format (you receive it like text directly). If the file does not exist an error will be thrown

   - `writeFileSync(path, content)` - accepts a `path` to where to create the file and `content` to write in the file. If the file is open by another program it could throw an error

   - `renameSync(oldPath, newPath)` - accepts an `oldPath` and `newPath` and creates the new file and deletes the old one. It could throw an error if the file is open by another program

1. These are all synchronous operations. Later in the course we will talk about how to handle these operation asynchronous and the problems it solves.
