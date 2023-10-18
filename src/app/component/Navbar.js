import Link from "next/link"
import styles from "@/app/styles/navbar.module.css"

const Navbar = () => {
    return (
        <>
            <nav className={`${styles.navbar} flex justify-between py-5 bg-slate-900 `}>
                <h1 className="text-5xl text-red-600 ms-9">Daily Run Rate</h1>
                <div className="nav-links">
                    <ul className="flex text-white">
                        <li className="mx-5"> <Link href={"/"}> Home </Link> </li>
                        <li className="mx-5"> <Link href={"/"}> About </Link> </li>
                        <li className="mx-5"> <Link href={"/"}> Contact </Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar