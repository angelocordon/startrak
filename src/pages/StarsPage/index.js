import React, { Suspense } from 'react';
import UserReposModule from './UserReposModule';
import { Headline, LoadingUI } from '../../components';

export default function StarsPage() {
  return (
    <main>
      <Headline small>Your Starred Repositories</Headline>
      <Suspense fallback={<LoadingUI />}>
        <UserReposModule />
      </Suspense>
    </main>
  );
}
