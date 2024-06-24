import fs from 'fs'
import path from 'path'

// Get arguments from command line
const args = process.argv.slice(2)

if (args.length < 1) {
    console.log('Usage: node create-section.js <NameOfSection>')
    process.exit(1)
}

const [sectionName] = args

const sourceFile = 'src/sections/pre-built/template/TemplateSection.astro'
const newFileName = `${sectionName}Section.astro`

// Read content from source file
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${sourceFile}:`, err)
        return
    }

    const newFilePath = path.join('src/sections/pre-built', newFileName)

    fs.writeFile(newFilePath, data, (err) => {
        if (err) {
            console.error(`Error writing file ${newFilePath}:`, err)
            return
        }

        console.log(`File copied to ${newFilePath}`)
    })
})
