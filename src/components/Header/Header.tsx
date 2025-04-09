import Logo from '../../assets/logo.svg?react'

export const Header = () => {
    return (
        <header className="text-white h-24 flex items-center justify-center">
            <Logo className="h-8 w-8 fill-white" />
            <h1 className="text-2xl font-black text-shadow-lg/20">
                My Train Station
            </h1>
        </header>
    )
}