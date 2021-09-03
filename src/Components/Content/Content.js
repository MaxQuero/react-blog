import React, {useContext} from 'react';
import './Content.scss';
import LightMode from "../LightMode/LightMode";
import {ThemeContext} from "../../Context/ThemeContext";
function Content() {

    const {theme} = useContext(ThemeContext);
    console.log(theme);
    return (
        <div className="container">
            <h1 className="content-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere.
            </h1>
            <div className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi atque delectus deserunt, ducimus ea eaque eos illo iste libero natus praesentium provident quas recusandae repellat saepe veritatis. Adipisci et fugiat laboriosam nam praesentium sequi sint! A accusamus corporis doloremque eaque exercitationem maiores quisquam reiciendis repellendus suscipit. Impedit odio quae quia quod recusandae temporibus voluptatum? Aut commodi cum debitis est illum inventore itaque praesentium sequi veniam voluptates? Aliquid animi autem corporis delectus deleniti doloremque dolorum, ducimus eligendi eos eum ex facilis harum id ipsa ipsum numquam obcaecati odit optio perferendis possimus quo quod repellat rerum temporibus totam unde vero voluptas. Blanditiis consectetur deleniti ea explicabo id, laborum molestiae saepe vitae! Accusamus accusantium alias aliquid asperiores, beatae blanditiis consequuntur corporis cum dignissimos dolore dolores doloribus ea eligendi excepturi explicabo fugiat harum hic illum inventore maxime minima molestiae natus nisi non officiis pariatur porro quia repellat repellendus sed soluta sunt ut vel.
            </div>
            <LightMode>
            </LightMode>
        </div>
    );
}

export default Content;