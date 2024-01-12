import Link from "next/link";
import { getSession } from 'next-auth/react'

export default function Home(){
    return (

        <div>
            <h1>Profile Page</h1>
             <Link href={"/"}>Home Page</Link>

        </div>
   
    )
}

export async function getServerSideProps({ req }){
    const session = await getSession({ req })

    if(!session){
        return {
            redirect : {
                destination : "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}