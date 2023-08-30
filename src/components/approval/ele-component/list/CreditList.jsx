import React from 'react';
import CreditListCss from './CreditList.module.css'
import {Link} from "react-router-dom";
import Status from "../table/Status";

function CreditList({data}) {

  if (!data){
    return (
        <div>
          기안할 문서가 없습니다.
        </div>
    )
  }

  return (
    data.map(d =>
    <div key={d.num} className={CreditListCss.approvalList}>
      <div className={CreditListCss.content}>
        <div>
          {d.emergency === 'Y' ?
            <span className={CreditListCss.alert}>
            긴급
            </span>
            : ''
          }
          <Status status={d.status}/>
        </div>
        <p className={CreditListCss.docNum}>{`문서번호-${d.id}`}</p>
        <h2 className={CreditListCss.title}>{d.title}</h2>
        <div className={CreditListCss.subContent}>
          <p className={CreditListCss.date}>{d.createdDate}</p>
          <p>{`기안자 ${d.auth}`}</p>
        </div>
      </div>
      <Link className={CreditListCss.go} to={`document/${d.id}`}>
        결재하기
      </Link>
    </div>)
  );
}

export default CreditList;