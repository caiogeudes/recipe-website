export function title(title: string) {
    return (
        <h1 className="font-medium font-serif text-5xl pt-20 pl-10 pb-12">{title}</h1>
    )
}

export function body(content: JSX.Element) {
    return (
        <div className="rounded bg-amber-100 w-5/6 mx-auto flex justify-center">
            <div className="grid grid-cols-3 gap-x-64 gap-y-10 pt-10 pb-10">
                {content}
            </div>
        </div>
    )
}