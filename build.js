#!/usr/bin/env node

const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

const inputFile = "main.css"
const outputFile = "dist/main.css"
const css = fs.readFileSync(inputFile, "utf8")

postcss()
  .use(atImport())
  .process(css, { from: inputFile })
  .then((result) => {
    fs.writeFileSync(outputFile, result.css)
  })
