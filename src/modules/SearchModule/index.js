import React, { useState, Suspense } from 'react';
import SearchField from './SearchField';
import SearchResults from './SearchResults';
import { LoadingUI } from '../../components';

export default function SearchModule() {
  const [keyword, setKeyword] = useState();

  return (
    <section>
      <SearchField onSearch={setKeyword} />
      <Suspense fallback={<LoadingUI />}>
        {/* NOTE: Because GraphQL will automatically fetch a query on comonent 
            mount, only render the SearchResults component when a `keyword`
            is present in state. Alternatively, it may also be possilbe to
            manually fire a query using asynchronous effect hooks and the 
            ApolloConsumer.
            See reference: https://www.apollographql.com/docs/react/essentials/queries/#manually-firing-a-query */}
        {keyword && <SearchResults query={keyword} />}
      </Suspense>
    </section>
  );
}
