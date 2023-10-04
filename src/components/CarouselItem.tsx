import { ProductData } from "./ProductContainer";
type Props = {
  item: ProductData;
  currentFirst: number;
};
export const CarouselItem = ({ item, currentFirst }: Props) => {
  return (
    <li
      role="listitem"
      className="carousel-item text-primary"
      style={{
        transform: `translate(-${currentFirst * 100}%)`,
        transition: `transform 0.5s ease`,
      }}
    >
      <div className="flex-col tap-area">
        <a
          aria-labelledby={`card-heading-${item.modelName}`}
          className="mb-16 stack-4"
          data-tap-area-target
          href={`learn/${item.id}`}
        >
          <p className="text-secondary micro font-medium uppercase">
            {item.bodyType}
          </p>
          <h3 className="body-16" id={`card-heading-${item.modelName}`}>
            <span className="font-medium text-primary">{item.modelName}</span>{" "}
            <span className="text-secondary">{item.modelType}</span>
          </h3>
          <img alt={item.alt} src={item.imageUrl} />
        </a>
        <div className="flex flex-wrap gap-x-24 justify-center">
          <a className="button-text text-accent-blue" href={`learn/${item.id}`}>
            Learn
          </a>
          <a className="button-text text-accent-blue" href={`shop/${item.id}`}>
            Shop
          </a>
        </div>
      </div>
    </li>
  );
};
