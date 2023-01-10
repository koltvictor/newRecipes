import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



export default function Search() {

    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 1rem 20rem;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: white;
        font-size: 1.5rem;
        color: black;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        border: 1px solid lightgrey;
    }
    svg{
        position: absolute;
        top: 40%;
        left: 0%:
        transform: translate(100%, -50%);
        color: black;
        margin-left: 1rem;
    }
`