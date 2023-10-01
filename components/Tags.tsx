import React from 'react';

interface TagsProps {
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string | null) => void; // Modify the type of onTagClick
}

const Tags: React.FC<TagsProps> = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className="flex tags space-x-2 mt-4 mx-5">
      <button
        className={`px-3 py-1 rounded-lg ${selectedTag === null ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white' : 'bg-gradient-to-br from-yellow-50 to-purple-200 text-gray-700'
          }`}
        onClick={() => onTagClick(null)} // Pass null when "All" is clicked
      >
        All
      </button>
      {tags.map((tag, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-lg ${selectedTag === tag ? ' bg-gradient-to-br from-purple-400 to-purple-600 text-white' : ' bg-gradient-to-br from-yellow-50 to-purple-200 text-gray-700'
            }`}
          onClick={() => onTagClick(tag)} // Pass the tag when a tag button is clicked
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
