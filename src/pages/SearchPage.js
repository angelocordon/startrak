import React, { useState, Suspense } from 'react';
import { SearchField, SearchResults } from '../modules/SearchModule';
import { LoadingUI } from '../components';

export default function SearchModule() {
  const [keyword, setKeyword] = useState();

  return (
    <main>
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
    </main>
  );
}
