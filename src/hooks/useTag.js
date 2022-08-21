import {useState} from 'react';

function useTag(){
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);

    const handleChange = (e) => {
        const reg = /\r\n|\n|\r|\s|\t/gm
        setText(e.target.value)
        if(e.target.value.match(reg)){
            const space = e.target.value.replace(reg, '')
            if(space !== '') {
                setTags([
                    ...tags,
                    e.target.value.replace(reg, '')
                ])
            }
            setText('')
        }
    }

    const handleClick = (e) => {
        const name = e.target.getAttribute('name')
        setTags(tags.filter(item => item !== name));
    }
    
    return [text, tags, handleChange, handleClick];
};

export default useTag;