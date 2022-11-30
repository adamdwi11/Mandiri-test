import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTable from "./../table/hooks/UseTable";
import TableFooter from "./../table/paginate/TableFooter";

const TableUser = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <>
            <table className="table table-striped caption-top">
                <thead>
                    <tr style={{backgroundColor:'#3783C6 !important'}}>
                        <th scope="col" style={{bbackgroud:'#3783C6'}}>ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">rank</th>
                        <th scope="col">Type</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el,idx) => (
                        <tr key={el.id}>
                            <td><Link to={`./${el.id}`}>{el.id}</Link></td>
                            <td>{el.name}</td>
                            <td>{el.symbol}</td>
                            <td>{el.rank}</td>
                            <td>{el.type}</td>
                            <td>{el.is_active === true ? 'true' : 'false'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col-12">
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            </div>
        </>
    );
};

export default TableUser;