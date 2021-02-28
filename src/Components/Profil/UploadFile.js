import React, { useState } from 'react'

const UploadFile = () => {
    const [file, setFile] = useState()

    const handlePicture = (e) => {
        e.preventDefault()
    }
    return (
       <form action="" onSubmit={handlePicture}>
           <label htmlFor="file">Charger un fichier</label>
           <input type="file" id="file" name="file" accept=".xlxs, .csv"
           onChange={(e) => setFile(e.target.files[0])}
           />
       </form>
    )
}

export default UploadFile


