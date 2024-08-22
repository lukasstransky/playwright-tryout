import { test as base } from '@playwright/experimental-ct-react';
import { Locator } from '@playwright/test';

interface BaseTestTryoutOption {
  author: string;
}

export type TryoutFixture = {
  iframe: Locator;
};

export const componentTest = base.extend<BaseTestTryoutOption & TryoutFixture>({
  author: undefined,
  iframe: () => {
    console.info('test');
  },
});
