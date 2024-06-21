import React, { useState } from 'react';
import './SearchBox.css'

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBox;