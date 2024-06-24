import fs from 'fs'
import path from 'path'

// Get arguments from command line
const args = process.argv.slice(2)

if (args.length < 1) {
    console.log('Usage: node create-page.js <name-of-page>')
    process.exit(1)
}

const [pageName] = args

const sourceFile = 'src/pages/index.astro'
const newFolder = `src/pages/${pageName.toLowerCase()}`
const newFileName = 'index.astro'

// Read content from source file
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${sourceFile}:`, err)
        return
    }

    // Create new folder if it doesn't exist
    fs.mkdir(newFolder, { recursive: true }, (err) => {
        if (err) {
            console.error(`Error creating folder ${newFolder}:`, err)
            return
        }

        const newFilePath = path.join(newFolder, newFileName)

        // Write content to new file
        fs.writeFile(newFilePath, data, (err) => {
            if (err) {
                console.error(`Error writing file ${newFilePath}:`, err)
                return
            }

            console.log(`File copied to ${newFilePath}`)
        })
    })
})
