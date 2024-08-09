export function header() {
    return (
        <header className="bg-amber-100 shadow-md w-full flex items-center justify-between  size-32">
            <a href='http://localhost:3000/'><img src="/logo.png" className="pl-10 size-24 w-64" alt="logo"></img></a>
            <img src="/user.png" className="pr-5 flex-shrink-0 size-10 w-16" alt="perfil"></img>
        </header>
    )
}