import React from "react";

function IconCount({icon, count}){

    return (
        <>
            {icon}
            <p>{count}</p>
        </>
    );
}

export default IconCount;