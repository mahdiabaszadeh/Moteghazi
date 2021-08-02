import axios from 'axios';
import React,{ useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveSingleDataItem } from '../store/actions/saveDataAction';
import Item from '../components/Item';


const ItemDetail = ()=>{

    const {code}=useParams();
    const REQUIREMENT_ITEM_API = `https://moteghazi.com/api/1.0.0/requirement/requirement?code=${code}`;
    const dispatch = useDispatch();

    const dataItem = useSelector(state => state?.items?.data);

    useEffect(() => {
        axios.get(REQUIREMENT_ITEM_API)
        .then(function (response) {
            // handle success
            dispatch(saveSingleDataItem(response.data));
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }, [])

    return(
        <Item data={dataItem} />
    )
}

export default ItemDetail;