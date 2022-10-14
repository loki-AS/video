// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '../../utils/client'

import { allUsersQuery } from '../../utils/queries'

export default async function handler(req, res) {
    const data = await client.fetch(allUsersQuery());
  
    if(data) {
      res.status(200).json(data);
    } else {
      res.json([]);
    }
  }
  