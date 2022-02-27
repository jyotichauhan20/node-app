
const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>{
    return "get yoyr note...."
}

const addNotes=(title, body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    const duplicateNote = notes.find((note)=>note.title===title)
    // const duplcateNotes=notes.filter(function(note){
    //     return note.title===title
    // })
    // console.log(notes)
    // debugger
    //node inspect app.js add --title=shop --body
   
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }else {
        console.log(chalk.red.inverse('note title taken'))
    }
    
}

const removeNotes=(title)=>{
    // console.log(title," removed..")
    const notes=loadNotes()
    const noteKeep=notes.filter((note)=>note.title!=title)


    // const noteKeep=notes.filter(function(note){
    //     return note.title!=title

    // })
    if(notes.length > noteKeep.length){
        console.log(chalk.green.inverse('Note remove'))
        saveNotes(noteKeep)
    }else{
        console.log(chalk.red.inverse('Note not found..'))
    }

}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('your notes..'))
    notes.forEach((note)=>{
        console.log(note.title)
    })

}

const readNotes=(title)=>{
    const notes=loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.green.inverse(note.body))
    }else{
        console.log(chalk.red.inverse('note not found..'))
    }

}

const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}


const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)

    }catch(err){
        return []
    }
    

}


module.exports={
    getNotes,
    addNotes,
    removeNotes,
    listNotes,
    readNotes
}