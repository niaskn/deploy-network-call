import {useEffect} from 'react';
import { getUsers } from '../../api/apiUrl';

const Users = () => {
    const fetchUsers = async() => {
        await getUsers()
        .then((response: any) => {
            console.log(response.data);
        })
        .catch((eror: any) => {
            console.log(eror);
        });
    };
    useEffect(() => {
        fetchUsers();
    }, []);
  return (
    <div>Users</div>
  )
}

export default Users;