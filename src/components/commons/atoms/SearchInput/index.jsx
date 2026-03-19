const SearchInput = ({ onChange, value, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "enter") {
      onSearch(value);
    }
  };

  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 rounded-full bg-(--bg-primary-cray)">
      <input
        className="ml-4 bg-transparent text-black placeholder:text-grey focus:outline-none"
        type="text"
        placeholder="Searching..."
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100"
        onClick={() => {
          onSearch(value)
        }}>  
          <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default SearchInput;