# Ionic React Redirect Bug

On a fresh visit, navigating to a link that is not in the routing stack results in the error `StackManager.tsx:21 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'classList')`. Strangely, if you navigate from one link to another after the error, then refresh, it appears that redirecting works. 

When it does work, the URL briefly shows the navigated to link briefly before redirecting first time - the rest of the time you click around you don't see the navigated to url briefly.


Steps To Reproduce
1. Spin up app
2. Click either Tab1 `Link` or the Register `IonItem` (with `routerLink` set)
3. should see error
4. Click a link again
5. still error
6. now, refresh page
7. click a link - it should work correctly 🤷‍♂️
