
const chalk = require('chalk');
const yargs = require('yargs');


const Notes=require("./notes.js")

// const command=process.argv[2]
// console.log(process.argv)
yargs.version('1.1.0')
//It will update yargs version

//create a add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
            //using this line node app.js add --title the title value will come true because
            // we did not provided.
            //demandoption will add new key pair in the option --help when we will use it.
            // node app.js add --title="shpping list" when we will run this line
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        // console.log('Title: ',argv.title)
        // console.log('Body :',argv.body)
        Notes.addNotes(argv.title,argv.body)
        //node app.js add --title=body --body="this are body things" run this line for title
        // for body argument.
    }
})

//create remove command
// node app.js remove for runing the command
// arguments passing with yargs
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:'removing note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        Notes.removeNotes(argv.title)
        // console.log("removing a new note..")
    }
})
//create a list command
yargs.command({
    command:'list',
    describe:'listing a new note',
    handler(){
        Notes.listNotes()
        // console.log("listing a new note")
    }
})
//create a read command
yargs.command({
    command:'read',
    describe:'reading a new note',
    builder:{
        title:{
            describe:'reading note.',
            demandOption:true,
            type:'string'

        }
    },
    // handler:function(){
    handler(argv){
        Notes.readNotes(argv.title)

        // console.log('reading out all note..')
    }
})
yargs.parse()
// it will print only once time
// console.log(yargs.argv)


//add, remove, read, list

// if (command==="add"){
//     console.log("adding note")

// }else if(command==="remove"){
//     console.log("removing note")
// }else if(command==="edit"){
//     console.log("edit note..")
// }


// var msg=getNotes()
// console.log(msg)

// console.log(chalk.green("message!"));
// const color=chalk.green("success")
// console.log(color)

// console.log(chalk.red.bold.inverse('Hello world!')); 

// console.log(process.argv[2])

// var fs = require('fs');
// fs.writeFileSync("data.txt", "babu mere likeeee")
// fs.appendFileSync("data.txt"," I am appending file")

// const validator=require("validator")
// console.log(validator.isEmail("jyotichauhan20@navgurukul.org"))
// console.log(validator.isBoolean("true","false"))
// console.log(validator.isURL("https://stackoverflow.com"))







