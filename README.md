Sample Angular 2 application, which communicates with GitHub's API.

TODO:

## Part 1

- Inside `init.ts` import the module `app`, which is located in the same directory. You can point it using its relative location.
- Name the `app/app.ts` component, using the selector property of the [component annotation](https://angular.io/docs/js/latest/api/annotations/ComponentAnnotation-class.html) `app`.
- Inside the `View` annotation add property `templateUrl`, which should points to the app component's template.
- Inside the app component's template add the following markup:

```html
<h1>Hello Angular2!</h1>
```

Congratulations! Now you already have a working Angular 2 application! You can test it by using the terminal. Go to the `angular2-github-app-bootstrap` directory and type `gulp serve.dev` inside your terminal window.

The result should be as follows:

![]()

## Part 2

- Inside `app/app.ts` import the `home` component and add it as dependency of the `App` component.
  - The home component is located inside the directory `components/home`. You can use its relative path.
  - All views accept directives as dependencies. You can state that the `App` component requires `Home` as dependency by adding the `directive` property of the component annotation. The directive property accepts an array of directives as value.
- Inside `app/app.html` add the `home` component using an element selector with element name `home`.
- Inside `home.ts` import the following annotations and directives from the module `angular2/angular2`: `Component`, `View`, `NgFor`, `NgIf`.
- Add `NgFor` and `NgIf` as dependencies of the `Home` component, the same way you added `Home` as dependency for the `App` component.
- Add `templateUrl` property for the `Home` component, which points to the appropriate location.
- Add selector property for the `Home` component with value `home`.
- Define a property called `users` of the `Home` class, it should be of type `string[]` and inside the constructor of `Home` it should be initialized with an empty array.
- Open the template associated to the `Home` component and do the following changes:
  - Add property called `#currentuser` to the input with id `user-input`. This way you'll be able to reference it using `currentuser`.
  - Add a click handler to the button next to the input. The click event should call the method `addUser` with the value of the `currentuser` text input
  - Add `*ng-for` directive to the first `tr` element inside the body of the table under the `All Users` legend. It should loop over all `users` and display their name inside the link in the first cell (note: you can use the interpolate directive `{{ }}`).
  - To the link inside the first cell add a click handler. Once a click event occurs the `selectUser` method should be invoked with the current user as argument.
  - To the button inside the second cell add a click handler, once a click event occurs invoke the `removeUser` method with the current user as argument.
- Now open the `Home` component and implement the methods `addUser`, `removeUser` as follows:
  - `addUser(user)` should add the new user to the list of users (i.e. `users` array). Optionally you can restrict the `addUser` operation to only not existing users.
  - `removeUser(user)` should remove the given user from the `users` array.

