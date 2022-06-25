function Card({ category }) {
  const { name, imgUrl } = category;

  return (
    <div className="card-category relative">
      <img
        className="image-responsive"
        src={require("../../assets/images/" + imgUrl).default}
        alt={name}
      />
      <span className="absolute badge-center-top">
        <h3 className="h3 color-white">{name.toUpperCase()}</h3>
      </span>
    </div>
  );
}

export { Card };
