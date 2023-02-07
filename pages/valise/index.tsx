import Link from 'next/Link';
import React from 'react';

import { useRouter } from 'next/router'


const index = () => {
  const router = useRouter();

  const testProject = 'testProject'
  const id = 'testId'

  const onClickButton = () => {
    router.push(`/valise/${testProject}/${id}`);
  }
  return (
    <>
      <div>index</div>
      <Link href="/valise/posts">
        <h2>Link to posts</h2>
      </Link>
      <Link href={`/valise/${testProject}/${id}`}>
        <h2>Link to {id}</h2>
      </Link>
      <button onClick={onClickButton}>
        Move
      </button>
    </>
  )
}

export default index
