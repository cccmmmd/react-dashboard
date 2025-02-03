import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 89.99,
    stock: 167,
    sales: 890,
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "Fitness",
    price: 129.99,
    stock: 95,
    sales: 780,
  },
  {
    id: 8,
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    stock: 122,
    sales: 680,
  },
  {
    id: 9,
    name: "Air Purifier",
    category: "Home",
    price: 159.99,
    stock: 45,
    sales: 420,
  },
  {
    id: 10,
    name: "Fitness Tracker",
    category: "Electronics",
    price: 69.99,
    stock: 183,
    sales: 1100,
  },
  {
    id: 11,
    name: "Desk Lamp",
    category: "Home",
    price: 34.99,
    stock: 156,
    sales: 590,
  },
  {
    id: 12,
    name: "Resistance Bands",
    category: "Fitness",
    price: 24.99,
    stock: 245,
    sales: 1300,
  },
  {
    id: 13,
    name: "Sunglasses",
    category: "Accessories",
    price: 79.99,
    stock: 92,
    sales: 460,
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter((product) =>
      product.name.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-cyan-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-cyan-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-cyan-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search name ..."
            className="bg-cyan-700 text-white placeholder-cyan-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-cyan-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-cyan-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-cyan-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-cyan-100 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-300">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default ProductsTable;
