import { useState,useEffect } from "react"
import BackButton from "../components/backButton"
import Spinner from "../components/spinner"
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom"

const EditBook=()=>{
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [publishYear,setPublishYear]=useState("")
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3000/books/${id}`).then((response)=>{
            setAuthor(response.data.author)
            setTitle(response.data.title)
            setPublishYear(response.data.publishYear)
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleEditBook=()=>{
        const data={
            title,author,publishYear
        }
        setLoading(true)
        axios.put(`http://localhost:3000/books/${id}`,data).then(()=>{
            setLoading(false)
            navigate("/")
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }
    return(
        <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create Books</h1>
        {loading? <Spinner />:""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4 ">
                <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
                <input type="text" className="border-2 border-gray-500 px-4 w-full" id="title"  value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
            </div>
            <div className="my-4 ">
                <label htmlFor="author" className="text-xl mr-4 text-gray-500">Author</label>
                <input type="text" className="border-2 border-gray-500 px-4 w-full" id="author"  value={author} onChange={(e)=>{
                    setAuthor(e.target.value)
                }}/>
            </div>
            <div className="my-4 ">
                <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">Publish Year</label>
                <input type="text" className="border-2 border-gray-500 px-4 w-full" id="publishYear"  value={publishYear} onChange={(e)=>{
                    setPublishYear(e.target.value)
                }}/>
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
        </div>



    </div>
    )
}
export default EditBook