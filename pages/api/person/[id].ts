import { NextApiRequest, NextApiResponse } from "next";
import PersonResponse from "src/types/PersonResponse";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PersonResponse | { status: "error" }>
) {
    const { id } = req.query
    if (typeof id !== "string") return res.status(404).json({status: "error"})
    const { authorization } = req.headers
    if (authorization !== "Bearer jeff.web.token") return res.status(401).json({status: "error"})
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
