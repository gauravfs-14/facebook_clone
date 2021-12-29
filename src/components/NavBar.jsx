import React from 'react';
import styled from 'styled-components';
import profile from "../img/profile.jpg"
function NavBar() {
    return (
        <>
            <NavBarStyled>
                <div className="left">
                    <div className="logo">
                        <i class="fab fa-facebook"></i>
                    </div>
                    <input type="search" name="" id="" placeholder="Search Facebook" />
                </div>
                <div className="center">
                    <div className="headIcons">
                        <i class="fas fa-home"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-tv"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-users"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-gamepad"></i>
                    </div>
                </div>
                <div className="right">
                    <div className="profile">
                        <img src={profile} alt="" />
                        John
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-align-justify"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-comment"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div className="headIcons">
                        <i class="fas fa-arrow-circle-down"></i>
                    </div>
                </div>
            </NavBarStyled>
        </>
    )
}

export default NavBar

const NavBarStyled = styled.nav`
display: flex;
height: 55px;
width: 100vw;
justify-content: space-between;
align-items: center;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
z-index: 100;
background-color: #FFFFFF;
box-shadow: 0 0 10px #d3d3d3;

.left{
    display: flex;
    width: 21vw;
    justify-content: space-between;
    align-items: center;
    .logo{
        font-size: 2.5rem;
        color: #0571E6;
    }
    input{
        height: 40px;
        border: none;
        outline: none;
        font-size: 100%;
        background-color: #F0F2F5;
        border-radius: 30px;
        width: 85%;
        padding: 15px;
    }
}
.center{
    display: flex;
    width: 25vw;
    justify-content: space-between;
    font-size: 1.3rem;
    text-align: center;
    .headIcons{
        width: 23%;
        color: #606266;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        
        &:nth-child(1){
            color: #1B74E4;
            padding: 10px;
            margin: 0;
            position: relative;
            &:hover{
                border-radius: 0;
                background-color: #FFFFFF;
            }
            &::after{
                content: "";
                width: 100%;
                position: absolute;
                left: 0;
                bottom: -3px;
                height: 5px;
                background-color:#1B74E4 ;

            }
        }
        &:hover{
            background-color: #F2F2F2;
            border-radius: 10px;
        }
    }
}
.right{
    display: flex;
    width: 20vw;
    justify-content: space-between;
    align-items: center;
    .profile{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2px 10px 2px 2px;
        img{
            height: 35px;
            width: 35px;
            border-radius: 50%;
            margin-right: 5px;
            font-weight: bolder;
        }
        &:hover{
            background-color: #F2F2F2;
            cursor: pointer;
            border-radius: 50px;
        }
    }
    .headIcons{
        font-size: 1.2rem;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #E4E6EB;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
        background-color: #d7d9df;
            cursor: pointer;
        }
    }
}

`
