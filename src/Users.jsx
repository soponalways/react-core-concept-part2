import { use } from "react"

export default function Users({ usersPromise }) {
    const users = use(usersPromise); 
    console.log(users);
    return (
        <>
        <section className="card">
            <h3>Users: {users.length}</h3>
        </section>
        </>
    )
}