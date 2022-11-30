import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
    const range = [];
    let num = Number;
    !data ? num = 1 : num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (i; i <= num; i++) {
        range.push(i);
    }
    if (!data) {
        return []
    } else {
        return range;
    }
};

const sliceData = (data, page, rowsPerPage) => {
    if (!data) {
        return []
    } else {
        return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }
};

const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    if (!data) {
        return []
    } else {
        return { slice, range: tableRange };
    }
};

export default useTable;