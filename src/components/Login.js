import React, { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
}
// const initialForm = {
//   username: '',
//   password: '',
// }

const Login = (props) => {

  const [ form, setForm ] = useState(initialForm);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", form)
    .then((res) => {
      console.log(res)
      if(form.username === 'Lambda School' && form.password === 'i<3Lambd4'){
        return (
          localStorage.setItem("token", JSON.stringify(res.data.payload))
        )

      } else {
        return (<p>"Sorry you cannot enter"</p>)
      }
    })
    .catch((err) => {
      console.log(err)
    })
    props.history.push('/bubbles')
  }

  const handleChange = e => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  useEffect(() => {  
    
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route at the path "/bubbles"
  })

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: 
            <input 
              id="username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">Password:
            <input 
              id="username"
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
        </div>
          <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.💪🏼
//2. Add whatever state nessiary for form functioning.💪🏼
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.💪🏼
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.💪🏼
//5. If the username / password is equal to Lambda 💪🏼School / i<3Lambd4, save that token to localStorage.

 // useEffect(()=>{
  //   axios
  //     .delete(`http://localhost:5000/api/colors/1`, {
  //       headers:{
  //         'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  //       }
  //     })
  //     .then(res=>{
  //       axios.get(`http://localhost:5000/api/colors`, {
  //         headers:{
  //           'authorization': ""
  //         }
  //       })
  //       .then(res=> {
  //         console.log(res);
  //       });
  //       console.log(res);
  //     })
  // });