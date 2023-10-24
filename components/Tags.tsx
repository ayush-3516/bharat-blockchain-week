import React from 'react'; 

interface TagsProps {
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string | null) => void; // Modify the type of onTagClick
  className: string;
}

const Tags: React.FC<TagsProps> = ({ tags, selectedTag, onTagClick, className }) => {
  return (
    <div className={`flex tags space-x-2 mt-4 mx-5 ${className}`}>  
      <button
        className={`px-4 py-2 capitalize w-[80px] rounded-lg ${selectedTag === null ? 'bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white' : 'bg-[#141414] text-[#f1f1f1]'
          }`}
        onClick={() => onTagClick(null)} // Pass null when "All" is clicked
      >
        All
      </button>
      {tags.map((tag, index) => (
        <button
          key={index}
          className={`px-4 py-2 capitalize rounded-lg ${selectedTag === tag ? ' bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white' : ' bg-[#141414] text-[#f1f1f1]'
            }` }
          onClick={() => onTagClick(tag)} // Pass the tag when a tag button is clicked
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
