export function refreshPage() {
    const fetchData = async () => {
      const data = await fetch(`/api/items/${id}`);
      const items = await data.json();
      setItemDetail(items);
    };
    fetchData().catch(console.error);
  }