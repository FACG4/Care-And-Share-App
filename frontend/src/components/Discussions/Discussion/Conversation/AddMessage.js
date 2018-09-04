import React from 'react'


const AddMessage = ({ handleOnSubmitMessages, handleChangeInput, messageValue}) => {
    return (
        <form onSubmit={handleOnSubmitMessages}>
            <input type="text" name="message" onChange={handleChangeInput} value={messageValue} />
            </form>
    )
}

export default AddMessage