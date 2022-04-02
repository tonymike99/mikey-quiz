function Card({ category }) {
  const { name, imgUrl } = category;

  const images = require.context("../assets/images", true);

  return (
    <div className="card relative">
      <img
        className="image-responsive card-category image-translucent"
        src={images("./" + imgUrl).default}
        alt={name}
      />
      <div className="card-header absolute badge-center position-modified">
        <h2 className="font-montserrat color-white">{name.toUpperCase()}</h2>
      </div>
    </div>
  );
}

export { Card };
