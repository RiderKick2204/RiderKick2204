import React, { useRef } from 'react';

const SearchInput = () => {
    const searchInputRef = useRef(null);

    // Hàm để focus vào ô input khi rê chuột
    const handleMouseEnter = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
            searchInputRef.current.setSelectionRange(
                searchInputRef.current.value.length,
                searchInputRef.current.value.length
            );
        }
    };

    console.log("useRef rendered");

    return (
        <div>
            <h1>Tìm kiếm</h1>
            <h2> useRef </h2>
            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                ref={searchInputRef}
                onMouseEnter={handleMouseEnter}
            />
        </div>
    );
};

export default SearchInput;
