// import { useRouter } from "next/router";
// import dbConnect from "@/db/connect";
// import Item from "@/db/models/Item";

// const PAGE_SIZE = 2;
// const pricesArray = [
//   {
//     name: "free",
//     value: "0",
//   },
//   {
//     name: "1-10€",
//     value: "1-10",
//   },
//   {
//     name: "10-20€",
//     value: "10-20",
//   },
//   {
//     name: "20-50€",
//     value: "20-50",
//   },
//   {
//     name: "50-99€",
//     value: "50-99",
//   },
// ];

// const categoryArray = [
//   "tops",
//   "bottom",
//   "onsies",
//   "dresses",
//   "jackets",
//   "coats",
//   "accessories",
// ];

// const difficultyArray = [
//   "beginner",
//   "easy",
//   "intermediate",
//   "medium",
//   "expert",
// ];

// export default function NewSearch(props) {
//   const router = useRouter();
//   const {
//     query = "all",
//     category = "all",
//     difficulty = "all",
//     sort = "featured",
//     price = "all",
//     page = 1,
//   } = router.query;

//   const { items, countItems, categories, difficulties } = props;

//   const filterSearch = ({
//     category,
//     difficulty,
//     sort,
//     min,
//     max,
//     searchQuery,
//     price,
//   }) => {
//     const { query } = router;
//     if (searchQuery) query.searchQuery = searchQuery;
//     if (sort) query.sort = sort;
//     if (category) query.category = category;
//     if (difficulty) query.difficulty = difficulty;
//     if (price) query.price = price;
//     if (min) query.min ? query.min : query.min === 0 ? 0 : min;
//     if (max) query.max ? query.max : query.max === 0 ? 0 : max;

//     router.push({
//       pathname: router.pathname,
//       query: query,
//     });
//   };

//   const categoryHandler = (e) => {
//     filterSearch({ category: e.target.value });
//   };

//   const difficultyHandler = (e) => {
//     filterSearch({ difficulty: e.target.value });
//   };

//   const priceHandler = (e) => {
//     filterSearch({ price: e.target.value });
//   };

//   const sortHandler = (e) => {
//     filterSearch({ sort: e.target.value });
//   };

//   return (
//     <>
//       <div>
//         <div></div>
//         <h2>categories</h2>
//         <select
//           className="w-full"
//           value={categories}
//           onChange={categoryHandler}
//         >
//           <option value="all">all</option>
//           {categoryArray &&
//             categoryArray.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//         </select>
//         <h2>difficulty level</h2>
//         <select
//           className="w-full"
//           value="difficulty"
//           onChange={difficultyHandler}
//         >
//           <option value="all">all</option>
//           {difficultyArray &&
//             difficultyArray.map((difficulty) => (
//               <option key={difficulty} value={difficulty}>
//                 {difficulty}
//               </option>
//             ))}
//         </select>
//         <h2>Prices</h2>
//         <select className="w-full" value="price" onChange={categoryHandler}>
//           <option value="all">all</option>
//           {pricesArray &&
//             pricesArray.map((price) => (
//               <option key={price.value} value={price.value}>
//                 {price.name}
//               </option>
//             ))}
//         </select>
//       </div>
//       <div></div>
//       <div></div>
//       <div>
//         {/* {items.length === 0 ? "No" : countItems} Results */}
//         {query !== "all" && query !== "" && ":" + query}
//         {category !== "all" && ":" + category}
//         {difficulty !== "all" && ":" + difficulty}
//         {price !== "all" && ": Price" + price}
//         &nbsp;
//         {(query !== "all" && query !== "") ||
//         category !== "all" ||
//         difficulty !== "all" ||
//         price !== "all" ? (
//           <button onClick={() => router.push("/home")}>search</button>
//         ) : null}
//       </div>
//       Sort by{""}
//       <select value={sort} onChange={sortHandler}>
//         <option value="lowest">Low to High</option>
//         <option value="highest">High To Low</option>
//         <option value="newest">Newly added</option>
//       </select>
//       <div>
//         {/* {items.map((item) => (
//           <div key={item._id}>
//             <div>{item.title}</div>
//           </div>
//         ))}
//         ; */}
//       </div>
//     </>
//   );
// }

// export async function getServerSideProps({ query }) {
//   const category = query.category || "";
//   const difficulty = query.difficulty || "";
//   const price = query.price || "";
//   const sort = query.sort || "";

//   const queryFilter =
//     searchQuery && searchQuery !== "all"
//       ? {
//           name: {
//             $regrex: searchQuery,
//             $options: "i",
//           },
//         }
//       : {};
//   const categoryFilter = category && category !== "all" ? { category } : {};
//   const difficultyFilter =
//     difficulty && difficulty !== "all" ? { category } : {};
//   const priceFilter =
//     price && price !== "all"
//       ? {
//           price: {
//             $gte: Number(price.split("-")[0]),
//             $lte: Number(price.split("-")[1]),
//           },
//         }
//       : {};

//   const sorting =
//     sort === "lowest"
//       ? { price: -1 }
//       : sort === "highest"
//       ? { price: -1 }
//       : sort === "newest"
//       ? { createdAt: -1 }
//       : { _id: -1 };

//   await dbConnect();
//   const categories = await Item.find().distinct("category");
//   const difficulties = await Item.find().distinct("difficulty");
//   const ItemDocs = await Item.find({
//     ...queryFilter,
//     categoryFilter,
//     priceFilter,
//     difficultyFilter,
//   }).sort(sorting);

//   await db.disconnect();
//   const itemData = ItemDocs.map(db.convertDocToObj);

//   return {
//     props: {
//       //   items,
//       countItems,
//       categories,
//       difficulties,
//     },
//   };
// }
