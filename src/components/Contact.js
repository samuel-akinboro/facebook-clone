import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <Container>
            <Avatar src="https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <p>Big sam</p>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 8px;
    cursor: pointer;
    border-radius: 10px;
    margin: 4px 0px;

    p {
        margin-left: 6%;
    }

    :hover{
        background-color: #ffffff26;
    }
`
