import React from 'react'
import styled from 'styled-components'

function Story() {
    return (
        <Container>
           <List image='https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y='>
                <Profile src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y=" />
            </List>
            <List image='https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c='>
                <Profile src="https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c=" />
            </List>
            <List image='https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?b=1&k=20&m=544358094&s=170667a&w=0&h=rM_-nTla_wODf5XRfNc2UuVrttjzGoF7fSD_gSjpHkM='>
                <Profile src="https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?b=1&k=20&m=544358094&s=170667a&w=0&h=rM_-nTla_wODf5XRfNc2UuVrttjzGoF7fSD_gSjpHkM=" />
            </List>
            <List image='https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso='>
                <Profile src="https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso=" />
            </List>
            <List image='https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'>
                <Profile src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </List>
        </Container>
    )
}

export default Story

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const List = styled.div`
    display: flex;
    border-radius: 10px;
    width: 116px;
    height: 190px;
    background-color: white;
    margin: 0px 6px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

    img {
        border-radius: 10px;
        width: inherit;
        height: inherit;
        object-fit: cover;
        // transform: scale(0.9);
    }

    :hover {
            -ms-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            -o-transform: scale(1.05);
            transform: scale(1.05);
            transform: scale(1.05);
            transition: transform ease-in 0.2s;
    }

    @media(max-width: 1000px) {
        width: 100px;
        height: 160px;
    }

    @media(max-width: 580px) {
        width: 21vw;
        height: 20vh;

        :nth-child(n+5) {
            display: none;
        }
    }
`

const Profile = styled.img`
    border-radius: 40px !important;
    margin: 14px 8px;
    width: 32px !important;
    height: 32px !important;
    border: 4px solid #2e89ff;
`
