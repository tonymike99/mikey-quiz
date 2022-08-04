type Category = {
  name: string;
  imgUrl: String;
};

function Card({ category }: { category: Category }): JSX.Element {
  const { name, imgUrl } = category;

  return (
    <div className="card-category relative">
      <img
        className="image-responsive"
        src={require("../../assets/images/" + imgUrl).default}
        alt={name}
      />
      <span className="absolute badge-inside-center-top">
        <h3 className="h3 color-white">{name.toUpperCase()}</h3>
      </span>
    </div>
  );
}

export { Card };
