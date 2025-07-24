import React, { useState } from "react";
import colourcontext from "./usecolourcontext";

const Usecolourcontextprovider = (
    { children }
) => {
    const [colourname, setcolourname] = React.useState(null);


    return (
        <colourcontext.Provider value={{ colourname, setcolourname}}>
            {children}
        </colourcontext.Provider>

    )

}
export default Usecolourcontextprovider;