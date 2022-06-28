
type Layout={
    children:JSX.Element
}
const Layout=({children}:Layout) => {
    return <section className=" container rounded-2xl border-slate-200 border my-24 overflow-hidden px-16 py-8 shadow-lg min-h-screen">
        {children}
    </section>
}
export default Layout