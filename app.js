const fs=require('fs')
const chalk=require('chalk')
let utils=require('./utils')
let validator=require('validator')
const yargs=require('yargs')

// console.log(utils)

// console.log(utils.add(1,2))
// console.log(validator.isEmail('mc@gmail.com'))

// console.log(chalk.green('hello'))

// fs.writeFileSync('notes.txt','this was crreated by me'+Date.now())

//console.log(process.argv)



let command=process.argv[2];
if(command=='add'){
    console.log('adding')
}
else if(command=='delete'){
    console.log('deleting')
}
else console.log("invalid choice")

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

console.log(yargs.argv)