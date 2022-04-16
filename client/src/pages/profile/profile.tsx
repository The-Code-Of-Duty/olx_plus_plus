import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PostGrid from '../../components/PostGrid/postgrid';
import OrderDetails from '../../components/orderDetails/orderDetails';
import axios, { AxiosResponse } from 'axios';
import './profile.scss';

function Profile(props: any) {
    const userProfile = props.userData.profileUrl;
    const userName = props.userData.name;
    const userEmail = props.userData.email;

    const [data, setData] = useState([]);
    const [bought, setBought] = useState([]);
    const getPosts = async () => {
        if (userEmail !== '') {
            const res: AxiosResponse = (await axios
                .get(`http://localhost:8080/allposts/${userEmail}`)
                .catch((err) => console.log(err))) as AxiosResponse;

            console.log(res.data);
            if (res && res.data) setData(res.data);
        }
    };
    const getBought = async () => {
        if (userEmail !== '') {
            const res: AxiosResponse = (await axios
                .get(`http://localhost:8080/allbought/${userEmail}`)
                .catch((err) => console.log(err))) as AxiosResponse;

            if (res && res.data) setBought(res.data);
        }
    };
    useEffect(() => {
        getPosts();
        getBought();
    }, [userEmail]);

    return (
        <div className="profile">
            <div className="section-1">
                <Avatar
                    alt={userName}
                    src={userProfile}
                    sx={{ width: 128, height: 128 }}
                />
            </div>
            <div className="section-2">
                <div className="userName">{userName}</div>
                <Divider />
                <div className="myPosts">
                    <h3>Your Ads</h3>
                    <PostGrid data={data} />
                </div>
                <Divider />
                <div className="myBuys">
                    <h3>Your orders</h3>
                    {bought.map((post: any, index: any) => {
                        return <OrderDetails data={post} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Profile;
