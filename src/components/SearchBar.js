import "./MessagesList"
export default function SearchBar() {
    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search.."/>
            <button>Search</button>
            <button>Filter</button>
        </div>
    )
}