import React from 'react'
import TableCoin from './TableCoin';
import { useOutletContext } from "react-router-dom";

const CoinList = () => {
const [data] = useOutletContext();

    return (
        <>
            <div className="container text-center card" style={{ marginTop: 30, border: '0.5px solid #E3EBF4', boxShadow: '0px 4px 8px rgba(0, 148, 255, 0.25)' }}>
                <div className="row">
                    <div className="col text-start mt-3">
                        <h4>Coin List</h4>
                    </div>
                    <div className="col-12 col-md-12 mt-4">
                        {
                            !data?.data ? <p>tess</p>
                                ? <p>loading...</p>
                                : <div className="alert alert-danger" role="alert">
                                    <i className="bi bi-exclamation-triangle-fill"> </i>
                                    {data.errMessage.fetchData}
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