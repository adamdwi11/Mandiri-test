import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Coin.css"

const DetailCoin = () => {
    const [data, setData] = useState();
    const [errMessage, setErrMessage] = useState({ 'status': false });

    const url = window.location.href

    function fetchDataRest() {
        return new Promise(() => {
            setTimeout(() => {
                const request = async () => {
                    await axios(
                        `https://api.coinpaprika.com/v1/coins/${url.split('/')[3]}`
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
        <div className="container text-center" style={{ marginTop: 10 }}>
            <div className="row card text-start ">
                <div className="col m-3">
                    <h4 style={{backgroundColor:'#2569A5'}}>Coin List</h4>
                </div>
                {
                    !data?.data ? 
                    <div className="col-12 col-md-12 m-3"> <p>loading...</p></div>
                        :
                        <div className="col-12 col-md-12 m-3">
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>ID </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.id}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Name </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.name}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Symbol </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.symbol}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Type</h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.type}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Active </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.is_active === true ? 'true' : 'false'}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>is new ?</h6></div>
                                <div className='col-4'><h6 className='text-detail'>{data?.data?.is_new === true ? 'true' : 'false'}</h6></div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default DetailCoin;