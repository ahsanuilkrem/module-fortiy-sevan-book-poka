import { toast } from "react-toastify";

const getStoredReadList = () =>{

    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
        const storedlist = JSON.parse(storedListStr);
        return storedlist;

    }
    else{
        return[];
    }

}

const addToStoredreadList = (id) => {
    const storedlist = getStoredReadList();
    if(storedlist.includes(id)){
        console.log(id, 'already exists in the read list')

    }
    else{
        storedlist.push(id);
        const storedListStr = JSON.stringify(storedlist);
        localStorage.setItem("read-list", storedListStr);

        // ideally alert toastify for the add

        toast('this book is added to you read list.')
    }
}

export{addToStoredreadList, getStoredReadList}