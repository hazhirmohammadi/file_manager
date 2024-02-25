
import {ContextStore} from './store/ContextApi.jsx';
import {useContext, useState} from "react";

const Layout = ({ children }) => {
    const [open, setOpen] = useState("");

    return (
        <ContextStore.Provider  value={{open,setOpen}}>
            {children}
        </ContextStore.Provider>
    );
};

export default Layout;
