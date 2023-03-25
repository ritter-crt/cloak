import { useState } from "react";

const categoryArray = [
  "tops",
  "bottom",
  "onsies",
  "dresses",
  "jackets",
  "coats",
  "accessories",
];

const difficultyArray = [
  "beginner",
  "easy",
  "intermediate",
  "medium",
  "expert",
];

const pricesArray = [
  {
    name: "free",
    value: "0",
  },
  {
    name: "1-10€",
    value: "1-10",
  },
  {
    name: "10-20€",
    value: "10-20",
  },
  {
    name: "20-50€",
    value: "20-50",
  },
  {
    name: "50-99€",
    value: "50-99",
  },
];

export default function FilterItem({ items }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  //     set search query to empty string
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState(["All"]);
  //     set search parameters
  //     we only what to search countries by category, name and price

  const [searchParam] = useState(["category", "difficulty", "price"]);
  function search(items) {
    return items.filter((item) => {
      /* 
//             in here we check if our region is equal to our c state
// if it's equal to then only return the items that match
// if not return All the countries
        */
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={query}
            /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
      </div>
      <div>
        <h2>categories</h2>
        <form>
          <select
            value="category"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option value="all">all</option>
            {categoryArray &&
              categoryArray.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <h2>difficulty level</h2>
          <select className="w-full" value="difficulty">
            <option value="all">all</option>
            {difficultyArray &&
              difficultyArray.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
          </select>
          <h2>Prices</h2>
          <select className="w-full" value="price">
            <option value="all">all</option>
            {pricesArray &&
              pricesArray.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.name}
                </option>
              ))}
          </select>
        </form>
      </div>
      <div className="wrapper">
        <ul className="card-grid">
          {search(items).map((item) => (
            <>
              <div key={item._id}>{item.title}</div>
              <div key={item.category}>{item.category}</div>
              <div key={item.difficulty}>{item.difficulty}</div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

// // import { useState, useEffect } from "https://cdn.skypack.dev/react";

// // function App() {
// //     const [error, setError] = useState(null);
// //     const [isLoaded, setIsLoaded] = useState(false);
// //     const [items, setItems] = useState([]);
// //     //     set search query to empty string
// //     const [q, setQ] = useState("");
// //     //     set search parameters
// //     //     we only what to search countries by capital and name
// //     //     this list can be longer if you want
// //     //     you can search countries even by their population
// //     // just add it to this array
// //     const [searchParam] = useState(["capital", "name"]);
// //     //     add a default value to be used by our select element
// //     const [filterParam, setFilterParam] = useState(["All"]);

// //     // Note: the empty deps array [] means
// //     // this useEffect will run once
// //     // similar to componentDidMount()
// //     useEffect(() => {
// //         fetch("https://restcountries.eu/rest/v2/all")
// //             .then((res) => res.json())
// //             .then(
// //                 (result) => {
// //                     setIsLoaded(true);
// //                     setItems(result);
// //                 },

// //                 // Note: it's important to handle errors here
// //                 // instead of a catch() block so that we don't swallow
// //                 // exceptions from actual bugs in components.
// //                 (error) => {
// //                     setIsLoaded(true);
// //                     setError(error);
// //                 }
// //             );
// //     }, []);

//     /* here we create a function
// //     we filter the items
// // use array property .some() to return an item even if other requirements didn't match
//     */
//     function search(items) {
//         return items.filter((item) => {
//             /*
// //             in here we check if our region is equal to our c state
// // if it's equal to then only return the items that match
// // if not return All the countries
//             */
//             if (item.region == filterParam) {
//                 return searchParam.some((newItem) => {
//                     return (
//                         item[newItem]
//                             .toString()
//                             .toLowerCase()
//                             .indexOf(q.toLowerCase()) > -1
//                     );
//                 });
//             } else if (filterParam == "All") {
//                 return searchParam.some((newItem) => {
//                     return (
//                         item[newItem]
//                             .toString()
//                             .toLowerCase()
//                             .indexOf(q.toLowerCase()) > -1
//                     );
//                 });
//             }
//         });
//     }

//     if (error) {
//         return (
//             <p>
//                 {error.message}, if you get this error, the free API I used
//                 might have stopped working, but I created a simple example that
//                 demonstrate how this works,{" "}
//                 <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
//                     {" "}
//                     check it out{" "}
//                 </a>{" "}
//             </p>
//         );
//     } else if (!isLoaded) {
//         return <>loading...</>;
//     } else {
//         return (
//             <div className="wrapper">
//                 <div className="search-wrapper">
//                     <label htmlFor="search-form">
//                         <input
//                             type="search"
//                             name="search-form"
//                             id="search-form"
//                             className="search-input"
//                             placeholder="Search for..."
//                             value={q}
//                             /*
//                             // set the value of our useState e
//                             //  anytime the user types in the search box
//                             */
//                             onChange={(e) => setQ(e.target.value)}
//                         />
//                         <span className="sr-only">Search countries here</span>
//                     </label>

//                     <div className="select">
//                         <select
//                             /*
// //                         here we create a basic select input
// //                     we set the value to the selected value
// //                     and update the setC() state every time onChange is called
//                     */
//                             onChange={(e) => {
//                                 setFilterParam(e.target.value);
//                             }}
//                             className="custom-select"
//                             aria-label="Filter Countries By Countries"
//                         >
//                             <option value="All">Filter By Region</option>
//                             <option value="Africa">Africa</option>
//                             <option value="Americas">America</option>
//                             <option value="Asia">Asia</option>
//                             <option value="Europe">Europe</option>
//                             <option value="Oceania">Oceania</option>
//                         </select>
//                         <span className="focus"></span>
//                     </div>
//                 </div>
//                 <ul className="card-grid">
//                     {search(items).map((item) => (
//                         <li>
//                             <article className="card" key={item.id}>
//                                 <div className="card-image">
//                                     <img src={item.flag} alt={item.name} />
//                                 </div>
//                                 <div className="card-content">
//                                     <h2 className="card-name">{item.name}</h2>
//                                     <ol className="card-list">
//                                         <li>
//                                             population:{" "}
//                                             <span>{item.population}</span>
//                                         </li>
//                                         <li>
//                                             Region: <span>{item.region}</span>
//                                         </li>
//                                         <li>
//                                             Capital: <span>{item.capital}</span>
//                                         </li>
//                                     </ol>
//                                 </div>
//                             </article>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
