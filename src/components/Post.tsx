import { Link } from 'react-router-dom'
import { PostDTO } from '../type/dio'
import classes from './Post.module.css'
import { useState } from 'react'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [ShowMorePost, setShowmore] = useState<boolean>(false)

  const toggleShow = () => {
    setShowmore(!ShowMorePost)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </Link>
      {ShowMorePost && <p>more post info...</p>}
      <button onClick={toggleShow}>{ShowMorePost ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}
export default Post
