import React from "react";

type Layout={
    children:JSX.Element | React.ReactNode
}
const Layout=({children}:Layout) => {
    return <section className=" container rounded-2xl border-slate-200 border my-24 overflow-hidden  shadow-lg min-h-screen">
        {children}
    </section>
}
export default Layout