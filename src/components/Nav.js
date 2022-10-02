import React from "react";
import NavStyle from './Nav.module.css'

export default function Nav()
{


    return (
        <nav>
            <img src="https://dummyimage.com/75x75/000/fff.png&text=brand+logo" alt="NBAFans logo" className={NavStyle.imgPaddings} />
        </nav>
    )
}