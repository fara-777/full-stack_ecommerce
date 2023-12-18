"use client";
const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        className="py-2 px-3 text-black border-none rounded-l-md outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className=" bg-gray-800 p-2 border border-transparent rounded-r-md ">
        Ara
      </button>
    </div>
  );
};

export default Search;
