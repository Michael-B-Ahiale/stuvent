import React, { useState, useContext } from 'react'
import { collection, query, where, getDocs,getDoc,updateDoc,doc,setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  const [username,setUsername]=useState('');
  const [user, SetUser]=useState(null);
  const [err,setErr]=useState(false);

  const {currentUser}= useContext(AuthContext)
 console.log(currentUser);
  const handleSearch=async()=>{
    const q=query(collection(db,'users'),where('displayName','==', username))
  

    try{

    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     SetUser(doc.data())
    });
  }catch(err){
    setErr(true)
  }
  }

  const handleKey=(e)=>{
    e.code==='Enter'&& handleSearch();
  }

  const handleSelect=async()=>{
    //check wheteher the group (chats in firestore) exists, if not create
    const combinedId= currentUser.uid> user.uid ? 
    currentUser.uid + user.uid: user.uid + currentUser.uid;
   try{ const res=await getDoc (doc(db, 'chats',combinedId))
   if (!res.exists()){
    //create chat in chats collection
    await setDoc(doc(db,'chats',combinedId),{messages:[]});
    //create user chats
    await updateDoc(doc(db, 'UserChats',currentUser.uid),{
      [combinedId+'.userInfo']:{
        uid:user.uid,
        displayName:user.displayName,
        photoURL: user.photoURL
      },
      [combinedId+'.date']:serverTimestamp()
    })

    await updateDoc(doc(db, 'UserChats',user.uid),{
      [combinedId+'.userInfo']:{
        uid:currentUser.uid,
        displayName:currentUser.displayName,
        photoURL: currentUser.photoURL
      },
      [combinedId+'.date']:serverTimestamp()
    })
   }
  }catch(err){}

    SetUser(null)
    setUsername('')
  };
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find forum' 
        onKeyDown={handleKey}
        onChange={e=>setUsername(e.target.value)}
        value={username}/>
      </div>
      {err && <span>User not found</span>}
      {user &&<div className="userchat" onClick={handleSelect}>
        <img src={user.photoURL} />
        <div className="userchatinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
      
    </div>
  )
}

export default Search
