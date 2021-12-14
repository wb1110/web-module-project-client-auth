import React from 'react'

const Login = () => {
    return (
        <div>
            <div className='login'>
                <h1>LOGIN</h1>
                <form className='form'>
                    <label className='formInput'>
                        USERNAME
                        <input className='inputBox' type="text" name="username"/>
                    </label>
                    <label  className='formInput'>
                        PASSWORD
                        <input className='inputBox'  type="password" name="password"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
