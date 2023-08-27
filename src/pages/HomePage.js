import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../features/userSlice";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

const HomePage = () => {

  const { users } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(null);
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {

    setIndex(i);
    setOpen(!open);

  }

  return (
    <>
      <div className="grid grid-cols-3 p-5 gap-4">
        {users && users.map((user, i) => {
          return <div key={i}>
            <h1>{user.username}</h1>
            <img src={user.image} alt="" />

            <div className="flex justify-end space-x-5 p-2">
              <button onClick={() => handleOpen(i)} className="text-red-700"><i className="fa-solid fa-trash"></i></button>
              <button onClick={() => nav(`/user/update/${user.id}`)} className="text-green-700"><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
          </div>
        })}


      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are You Sure?</DialogHeader>
        <DialogBody divider>
          You Want To Remove This User Info
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={() => {
            dispatch(removeUser(index));
            handleOpen();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </>
  )
}
export default HomePage