import { NextApiRequest, NextApiResponse } from "next";
import PersonResponse from "src/types/PersonResponse";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PersonResponse>
) {
    const { id } = req.query
    if (typeof id !== "string") return res.status(404)
    await new Promise(resolve => setTimeout(resolve, 200))
    res.status(200).json({ 
        status: "ok",
        person: {
            infoComplete: true,
            id,
            name: "Jeff",
            details: "nothing too special",
            subordinates: [
                {
                    infoComplete: false,
                    id: id + "x",
                    name: "Jeff"
                }
            ]
        }
     });
}
