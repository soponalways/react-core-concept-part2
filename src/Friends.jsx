import { use } from "react"

export default function Friends ({ friendsPromise }) {
    const friends = use(friendsPromise)
    console.log(friends);
    return (
        <section className="card">
        <div>Total Friends below</div>
        <ol>
        {
            friends.map(friend => (
                (<li style={{textAlign: "left"}}>{friend.name}</li>)
            ))
        }
        </ol>
        </section>
    )
}