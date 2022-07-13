import React from 'react'
import styled from 'styled-components'
import Content from './Content'

function ContentList() {
    return (
        <Container>
            <Content 
                userName='John doe'
                profilePicture='https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                likes={10}
                liked={true}
                text='The all New Apple Macbook Pro M1 chip is Here Guys'
                postImage="https://sb.nhattao.com/2018/12/11694856_macbook-pro-retina-15-inch-early-2015.jpg"
                comments={[
                    {
                        userName: 'Ben carson',
                        text: `Today my colleague said we won't ask the prof. About the duty and we won't do it to make him realize how much pressure he is putting us through, and then she did asked him and did the duty alone `,
                        profilePicture: `https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y='>
                        <Profile src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y=`
                    },
                    {
                        userName: 'Ann Christine',
                        text: `Well said`,
                        profilePicture: `https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso=`
                    }
                ]}
             />
             <Content 
                userName='Chris paul'
                profilePicture='https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?b=1&k=20&m=544358094&s=170667a&w=0&h=rM_-nTla_wODf5XRfNc2UuVrttjzGoF7fSD_gSjpHkM='
                likes={10}
                liked={true}
                text='The all New Apple Macbook Pro M1 chip is Here Guys'
                postImage="https://sb.nhattao.com/2018/12/11694856_macbook-pro-retina-15-inch-early-2015.jpg"
                comments={[
                    {
                        userName: 'Ben carson',
                        text: `Today my colleague said we won't ask the prof. About the duty and we won't do it to make him realize how much pressure he is putting us through, and then she did asked him and did the duty alone `,
                        profilePicture: `https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y='>
                        <Profile src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y=`
                    },
                    {
                        userName: 'Ann Christine',
                        text: `Well said`,
                        profilePicture: `https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso=`
                    }
                ]}
             />
        </Container>
            
    )
}

export default ContentList

const Container = styled.div`

`