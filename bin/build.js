#!/usr/bin/env node

const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")
const comments = require("postcss-discard-comments");
const stylefmt = require("stylefmt");

const cwd = process.cwd()
const inputFile = `${cwd}/main.css`
const outputDir = `${cwd}/dist`
const outputFile = `${outputDir}/main.css`

const css = fs.readFileSync(inputFile, "utf8")

postcss()
  .use(atImport())
  .use(comments())
  .use(stylefmt())
  .process(css, { from: inputFile })
  .then((result) => {
    fs.mkdir(outputDir, () => {
      fs.writeFileSync(outputFile, result.css)
    })
  })
