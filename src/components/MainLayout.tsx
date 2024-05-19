import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const MainLayout:React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="main">
            <Header />
            <main>{children}</main>
            <Footer/>  
        </div>
    )
}

export default MainLayout;