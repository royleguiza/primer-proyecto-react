import type { ReactNode } from "react";

type ProductCardContainerProps = {
    title: string;
    children: ReactNode;
}

function ProductCardContainer (props: ProductCardContainerProps) {
    const {title, children} = props;
    return (
        <section className="m-4 px-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold m-4 text-left" >{title}</h2>
            <div className="flex flex-row overflow-x-auto gap-4">
                {children}
            </div>
        </section>
    )
}

export default ProductCardContainer;