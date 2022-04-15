import { Request, Response } from 'express';
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.G00GLE_CLIENT_ID);

const googleAuth = async (req: Request, res: Response, next: any) => {
    const token = req.headers.authorization;
    console.log(token);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.G00GLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    console.log(`User ${payload.name} verified`);
    const { sub, email, name, picture } = payload;
    const userId = sub;
    return { userId, email, fullName: name, photourl: picture };
};

module.exports = googleAuth;
