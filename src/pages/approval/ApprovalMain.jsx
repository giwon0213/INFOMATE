import React, {useEffect, useState} from 'react';
import mainCss from '../../components/common/main.module.css';
import ApprovalTop from "../../components/approval/ApprovalTop";
import ApprovalTable from "../../components/approval/ele-component/table/ApprovalTable";
import {useDispatch, useSelector} from "react-redux";
import {getMainAPI} from "../../apis/DocumentAPICalls";
import { FadeLoader } from "react-spinners";
import loadingCss from '../../pages/calendar/loadingStyle.module.css';
import {GET_DOCUMENT_MAIN} from "../../modules/approval/DocumentModuels";


const ApprovalMain = () => {

  const dispatch = useDispatch();
  const documentData = useSelector(state => state.documentsReducer[GET_DOCUMENT_MAIN]);
  const data = documentData?.data;


  useEffect(() => {
        dispatch(getMainAPI({memberCode:43}));
      },[]
  );

  console.log(documentData)
  return (
    <>
      <div className={mainCss.maintitle}>
        <h2>전자결재 홈</h2>
      </div>
      {
        data?.length > 0 ?
            <div className={loadingCss.loading}>
              <FadeLoader color="#9F8AFB" />
            </div>
            :
            <>
              <ApprovalTop data={data?.creditList}/>
              <ApprovalTable title='기안문서' data={data?.approvalList}/>
              <ApprovalTable title='참조문서' data={data?.refList}/>
            </>
      }
    </>
  );
};

export default ApprovalMain;