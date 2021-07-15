import React, { useEffect, useState } from 'react';

function Form() {
    const [name, setName] = useState('Mary');

    useEffect(() => {
        localStorage.setItem('formDate', name);
    });

    const [surname, setSurname] = useState('Poppins');

    useEffect(() => {
        document.title = name + ' ' + surname;
    });

    return (
        <div className="form_title">
            <p>Your name is {name} {surname}</p>
        </div>
    )
}

export default Form;