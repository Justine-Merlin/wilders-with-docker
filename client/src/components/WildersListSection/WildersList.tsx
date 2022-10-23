import { useEffect } from 'react';
import { IWilder } from '../../interfaces/interfaces';
import WilderCard from './WilderCard';
import { useQuery } from "@apollo/client";
import { WILDERS_QUERY } from '../../graphql/querries';

const WildersList = () => {

  const { data, loading, refetch } = useQuery(WILDERS_QUERY);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <div className='wilders-list-section size-restrictions'>
      {data.getWilders?.wilders.map((wilder: IWilder) => (
        <WilderCard wilder={wilder} key={wilder.id} />
      ))
      }
    </div>
  )
}

export default WildersList