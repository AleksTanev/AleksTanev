## Create own modules demo

You could use npm modules in Node.js environment out of the box. Node.js supports custom module loader based on ES Modules standard. You just need to use `import` and `export` (or `export default`) to accomplish module like behavior for modules you have created.

- Everything exported through `export` (or `export default`) is available outside the module, but only after you load the module with `import`
