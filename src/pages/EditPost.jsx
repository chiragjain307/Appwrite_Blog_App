import React, {useEffect} from 'react'
import { Container, Post_upload_form } from '../components/index'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
            .then((post) => post ? setPosts(post) : null)  
        }else{
            navigate('/')
        }
    }, [slug, navigate])
  
    return posts? (
    <div className='py-8'>
        <Container>
            <Post_upload_form post={posts}/>
        </Container>
    </div>
  ) : null
}

export default EditPost