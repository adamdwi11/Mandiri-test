import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TableCoin from './TableCoin';

const CoinList = () => {
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
        <>
            <div className="container text-center card" style={{ marginTop: 30, border: '0.5px solid #E3EBF4', boxShadow: '0px 4px 8px rgba(0, 148, 255, 0.25)' }}>
                <div className="row">
                    <div className="col text-start mt-3">
                        <h4>Coin List</h4>
                    </div>
                    <div className="col-12 col-md-12 mt-4">
                        {
                            !data?.data ? !errMessage.status
                                ? <p>loading...</p>
                                : <div className="alert alert-danger" role="alert">
                                    <i className="bi bi-exclamation-triangle-fill"> </i>
                                    {errMessage.fetchData}
                                </div>
                                : <TableCoin data={data?.data} rowsPerPage={10}></TableCoin>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinList;