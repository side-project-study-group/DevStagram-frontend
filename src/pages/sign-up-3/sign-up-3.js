import React, { useState } from 'react';
import SignUp3Temp from './sign-up-3-template';
import {useLocation} from 'react-router-dom';
import useTag from '../../hooks/useTag'

function SignUp3() {
  const location = useLocation();
  const [value, setValue] = useState({
    ...location.state,
    intro: '',
  })
  const [text, tags, handleTagChange, handleTagClick] = useTag();
  
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    return
  }

  return <SignUp3Temp value={value} text={text} tags={tags}
        handleChange={handleChange} handleTagChange={handleTagChange} handleSubmit={handleSubmit} handleTagClick={handleTagClick} />;
}

export default SignUp3;
