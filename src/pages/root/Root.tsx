import { ItemsList } from '@/containers/itemsList/ItemsList';

export const Root = () => {
  return (
    <main>
      <div>
        <h1>Gilded Rose</h1>
      </div>
      <section>
        <ItemsList />
      </section>
    </main>
  );
};
