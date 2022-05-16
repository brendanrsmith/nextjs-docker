// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })

} // This is the "Hello World" example API route. It just responds with a JSON object.