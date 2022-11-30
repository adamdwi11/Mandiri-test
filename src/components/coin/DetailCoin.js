import React from 'react'
import { useOutletContext } from 'react-router-dom';
import "./Coin.css"

const DetailCoin = () => {
    const [data] = useOutletContext();

    const url = window.location.href
    let tempData = data?.data.filter((e)=>e.id === url.split('/')[3])

    return (
        <div className="container text-center" style={{ marginTop: 10 }}>
            <div className="row card text-start ">
                <div className="col m-3">
                    <h4 style={{color:'#2569A5'}}>Coin List</h4>
                </div>
                {
                    !data?.data ? 
                    <div className="col-12 col-md-12 m-3"> <p>loading...</p></div>
                        :
                        <div className="col-12 col-md-12 m-3">
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>ID </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].id}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Name </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].name}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Symbol </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].symbol}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Type</h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].type}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>Active </h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].is_active === true ? 'true' : 'false'}</h6></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><h6 className='text-detail'>is new ?</h6></div>
                                <div className='col-4'><h6 className='text-detail'>{tempData[0].is_new === true ? 'true' : 'false'}</h6></div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default DetailCoin;