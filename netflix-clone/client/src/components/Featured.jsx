import "./styles/Featured.css";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="">
            <option value="">Genero</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="info">
        <img
          width="100%"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9ec4b4e-d85f-4773-adac-ecd9fc1a528e/dfnkpmk-9c8c5252-9ead-4de9-9e22-afbcb6369843.png/v1/fit/w_828,h_186/the_witcher_logo_by_mygiahuy11_dfnkpmk-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg4IiwicGF0aCI6IlwvZlwvZjllYzRiNGUtZDg1Zi00NzczLWFkYWMtZWNkOWZjMWE1MjhlXC9kZm5rcG1rLTljOGM1MjUyLTllYWQtNGRlOS05ZTIyLWFmYmNiNjM2OTg0My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KReMCG78_V1ciK9Dgf5EA1sEENskSjIRQeYmPFz8Hl4"
          alt=""
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          architecto ad aspernatur repudiandae quae laboriosam temporibus,
          necessitatibus voluptates, ipsam earum
        </span>
        <div className="buttons">
          <button className="btn-play">
            <i className="ri-play-fill"></i> Reproducir
          </button>
          <button className="btn-info">
            <i className="ri-information-line"></i> Más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
