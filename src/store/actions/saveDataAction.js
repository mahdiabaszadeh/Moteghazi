export const SAVE_DATA_ITEMS = "saveDataItems";
export const SAVE_SINGLE_DATA_ITEM = "saveSingleDataItem"

export const saveDataItems = (payload)=> ({
    type: SAVE_DATA_ITEMS,
    payload
});

export const saveSingleDataItem = (payload)=>({
    type: SAVE_SINGLE_DATA_ITEM,
    payload
})