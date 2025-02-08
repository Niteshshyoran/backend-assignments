import { useState } from "react"

const CreateNote = () =>{
    const [title, setTitle] = useState("")
    const [discription, setDes] = useState("")

    const handleAddition= ()=>{
        const payload = {
            title,
            discription
        }
        fetch("http://localhost:8080/notes", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json())
        .then((data)=>{
            alert(data.msg)
        })
        .catch((error)=>console.log(error))
    }

    return(
        <>
            <h2>Welcome, write your note here</h2>
            <input type="text" placeholder="Enter title.." value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea name="" id="" placeholder="Enter the description.." value={discription} onChange={(e)=>{setDes(e.target.value)}}></textarea>
            <button onClick={handleAddition}>Create</button>
        </>
    )
}

export{CreateNote}