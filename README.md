# Exercise

Exercise learning the foundations of Angular 2. This tutorial is based on Angular 2 alpha27 and the [angular2-seed](https://github.com/mgechev/angular2-seed). In order to try it just clone the repo and follow the steps.

If you get stuck on any of the steps you can use the following branches, which contain the final solution for given chapter:
- [`step1`](https://github.com/mgechev/angular2-github-app-bootstrap/tree/step1)
- [`step2`](https://github.com/mgechev/angular2-github-app-bootstrap/tree/step2)
- [`step3`](https://github.com/mgechev/angular2-github-app-bootstrap/tree/step3)

## Step 1

- Inside `init.ts` import the module `app`, which is located in the same directory. You can point it using its relative location.
- Name the `app/app.ts` component `app`, using the selector property of the [component annotation](https://angular.io/docs/js/latest/api/annotations/ComponentAnnotation-class.html).
- Inside the `View` annotation add property `templateUrl`, which should point to the `app` component's template.
- Inside the `App` component's template add the following markup:

```html
<h1>Hello Angular2!</h1>
```

Congratulations! Now you already have a working Angular 2 application! You can test it by using the terminal. Go to the `angular2-github-app-bootstrap` directory and type `gulp serve.dev` inside your terminal window.

The result should be as follows:

![Step 1](/assets/step1.png)

## Step 2

- Inside `app/app.ts` import the `home` component and add it as dependency of the `App` component.
  - The home component is located inside the directory `components/home`. You can use its relative path.
  - All views accept directives as dependencies. You can define that the `App` component requires `Home` as dependency by adding the `directive` property of the object passed to the component annotation. The directive property accepts an array of directives as value.
- Inside `home.ts` import the following annotations and directives from the module `angular2/angular2`: `Component`, `View`, `NgFor`, `NgIf`.
- Add `NgFor` and `NgIf` as dependencies of the `Home` component, the same way you added `Home` as dependency for the `App` component.
- Add `templateUrl` property for the `Home` component, which points to the appropriate location.
- Add property called `selector` with value `home` to the object passed to the component annotation of the `Home` component.
- Inside `app/app.html` add the `Home` component using `home` element (remove the `Hello Angular2!` heading).
- Define a property called `users` of the `Home` class, it should be of type `string[]` and inside the constructor of `Home` it should be initialized with an empty array.
- Open the template associated with the `Home` component and make the following changes:
  - Add property called `#currentuser` to the input with id `user-input`. This way you'll be able to reference the input using `currentuser`.
  - Add a click handler to the button next to the input. The click event should call the method `addUser` with the `currentuser` text input
  - Add `*ng-for` directive to the first `tr` element inside the body of the table under the `All Users` legend. It should loop over all `users` and display their name inside the link in the first cell (note: you can use the interpolate directive `{{ }}`).
  - To the link inside the first cell add a click handler. Once a click event occurs the `selectUser` method should be invoked with the `currentuser` as argument.
  - To the button inside the second cell add a click handler, once a click event occurs invoke the `removeUser` method with the current user as argument.
- Now open the `Home` component and implement the methods `addUser`, `removeUser` as follows:
  - `addUser(user)` should add the new user to the list of users (i.e. `users` array). Optionally you can restrict the `addUser` operation to only not existing users. Do not forget to reset the value of the `currentuser` input once you add it to the list of users.
  - `removeUser(user)` should remove the given user from the `users` array.

Awesome! The second step is completed! If you haven't stopped `gulp serve.dev` just save the files you changed and refresh `http://localhost:5555` in order to see the functionality you just implemented!

![Step 2](/assets/step2.png)

## Step 3

Did you notice that when you click on any of the users in the list on the right-hand side of the screen an error occurred? Now we're going to fix this!

- Inside `home.ts` import the `UserDetails` component, which is located inside `../../components/user-details/UserDetails` and add it as dependency of the `Home` component.
- Define a method called `selectUser(user:string)`, which implements the following logic:
  - Sets the `selectedUser` to `null`.
  - Sets the `loading` status to true.
  - Invokes the `getUser` method with the current `user` passed as argument. `getUser` will return a promise, add resolve handler for the promise. The handler should accept a single argument - the user, which we got from the GitHub's API. Inside the callback set the value of the `selectedUser` and change the `loading` status to `false`.
- Inside the template of the `Home` component uncomment the lines in the bottom and add `*ng-if` directive to the `.spinner` element with value `loading` (i.e. the element should be visible when the `loading` status is `true`).
- In to the `user-details` component add two attributes:
  - `[user]` attribute, which should point to the current `selectedUser`
  - `*ng-if` attribute (directive), which should has as value the following boolean expression: `selectedUser !== null`.
- Open `UserDetails.ts` and add the property `properties` to the object passed to the `Component` annotation's call. It should be an array with a single value `'user'`. This way we state that we want to be able to pass properties to our `UserDetails` component using the `[user]` attribute.
- Now open `user-details.html` and make the following additions:
  - Add property called `[src]` to the `img` element. It should point to the `user.avatar_url`.
  - To each second cell (i.e. the cells next to the labels "Username", "Followers", "Following", etc.) add the following attributes using the interpolation directive:
    - `{{user.login}}`
    - `{{user.followers}}`
    - `{{user.following}}`
    - `{{user.public_repos}}`
- As last step, in order to provide slightly better user experience, inside the `removeUser` method in the `Home` component set the value of the `selectedUser` to `null` if it is equal to the user we want to remove.

Thats it. You're done with this exercise! You can try it the same way you tried "Step 2"! Congratulations! Here is what you should see as final result:

![Step 3](/assets/step3.png)

# Contributions

This is the first iteration of the readme so there might be some typos, mistakes or tasks, which are not quite clear or too verbose. If you think you can improve the quality of the document just fork the repo and initiate a pull request, it will be greatly appreciated!

# License

MIT
