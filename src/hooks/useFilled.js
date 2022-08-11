import {useState} from 'react';

function useFilled(isFilledInit){
    const [isFilled, setIsFilled] = useState(isFilledInit);

    const onClick = (e) => {
        if(isFilled) {
            setIsFilled(false);
        }else{
            setIsFilled(true);
        }
    }
    
    return [isFilled, onClick];
};

export default useFilled;