import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"


function LeftSideBar() {
    return (
        <div>
            <SideBarLeftStyled>
                <div className="link">
                    <img src={profile} alt="" />
                    <p>John Doe</p>
                </div>
                <div className="link">
                    <div className="img">
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <p>Friends</p>
                </div>
                <div className="link">
                    <div className="img">
                        <i class="fas fa-users"></i>
                    </div>
                    <p>Groups</p>
                </div>
                <div className="link">
                    <div className="img">
                        <i class="fas fa-tv"></i>
                    </div>
                    <p>Watch</p>
                </div>
                <div className="link">
                    <div className="img">
                        <i class="fas fa-history"></i>
                    </div>
                    <p>Memories</p>
                </div>
                <div className="link">
                    <div className="img">
                        <i class="fas fa-flag"></i>
                    </div>
                    <p>Pages</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-bookmark"></i>
                    </div>
                    <p>Saved</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-calendar-check"></i>
                    </div>
                    <p>Events</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-star"></i>
                    </div>
                    <p>Favourites</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-gamepad"></i>
                    </div>
                    <p>Play Games</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-cloud"></i>
                    </div>
                    <p>Weather</p>
                </div>
                <div className="link">
                    <div className="img">
                    <i class="fas fa-briefcase"></i>
                    </div>
                    <p>Jobs</p>
                </div>
            </SideBarLeftStyled>
        </div>
    )
}

export default LeftSideBar

const SideBarLeftStyled = styled.nav`
height: 100vh;
width: 21vw;
padding: 0 20px;
overflow-y: hidden;
&:hover{
    overflow-y: scroll;
    width: 21vw;
}
.link{
    height: 60px;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    &:nth-last-child(1){
        margin-bottom: 100px;
    }
    img, .img{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            font-size: 1.5rem;
            color: #21A0EF;
        }
    }
    &:hover{
        background-color: #E4E6E9;
        cursor: pointer;
    }
    p{
        margin-left: 20px;
    }
}

`