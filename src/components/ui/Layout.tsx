"use client"

import { persister, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./Loader";



const Layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <Provider store={store}>
            
                        {children}
                  
            </Provider>
      );
};

export default Layout;