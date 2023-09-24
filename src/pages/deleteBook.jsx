import { useState } from "react"
import BackButton from "../components/backButton"
import Spinner from "../components/spinner"
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"
const DeleteBook=()=>{
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const {id}=useParams()
    const HandleDeleteBook=()=>{
        setLoading(true)
        axios.delete(`http://localhost:3000/books/${id}`).then(()=>{
            setLoading(false)
            navigate("/")
        }).catch((error=>{
            console.error(error);
            setLoading(false)
            navigate("/")
        }))
    }
    return(
        <div className="p-4">
           <BackButton />
           <h1 className="text-3xl my-4"> Delete Book </h1> 
           {loading?(
            <Spinner />
           ):(
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                    <h3 className="tedt-2xl">Are You sure You want to delete this book? </h3>
                    <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={HandleDeleteBook}>Delete Book</button>
            </div>
           )}
        </div>
    )
}
export default DeleteBook