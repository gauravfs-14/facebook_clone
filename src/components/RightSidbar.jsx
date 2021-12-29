import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"



function RightSidbar() {
    return (
        <SidebarRightStyled>
            <div className="head">
                <p>Contacts</p>
                <div className="headIcons">
                    <div className="icon"><i class="fas fa-video"></i></div>
                    <div className="icon"><i class="fas fa-search"></i></div>
                    <div className="icon"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
            </div>
            <div className="link">
                    <img src={profile} alt="" />
                    <p>Contact</p>
                </div>
        </SidebarRightStyled>
    )
}

export default RightSidbar

const SidebarRightStyled = styled.nav`
width: 20vw;
overflow-y: hidden;
padding: 0 20px 50px 0;
height: 100vh;
&:hover{
    overflow-y: scroll;
}
.head{
    width: calc(20vw - 5px);
    color: #717377;
    display: flex;
    justify-content: space-between;
    font-weight: 900;
    align-items: center;
margin-bottom: 20px;
    .headIcons{
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    .icon{
        padding: 5px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
    &:hover{
        background-color: #E4E6E9;
        cursor: pointer;
    }
}
    }
}
.link{
    height: 55px;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    &:nth-last-child(1){
        margin-bottom: 100px;
    }
    img{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover{
        background-color: #E4E6E9;
        cursor: pointer;
    }
    p{
        margin-left: 10px;
    }
}

`