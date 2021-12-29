import React from 'react'
import profile from "../img/profile.jpg"
import post from "../img/post.jpg"
import styled from 'styled-components'

function PostCard() {
    return (
        <PostCardStyled>
            <div className="postHead">
                <div className="userHead">
                    <img src={profile} alt="" />
                    <div>
                    <p className="contactName">Contact Name</p>
                    <p>2 hrs</p>
                    </div>
                </div>
                <div className="icon"><i class="fas fa-ellipsis-h"></i></div>
            </div>
            <div className="caption">
                This is the User Caption!
            </div>
            <div className="postImg">
                <img src={post} alt="" />
            </div>
            <div className="postReact">
                <button><i class="far fa-thumbs-up"></i>Like</button>
                <button><i class="far fa-comment-alt"></i>Comment</button>
                <button><i class="far fa-share-square"></i>Share</button>
            </div>
        </PostCardStyled>
    )
}

export default PostCard

const PostCardStyled = styled.div`
    width: calc(50vw - 5px);
    background-color: #fff;
    border: 1px solid #9e9e9e58;
    margin-bottom: 20px;
    border-radius: 10px;
    .postHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        .userHead{
            display: flex;
            align-items: center;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }
            div{
                .contactName{
                    font-weight: 900;
                    font-size: 1rem;
                    color: #000;
                }
                p{
                    font-size: 0.8rem;
                    color: #65676B;
                }
            }
        }
    }
    .caption{
        padding: 10px 20px;
    }
    .postImg{
        img{
            width: 100%;
            height: auto;
        }
    }
    .postReact{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 40px;
        padding: 10px 20px;
        border-top:  1px solid #9e9e9e58;
        button{
            width: 40%;
            font-size: 0.9rem;
            border: none;
            outline: none;
            background-color: transparent;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            i{
                margin-right: 10px;
                font-size: 1.2rem;
            }
            &:hover{
                background-color: #F2F2F2;
            }
        }
    }

`