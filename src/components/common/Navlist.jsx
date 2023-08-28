import React from 'react';
import {Link} from "react-router-dom";
import NavListCss from './Navlist.module.css';

function Navlist({title, data}) {
  return (
    <>
      <div className={NavListCss.title}>{title}</div>
      <ol>
        {
          data.map((d, index) =>
            <li key={index} className={NavListCss.list}>
              <Link to={d.link} className={NavListCss.list_link} state={{link:d.link}}>
                {d.text}
              </Link>
            </li>
          )
        }
      </ol>
    </>
  );
}



export default Navlist;