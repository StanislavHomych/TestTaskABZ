import './Users.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchToken, newUsersData } from '../../redux/slices/usersSlice';
import Card from "./../../components/Card/Card";
import Button from "../../components/Btn/Button";
import axios from 'axios';


const Users = () => {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => { return state.usersSlice })

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchToken())

    }, [usersList.isUserRegisteredSucces])


    let loadMoreUsers = () => {
        return axios
            .get(usersList.nextUrl)
            .then((response) => dispatch(newUsersData({ url: response.data.links.next_url, page: response.data.page, users: response.data.users })));
    }

    return (
        <div className='usersWrapper'>
            <h1 className='usersWrapper-heading'>Working with GET request</h1>
            <div className='usersWrapper-items'>
                {
                    usersList.users.map((user) => {
                        return (
                            <Card key={user.id} name={user.name} email={user.email} phone={user.phone} position={user.position} photo={user.photo}></Card>
                        )
                    })
                }
            </div>

            {
                usersList.currentPage !== usersList.totalPages && (<Button bigSize={true} handleClick={loadMoreUsers}>Show more</Button>)
            }
        </div>
    )
}

export default Users