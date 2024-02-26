
import {ContextStore} from './store/ContextApi.jsx';
import { useState} from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const [open, setOpen] = useState("");

    return (
        <ContextStore.Provider  value={{open,setOpen}}>
            {children}
        </ContextStore.Provider>
    );
};

export default Layout;
