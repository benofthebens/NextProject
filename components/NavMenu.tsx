import Link from "next/link";
import styles from "../app/NavMenu.module.css";
import { SignInButton } from "./buttons";

export default function NavMenu(){
     return(
          <nav className={styles.nav}>
                    <Link href={'/'}>
                         
                    </Link>
                    <ul className={styles.links}>
                         <li>
                              <Link href={"/about"}>About</Link>
                         </li>
                         <li>
                              <Link href={"/blog"}>Blog</Link>
                         </li>
                         <li>
                              <Link href={"/users"}>Users</Link>
                         </li>
                         <li>
                              <SignInButton/>
                         </li>
                    </ul>

          </nav>
     )
}