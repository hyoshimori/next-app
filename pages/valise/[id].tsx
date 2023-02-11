import React from 'react'
import { GetStaticProps } from 'next'
import fs from 'fs/promises'
import path from 'path'

type Props = {
   data: {id: string; description: string}[]
}

const ValiseList = (props: Props) => {
  const { data } = props
  // same as const data = props.data

  return (
    <div>
      <>
        <h1>Posts</h1>
        <ul>
          {data && data.map((v) => (
          <li key={v.id}>{v.description}</li>
          ))}
        </ul>
      </>
    </div>
  )
}

export default ValiseList

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const id = params?.id

  const filePath = path.join(process.cwd(), 'data', 'response.json')
  const json = await fs.readFile(filePath)
  const parsedJson = JSON.parse(json.toString())


  const data = {data: parsedJson.result}

  const posts = parsedJson.result.filter((v: any) => v.id === id)

  return{
    props: { data: posts },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{params: {id: '2'}}],
    fallback: false,
  }
}
