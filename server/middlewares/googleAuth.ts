const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.G00GLE_CLIENT_ID);

const googleAuth = async (token : string) => {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.G00GLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    console.log(`User ${payload.name} verified`);

    const { sub, email, name, picture } = payload;
    const googleId = sub;
    return { name, email, googleId, profilePicture: picture };
};

export default googleAuth;
