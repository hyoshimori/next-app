// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs/promises'
import path from 'path'

export type Blog = {
  title: string,
  description: string,
  name: string,
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog | Blog[]>
) {

  // if (req.method === 'POST'){
  //   const data = {
  //     id: Math.floor(Math.random() * 1e5),
  //     title: req.body.title,
  //     description: req.body.description,
  //     name: req.body.name
  //   }
  if (req.method === 'GET'){
    const filePath = path.join(process.cwd(), 'data', 'blog_response.json')
    const json = await fs.readFile(filePath)
    const parsedJson = JSON.parse(json.toString())

  // TODO: Send data to database
  // res.status(201).json(data)
    // getiting data from database
    res.status(200).json(parsedJson)
  }
  // res.status(200).json({ name: 'John Doe' })
}
