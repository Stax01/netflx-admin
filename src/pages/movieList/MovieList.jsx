import "./movieList.scss";
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from 'react-redux'
import { fetchDeletMovieRequest, fetchMovieAllRequest } from "../../store/movie/movieActionCreator";


export default function MovieList() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.movie.items)
  
  
  
  const handleDelete = (id) => {
    dispatch(fetchDeletMovieRequest(id))
  };
  
  React.useEffect(() => {
    dispatch(fetchMovieAllRequest())
  }, [dispatch])
  console.log(items)
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/movie/" + params.row._id, movie: params.row }}>
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
      { items &&
        <DataGrid
          rows={items}
          disableSelectionOnClick
          columns={columns}
          pageSize={16}
          checkboxSelection
          getRowId={(r) => r._id}
        />}
   
       </div>
  )
}