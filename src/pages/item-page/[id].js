import Item from '@/src/components/Item';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function PatternDetailsPage() {
  const [itemDetail, setItemDetail] = useState();
  const [, setIsButtonLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: session, status } = useSession();

  async function handleUpdateCard(id, body) {
    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  async function handleDeleteCard() {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      await response.json();
      // console.log("routerID", id);
      setTimeout(() => {
        router.push('/profile');
        setIsButtonLoading(false);
      }, 1000);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  useEffect(() => {
    if (id) {
      const fetchSpecificItem = async () => {
        const response = await fetch(`/api/items/${id}`);
        const specificItem = await response.json();
        setItemDetail(specificItem);
        // console.log(specificItem.title);
      };
      fetchSpecificItem();
    }
  }, [id]);
  if (itemDetail) {
    const { title, _id } = itemDetail;

    return (
      <>
        <title>{title}</title>
        <Item
          itemDetail={itemDetail}
          key={_id}
          onDeleteCard={handleDeleteCard}
          onUpdateCard={handleUpdateCard}
          session={session}
        />
      </>
    );
  }
}
