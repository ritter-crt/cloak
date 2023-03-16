export default async function getServerSideProps() {
    await dbConnect();
  
    try {
      const items = await Item.find();
      // console.log(items);
      return {
        props: {
          items: JSON.parse(JSON.stringify(items)),
        }, // will be passed to the page component as props
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
  