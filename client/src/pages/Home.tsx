import { useEffect, useState } from 'react';
import Category from '../components/Category/Category';
import PostGrid from '../components/PostGrid/postgrid';
import axios, { AxiosResponse } from 'axios';
export default function Home() {
    const [data, setData] = useState([]);

    const getPosts = async () => {
        const res: AxiosResponse = (await axios
            .get('http://localhost:8080/')
            .catch((err) => console.log(err))) as AxiosResponse;

        console.log(res.data);
        setData(res.data);
    };
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="home">
            <Category />
            <PostGrid data={data} />
        </div>
    );
}
