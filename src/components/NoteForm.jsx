import {useState} from "react"

const NoteForm = () => {

    const[ fromData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''
    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...fromData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion
        if(!FormData.title || !FormData.description) return

        //Crear elobjeto de la nota
        const newNote = {id: Date.now(), ...formData}

        //Agregar notas a el estado (state)
        setNotes([newNote, ...notes])

        //Reset de campos de formData
        setFormData({
            title: '',
            category: 'work',
            priority: 'Medium',
            description: ''
        })
    }

    return(
        <>
        <button 
        className=""w-full bg-gray-100"
        onClick = {()=>setIsFormVisible(!isFormVisible)}
        >
        </>
    )

}