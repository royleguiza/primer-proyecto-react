type ProductCarcProps = {
    src: string;
    title: string;
    description: string;
    precio: number;
}

function ProductCard(props: ProductCarcProps){
    const { src, title, description, precio} = props;

    return (
        <article className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white w-64 flex flex-col mx-auto mb-6 m-2">
            <img className="w-full h-64 object-contain p-4" src={src} alt={title} />
            <div className="p-4 flex flex-col items-start">
                <h1 className="text-base font-normal text-gray-700 mb-2 line-clamp-2">{title}</h1>
                <span className="text-2xl font-semibold text-gray-900 mb-1">
                    ${precio}
                </span>
                <p className="text-sm text-gray-500 mb-1">{description}</p>
            </div>
        </article>
    );
}

export default ProductCard;