import React from "react";
import { products } from "../../data/products";
import Button from "../ui/Button";

type Category =
  | "all"
  | "chocolate-dipped"
  | "classics"
  | "season-specials"
  | "build-your-box";

const categoryLabels: Record<Category, string> = {
  all: "All",
  "chocolate-dipped": "Chocolate-Dipped",
  classics: "Classics",
  "season-specials": "Season Specials",
  "build-your-box": "Build-Your-Box",
};

const categories: Category[] = [
  "chocolate-dipped",
  "classics",
  "season-specials",
  "build-your-box",
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section bg-primary-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary-900 mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-2">
            From dipped delights to nostalgic classics, explore our rotating
            selection of sweet treats.
          </p>
        </div>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );
          if (categoryProducts.length === 0) return null;
          return (
            <div key={category} className="mb-24">
              <h3 className="text-2xl font-serif text-primary-800 my-8 underline">
                {categoryLabels[category]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 p-6 flex flex-col h-full"
                  >
                    <h4 className="font-serif text-xl text-primary-800">
                      {product.name}
                    </h4>

                    {product.description && (
                      <p className="text-gray-600 text-sm mb-3">
                        {product.description}
                      </p>
                    )}

                    {product.priceNote && (
                      <p className="text-xs text-gray-500 italic mb-4">
                        {product.priceNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
