import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../features/userSlice';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';

const HomePage = () => {

    const { users } = useSelector((store) => store.userInfo);
    const dispatch = useDispatch();
    const [index, setIndex] = useState(null);
    const nav = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = (i) => {
        setOpen(!open);
        setIndex(i);
        setOpen(!open);
    }


    return (
        <>
            <div className='grid grid-cols-3 p-5 gap-4'>
                {users && users.map((user, i) => {
                    return <div key={i}>
                        <h1>{user.username}</h1>
                        <img className='w-max' src={user.image} alt='Loading...' />

                        <div className='flex justify-end space-x-5 p-2'>
                            <button onClick={() => handleOpen()} className='text-red-500'><i className="fa-solid fa-trash"></i></button>
                            <button className='text-gray-500'><i className="fa-solid fa-file-pen"></i></button>
                        </div>
                    </div>
                })}
            </div>

            {!index && <Dialog open={open} handler={handleOpen}>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Are You Sure.</DialogHeader>
                    <DialogBody divider>
                        Do you want to delete the data ?
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="gradient" color="green" onClick={handleOpen} className="mr-1">
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="red" onClick={() => dispatch(removeUser(index))}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
             }
            </>

    )
}

            export default HomePage ;
