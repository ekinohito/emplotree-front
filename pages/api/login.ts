import type { NextApiRequest, NextApiResponse } from "next";
import { LoginResponse } from "src/types/LoginResponse";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LoginResponse>
) {
    res.status(200).json({
        status: "ok",
        jwt: "jeff.web.token",
        person: {
            infoComplete: false,
            id: "jeff",
            name: "Jeff"
        }
    });
}
