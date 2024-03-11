import {useEffect , useState } from "react"

export default function Users(){
const [users,setUsers] =useState([]);

useEffect(()=>{
    fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(res => res.json())
    .then(data => setUsers(data))

},[])

    return(
        <div style={{
            border:'3px solid red',
            borderRadius:'15px',
            marginBottom:'20px'
            
        }}>
            <h4>users:{users.length}</h4>
        </div>
    )
}