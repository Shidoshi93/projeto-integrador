import React from 'react'
import { useParams } from 'react-router';

function PostDetail(){
    const {id} = useParams()
    return(
        <div>
            Detalhe do post {id}
        </div>
    )
}
export default PostDetail;