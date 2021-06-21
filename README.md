# Request with FormData

## Steps

1. `npm ci`
2. `npm run server`
3. `npm run test:e2e`

## Problem

In [before-request.ts](https://github.com/cypress-io/cypress/blob/b9ede1f7be2234bd4d4ce1191664296168fd3094/packages/driver/src/cy/net-stubbing/events/before-request.ts#L242) we serialize ArrayBuffer to `{}`.

```js
if (_.isObject(req.body)) {
  req.body = JSON.stringify(req.body);
}
```

## Fix

Fixed in commit [6cd420c12](https://github.com/cypress-io/cypress/commit/6cd420c12c2d97022187e023f6c3f4489040fbcb)
