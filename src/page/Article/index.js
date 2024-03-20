import { useSearchParams,useParams } from "react-router-dom"

const Article = () =>{
    // const [params] = useSearchParams()
    // const id = params.get('id') 
    // const name = params.get('name') 
    const params = useParams()
    return <div>i am article id:{params.id},name:{params.name}</div>
}
export default Article