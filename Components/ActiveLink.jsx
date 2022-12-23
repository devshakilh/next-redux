import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: href ? 'white ' : 'black',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        // <a href={href} onClick={handleClick} className={ router.asPath === href ? 'active p-0 m-0' : ''} style={style}>
        <a href={href} onClick={handleClick}
            className={router.asPath === href ? '   mr-5 border-black border-b-2 text-white' : 'text-black   mr-5'}  >

            {children}
        </a>
    )
}

export default ActiveLink