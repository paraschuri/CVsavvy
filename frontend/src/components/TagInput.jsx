    import React, { useState } from "react";

    const TagInput = ({tags,setTags}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            addTag();
        }
    };

    const addTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const removeAll = () => {
        setTags([])
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");
        const pastedTags = pastedText.split(/\s+/);
        const newTags = pastedTags.filter(tag => tag.trim() !== '');
        setTags(prevTags => [...prevTags, ...newTags]);
    };
    

    return (
        <div className=" rounded-xl w-full mt-4">
        <label class="block text-base text-white">Skills</label>
        <div className="flex flex-wrap mb-2 gap-2 text-black font-medium">
            {tags.map((tag, index) => (
            <div
                key={index}
                className="flex items-center bgGradient rounded-xl px-2 py-1"
            >
                <span>{tag}</span>
                <button
                type="button"
                className="ml-2 text-black "
                onClick={() => removeTag(index)}
                >
                &times;
                </button>
            </div>
            ))}
            {tags.length>0 && <div
                className="flex items-center bg-red-500 text-white rounded-xl px-2 py-1"
            >
                <span>Remove ALL</span>
                <button
                className="ml-2 text-black "
                onClick={removeAll}
                >
                &times;
                </button>
            </div>
            }
        </div>
        <input
            type="text"
            placeholder="Type or paste and press Space/Enter to add tags"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onPaste={handlePaste}
            className="block w-full px-5 py-2.5 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg"
        />
        </div>
    );
    };

    export default TagInput;
