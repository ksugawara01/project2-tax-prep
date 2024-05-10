import { useEffect, useState } from "react"
import userService from '../../services/users'
import userPicture from '../../assets/profile-picture.png'
import './ProfilePage.css'
import { Button, ButtonGroup, Label, TextInput } from '@trussworks/react-uswds'
import { useDispatch, useSelector } from "react-redux"
import { updateCurrentUser } from "../../slices/currentUserSlice"

export default function ProfilePage() {
 
    const [changeUserField, setChangeUserField] = useState('');
    const [edit, setEdit] = useState(false)

    const currentUser = useSelector((store : any) => store.currentUser);

    const dispatch = useDispatch();

    const [profile, setProfile] = useState({
        userId: '',
        username: '',
        email: '',
    });

    useEffect(()=> {
        userService.getUserById(currentUser.userId)
        .then((response)=>{
            setProfile(response);
        })
    },[])

    useEffect(()=> {
        userService.getUserById(currentUser.userId)
        .then((response)=>{
            setProfile(response);
        })
    },[currentUser])

    const handleUserChange = () => {
        console.log()
        dispatch(updateCurrentUser(changeUserField));
        setChangeUserField('');
    };

    // Updates the form data when the user changes an input
    const handleUserFormChange = (event : any) => {
        const { value } = event.target
        setChangeUserField(value)
    }

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const handleEditSubmit = () => {
        toggleEdit();
        userService.updateUser(profile);
        dispatch(updateCurrentUser(currentUser.userId))
    }

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setProfile((prevState : any) => ({ ...prevState, [name]: newValue }))
    }

    return (
        <>
            <div id='profile'><img src={userPicture} id='profile-picture2'/>User Profile</div>
            <h3>Username:</h3>
            {
                edit ?
                    <TextInput id='profile-username' name='username' type='text' value={profile.username} onChange={handleFormChange}></TextInput> :
                    <div>{profile.username}</div>
            }
            <h3>Email:</h3>
            {
                edit ?
                    <TextInput id='profile-email' name='email' type='text' value={profile.email} onChange={handleFormChange}></TextInput> :
                    <div>{profile.email}</div>
            }
            <h3>Password</h3>
            {
                edit ?
                    <TextInput id='profile-password' name='password' type='password' defaultValue='*********'></TextInput> :
                    <div>*********</div>
            }
            {
                edit ?
                    <Button className='edit-submit-button' type='button' onClick={handleEditSubmit}>Submit</Button> :
                    <Button className='edit-submit-button' type='button' onClick={toggleEdit}>Edit</Button>
            }
            
            <Label id='change-user-label' htmlFor='confirmPassword'>Change User</Label>
            <TextInput id='change-user-field' name='changeUserField' type='text' value={changeUserField} onChange={handleUserFormChange}/>
            <Button id='change-user-button' type='button' onClick={handleUserChange}>Switch User</Button>

        </>
    )
}