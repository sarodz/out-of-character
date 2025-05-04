'use strict'

const glob = require('glob')
const fs = require('fs')
const path = require('path')

/**
 * @description Get files from a directory, file, or glob pattern.
 * @param {string} pathStr - The path to the file or directory.
 * @returns {string[]} An array of file paths.
 */
const getFiles = function (pathStr) {
  const files = []
  
  // Helper function to recursively get files
  const getFilesRecursive = function(currentPath) {
    // Check if path exists
    if (fs.existsSync(currentPath)) {
      // Check if it's a directory
      const isDir = fs.lstatSync(currentPath).isDirectory()
      if (isDir) {
        fs.readdirSync(currentPath).forEach((file) => {
          const filePath = path.join(currentPath, file)
          if (fs.lstatSync(filePath).isDirectory()) {
            // Recursively process subdirectories
            getFilesRecursive(filePath)
          } else {
            // Add file to the list
            files.push(filePath)
          }
        })
      } else {
        // It's a file, add it to the list
        files.push(currentPath)
      }
    }
  }
  
  // Handle glob patterns
  if (!fs.existsSync(pathStr) && glob.hasMagic(pathStr)) {
    return glob.sync(pathStr) || []
  }
  
  // Start recursive file collection
  getFilesRecursive(pathStr)
  return files
}

module.exports = getFiles
