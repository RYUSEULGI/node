import React from 'react';
import { keywordState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';

const SearchForm = () => {
    const [input, setInput] = useRecoilState(keywordState);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button>검색</button>
            </form>
        </>
    );
};

export default SearchForm;
