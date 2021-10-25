import "./listList.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Link } from "react-router-dom";
import {  useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllListRequest, fetchDeleteListRequest } from "../../store/list/listActionCreator";

export default function ListList() {
  const lists = useSelector(state => state.list.list)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllListRequest())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(fetchDeleteListRequest(id))
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlinedIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}