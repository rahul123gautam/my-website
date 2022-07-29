import React from "react";
import Img from './Image/profile_photo.jpg'
import C from './Image/c.svg'
import Java from './Image/java.svg'
import Html from './Image/html.svg'
import Css from './Image/css.svg'
import Javascript from './Image/javascript.svg'
import REACT from './Image/react.svg'
import Sql from './Image/sql.svg'
import Mysql from './Image/mysql.svg'
import Visual_code from './Image/Visual_Studio.svg'
import VS from './Image/VS_Code.svg'
import Git from './Image/git.svg'
import Github from './Image/github.svg'
export default function About(){
    return(
        <div id="about">
            <div id="photo">
                    <img src={Img} id="pro_photo" alt="profile_photo"></img>
            </div>
            <h1 id="word-h1" className="style-word">📜A Little About Me📜</h1>
            <ul>
                <li>Currently working at <span className="style-word">Project</span>(not anounced)</li>
                <li>Loves <span className="style-word">Tech Communities</span>👨‍👩‍👦‍👦 and <span className="style-word">Hackathons</span>👨‍💻</li>
                <li>Currently studying <span className="style-word">B.tech</span> from <span className="style-word">HNB Garhwal University, Srinagar</span>🏫 in <span className="style-word">Infomation Technology👨‍💻</span></li>
            </ul>
            <h1 id="word-h1">👨‍💻My Tech Skills👨‍💻</h1>
            <h3>🔭Tech I Have Experimented With🔭</h3>
            <div className="tech-stack">
                <img src={C} alt="kjdfh" className="radius-img"></img>
                <img src={Java} alt="kjdfh" ></img>
                <img src={Html} alt="kjdfh" ></img>
                <img src={Css} alt="kjdfh" ></img>
                <img src={Javascript} alt="kjdfh" ></img>
                <img src={REACT} alt="kjdfh" className="radius-img"></img>
                <img src={Sql} alt="kjdfh" ></img>
                <img src={Mysql} alt="kjdfh" ></img>
            </div>
            <h3>🔧Tools I Regularly Use🔧</h3>
            <div className="tech-stack">
                <img src={Visual_code} alt="kjdfh" ></img>
                <img src={VS} alt="kjdfh" ></img>
                <img src={Git} alt="kjdfh" ></img>
                <img src={Github} alt="kjdfh" ></img>
            </div>
            <h3 className="learning">🌱Currently learning🌱</h3>
        </div>
    )
}