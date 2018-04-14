/**
 * @class TheSupport
 * @param {string} pattern - Filename pattern
 */
'use strict'

const acorn = require('acorn')
const aglob = require('aglob')
const {readFileAsync} = require('asfs')
const logSyntaxError = require('log-syntax-error')
const path = require('path')

/** @lends TheSupport */
class TheSupport {
  static async checkECMASupport (filename, ecmaVersion) {
    const code = await readFileAsync(filename)
    try {
      acorn.parse(code, {ecmaVersion, silent: true})
    } catch (thrown) {
      const {loc: {column, line}} = thrown
      const snippet = logSyntaxError(String(code), line, column)
      const relativeFilename = path.relative(process.cwd(), filename)
      const error = new Error(
        `[TheSupport] ES${ecmaVersion} failed with ${relativeFilename} ( ${thrown.message} )`
      )
      error.filename = relativeFilename
      error.snippet = snippet
      throw error
    }
  }

  constructor (pattern, options = {}) {
    this.pattern = pattern
  }

  async es5 () {
    await this.validateESFor('5')
  }

  async es6 () {
    await this.validateESFor('6')
  }

  async validateESFor (ecmaVersion) {
    const result = {}
    const filenames = await aglob(this.pattern)
    if (filenames.length === 0) {
      console.warn(`[TheSupport] Not file found with pattern`, this.pattern)
      return null
    }
    for (const filename of filenames) {
      await TheSupport.checkECMASupport(filename, ecmaVersion)
      result[filename] = {ok: true}
    }
    return result
  }
}

module.exports = TheSupport
