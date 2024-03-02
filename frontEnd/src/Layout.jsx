
import {ContextStore} from './store/ContextApi.jsx';
import { useState} from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const [open, setOpen] = useState("");
    const [directory, setDirectory] = useState([]);
    return (
        <ContextStore.Provider  value={{open,setOpen,directory,setDirectory}}>
            {children}
        </ContextStore.Provider>
    );
};

export default Layout;
