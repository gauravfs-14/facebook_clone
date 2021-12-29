import React from 'react'
import profile from "../img/profile.jpg"
import post from "../img/post.jpg"
import styled from 'styled-components'
import PostCard from './PostCard'


function MainContent() {
    return (
        <MainContentStyled>
            <div className="stories">
                <div className="storyCards">
                    <img src={profile} alt="" />
                    <i class="fas fa-plus-circle"></i>
                    <p>Create a Story</p>
                </div>
                <div className="storyCards">
                <img src={post} alt="" />
                    <p>Contact</p>
                </div>
                <div className="storyCards">
                <img src={post} alt="" />
                <p>Contact</p>

                </div>
                <div className="storyCards">
                <img src={post} alt="" />
                <p>Contact</p>

                </div>
                <div className="storyCards">
                <img src={post} alt="" />
                <p>Contact</p>

                </div>
            </div>

            <div className="uploadStatus">
                <div className="uploadField">
                    <img src={profile} alt="" />
                    <button >What's in your mind? John</button>
                </div>
                <div className="uploadButtons">
                    <button><i class="fas fa-image"></i>Photo/ Video</button>
                    <button><i class="fas fa-user-tag"></i>Tag Friends</button>
                    <button><i class="far fa-smile"></i>Feeling/ Activity</button>
                </div>
            </div>

            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            
            <div className="margin"></div>
        </MainContentStyled>
    )
}

export default MainContent

const MainContentStyled = styled.div`
overflow-y: hidden;
height: 100vh;
width: 50vw;
&:hover{
    overflow-y: scroll;
}
.margin{
    height: 100px;
    width: calc(50vw - 5px);
}
.stories{
    width: calc(50vw - 5px);
    height: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .storyCards{
        overflow: hidden;
        width: 19%;
        height: 100%;
        position: relative;
        border-radius: 10px;
        background-color: #ffffff;
        border: 1px solid #9e9e9e58;
        &:nth-child(1){
            p,i{
                background-color: #fff;
            }
            p{
                color: #000;
                height: 60px;
                line-height: 60px;
            }
            i{
                bottom: 45px;
            }
        }
img{
            height: 100%;
            width: auto;
            transform-origin: center;
        }
        p,i{
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
        }
        i{
            bottom: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index: 2;
            margin: 0 calc(50% - 20px);
            font-size: 2rem;
            line-height: 40px;
            color: #1B74E4;
        }
    }
}
.uploadStatus{
    width: calc(50vw - 5px);
    height: 130px;
    background-color: #fff;
    border: 1px solid #9e9e9e58;
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 20px;

    .uploadField{
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #9e9e9e58 ;
        padding-bottom: 8px;
        img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
        button{
            width: calc(100% - 60px);
            border-radius: 50px;
            resize: none;
            overflow-y: auto;
            padding: 5px;
            background-color: #F0F2F5;
            border: none;
            outline: none;
            cursor: pointer;
            text-align: left;
            padding: 0 20px;
            font-size: 1.1rem;
            color: #858585;
            &:hover{
                background-color: #e7e6e6;
            }
        }
    }
    .uploadButtons{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 50px;
        margin-top: 5px;
        button{
            width: 40%;
            font-size: 1rem;
            border: none;
            outline: none;
            background-color: transparent;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            i{
                margin-right: 10px;
                font-size: 1.5rem;
            }
            .fa-image{
                color: #41B35D;
            }
            .fa-user-tag{
                color: #1771E6;
            }
            .fa-smile{
                color: #EAB026;
            }
            &:hover{
                background-color: #F2F2F2;
            }
        }
    }
    
}
`
