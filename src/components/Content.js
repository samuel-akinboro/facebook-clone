import { Avatar } from '@material-ui/core'
import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { ChatBubbleOutlineOutlined, Favorite, MoreHoriz, ReplyOutlined, ThumbUp, ThumbUpOutlined, EmojiEmotionsOutlined, GifOutlined, FaceOutlined, SupervisedUserCircleOutlined } from "@material-ui/icons"

function Content({ userName, profilePicture, likes, liked, comments, text, postImage }) {
    const [isLiked, setIsLiked] = useState(false);
    const [allComments, setAllComments] = useState([]);

    useEffect(()=>{
        setIsLiked(liked)
        setAllComments([...comments])
    }, [])

    return (
        <Container>
            <Header>
                <Profile>
                    <Avatar src={profilePicture} />
                    <Title>
                        <h4>{userName}</h4>
                        <p>3d </p>
                    </Title>
                </Profile>
                <MoreHoriz />
            </Header>
            <Text>
                <div>{text}</div>
            </Text>
            <Image>
                {postImage && 
                    <img src={postImage} alt="" />
                }
            </Image>
            <EmojiCount>
                <EmojiList>
                    <Emojis>
                        <ThumbUp className='like'/>
                        <Favorite className='love'/>
                        <p>{likes}</p>
                    </Emojis>
                    <DetailInfo>
                        <p>{allComments.length} comments</p>
                        <p>900 shares</p>
                    </DetailInfo>
                </EmojiList>
            </EmojiCount>
            <Bottom>
                <Reactios>
                    <Icon>
                        <ThumbUpOutlined />
                        <p>Like</p>
                    </Icon>
                    <Icon>
                        <ChatBubbleOutlineOutlined />
                        <p>Comment</p>
                    </Icon>
                    <Icon >
                        <ReplyOutlined className='share'/>
                        <p>Share</p>
                    </Icon>
                </Reactios>
            </Bottom>
            <CreateComment>
                <Avatar src="https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='avatar' />
                <CreateCommentForm>
                    <input type="text" placeholder='Write a comment...' />
                    <div>
                        <FaceOutlined />
                        <EmojiEmotionsOutlined />
                        <GifOutlined />
                        <SupervisedUserCircleOutlined />
                    </div>
                </CreateCommentForm>
            </CreateComment>
            <CommentList>
               {
                allComments.map(comment => (
                    <Comment>
                        <Avatar src={comment.profilePicture} className='avatar' />
                        <CommentDetails>
                            <h6>{comment.userName}</h6>
                            <p>{comment.text}</p>
                        </CommentDetails>
                    </Comment>
                ))
               }
            </CommentList>
        </Container>
    )
}

export default Content

const Container = styled.div`
    margin: 16px 6px;
    padding: 10px 0px;
    max-width: inherit;
    border-radius: 10px;
    background-color: #242526;
    display: flex;
    flex-direction: column;

`

const Header = styled.div`
    padding: 0px 16px;
    display: flex;
    margin: 6px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .MuiSvgIcon-root {
        padding: 10px;
        cursor: pointer;
        border-radius: 40px;
    }

    :hover .MuiSvgIcon-root:hover{
        background-color: #525252b0;
    }
`

const Profile = styled.p`
    display: flex;
    align-items: center;

`

const Title = styled.div`
    margin-left: 12px;

    h4 {
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        cursor: pointer;
        color: #9ea1a5;
        font-size: 14px;
    }
`

const Text = styled.div`
    padding: 0px 16px;
    margin: 6px 0px;
    display: flex;
    flex: 1;
    div {
        max-width: fit-content;
        font-size: 15px;
        margin-bottom: 6px;
    }
`

const Image = styled.div`
    max-width: fit-content;
    cursor: pointer;

    img {
        width: 100%;
    }
`
const EmojiCount = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    margin: 0px 0px;
    border-bottom: 2px solid #343637;
`

const EmojiList = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`

const Emojis = styled.div`
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        font-size: 14px;
        margin: 0px 0px;
        padding: 4px;
        border-radius: 40px;
    }

    .like {
        background-color: #13a0f8;
    }

    .love {
        background-color: #fb5b77;
    }

    p {
        margin-left: 14%;
        color: #b5b5b5;
        font-weight: 100;
    }

    @media(max-width: 520px) {

        p {
            font-size: 76%;
        }
    }
`

const DetailInfo = styled.div`
    display: flex;
    color: #9ea1a5;
    font-size: 16px;

    p {
        margin: 0px 6px;
    }

    @media(max-width: 520px) {

        p {
            font-size: 76%;
        }
    }

`

const Bottom = styled.div`
    display: flex;
    margin: 0px 16px;
    margin-top: 6px;
`

const Reactios = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`

const Icon = styled.div`
    padding: 6px 2px;
    display: flex;
    justify-content: center;
    flex: 1;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    margin: 0px 6px;
    .share {
        transform: rotateY(180deg);
        }

    :hover {
        background-color: #525252b0;
    }

    p {
        margin-left: 6px;
    }

    @media(max-width: 520px) {

        p {
            font-size: 80%;
        }

        .MuiSvgIcon-root {
            font-size: 20px;
        }
    }
`

const CreateComment= styled.div`
    display: flex;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    margin-top: 1em;

    .avatar {
        height: 35px;
        width: 35px
    }
`

const CreateCommentForm = styled.form`
    display: flex;
    background-color: #3A3B3C;
    height: 39px;
    border-radius: 20px;
    flex: 1;
    margin-left: 0.5em;

    input {
        flex: 1;
        background-color: #3A3B3C;
        border: none;
        border-radius: 20px;
        outline: none;
        margin-right: 0.7em;
        padding: 1em;
        font-size: 16px;
        color: #e4e6eb;
    }

    input::placeholder {
        font-size: 14px;
        color: #e4e6eb;
    }

    div {
        display: flex;
        align-items: center;
        width: 106px;
        justify-content: space-between;
        margin-right: 1em;
    }

    .MuiSvgIcon-root {
        font-size: 20px;
        cursor: pointer;
    }
`

const CommentList = styled.div`
    padding: 16px;
`

const Comment = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.7em;

    .avatar {
        height: 35px;
        width: 35px
    }
`

const CommentDetails = styled.div`
    background-color: #3A3B3C;
    padding: 0.7em;
    border-radius: 20px;
    margin-left: 0.5em;

    h6 {
        font-weight: 600;
        font-size: 13px;
        margin-bottom: 5px;
        color: #e4e6eb;
    }

    p {
        color: #e4e6eb;
        line-height: 20px;
        font-size: 15px;
        font-weight: 400;
    }
`