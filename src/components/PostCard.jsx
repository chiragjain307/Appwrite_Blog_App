import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl  gap-[30px]'>
                <div className='w-full mb-4   shadow-xs rounded'>
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <div className='flex flex-col items-start justify-start w-[87%] gap-[15px]'>
                <div className="flex flex-row justify-start items-center gap-2">
                  <span as="p">by John Doe |</span>
                  <span as="p">15 March, 2022</span>
                </div>
                </div>
                <h2 className='text-xl font-bold'>{title} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ut atque aliquam aliquid provident, illum voluptate quae doloribus soluta beatae ipsam accusamus, adipisci blanditiis a eius quas. Odio, placeat! Assumenda nesciunt dolorem explicabo culpa voluptas ratione fuga, vel officia, repudiandae saepe modi esse sit earum corporis cum fugit repellendus maxime.</h2>
            </div>
            
        </Link>
    )
}

export default PostCard