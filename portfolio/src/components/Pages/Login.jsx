import React from 'react'
import styled from 'styled-components'
import Smile from '../../assets/icons/Smile'

function Login() {
  return (
    <LoginPage>
        <Box>
            <Smile/>
            <Text>Welcome to my portfolio site</Text>
            <Btn>Continiue</Btn>
        </Box>
    </LoginPage>
  )
}

export default Login


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
`

const Text = styled.h1`
    margin-bottom: 50px;
    text-aligen: 
`

const Btn = styled.div`
    padding: 10px 20px;
    font-size: 25px;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
    &:hover{
        transition: all 0.6s ease;
        background-color: #000;
        color: #fff
    }
`

const LoginPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`