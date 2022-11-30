import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import FooterContent from '../footer';

const Home = () => {
    const [data, setData] = useState();
    const [errMessage, setErrMessage] = useState({ 'status': false });

    function fetchDataRest() {
        return new Promise(() => {
            setTimeout(() => {
                const request = async () => {
                    await axios(
                        'https://api.coinpaprika.com/v1/coins'
                    ).then((res) => {
                        setData(res);
                    }).catch((err) => {
                        setErrMessage({ ...errMessage, 'status': true, 'fetchData': err.message })
                    })
                };
                return request()
            }, 500);
        });
    };

    useEffect(() => {
        fetchDataRest()
    }, []);

    return (
        <div>
            <div className='row mt-3'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/" >Coin List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div style={{ background: "#F3F7FB", paddingTop: 20 }} >
                <Outlet context={[data, errMessage]} />
                <FooterContent />
            </div>
        </div>
    )
}
export default Home;