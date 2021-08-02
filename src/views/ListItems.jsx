import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{
useParams
} from "react-router-dom";
import Items from '../components/Items';
import { saveDataItems } from '../store/actions/saveDataAction';

const ListItems = ()=>{

    const {limit,skip} = useParams();

    const REQUIREMENTS_LIST_API = `https://moteghazi.com/api/1.0.0/requirement/requirements?limit=${limit}&skip=${skip}`;

    const dispatch = useDispatch();
    const listData = useSelector(state => state?.items?.data);
    
    useEffect(() => {
        axios.get(REQUIREMENTS_LIST_API)
        .then(function (response) {
          // handle success
          dispatch(saveDataItems(response.data));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }, []);

    return(
        <Items data={listData} />
    )
}

export default ListItems