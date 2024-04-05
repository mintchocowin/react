import React from "react";
const Viewer = ({ Currentnumber }) => {
  console.log("viewer component update!")
  return (
    // // <div>
    //   {/* {Currentnumber % 2 === 0 ? <h3>짝수입니다</h3> : <h3>홀수입니다</h3>}
    // </div> */}
    <div>Viewer</div>
  )
};

export default Viewer;

//component가 mount가 되는 순간 무조건 최초 rendering이 발생
//state값 변경 무조건 렌더링
//부모 component로부터 받아오는 props의 값이 변경되면 렌더링
//부모 렌더링 후 자식 렌더링