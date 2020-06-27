#### TypeDI

- you can call `Container.get(SomeClass)` from anywhere in your application and you'll always have the same instance of SomeClass, which you add to `Container` by using `@Service`

- [using factory class to create service](https://github.com/typestack/typedi#using-factory-class-to-create-service)
- By default all services are stored in the `global service container` and this global service container holds `all unique instances of each service` you have. if you want to hold unique data for each service instance, then you `Container.of()`
- `you can inject class into function as well`.

```javascript
export class PostQueryBuilder {
  build() {
    return "SUPER * QUERY";
  }
}
export const PostManager = Service(() => ({
  getId() {
    return "some post id";
  },
}));

export const PostController = Service(
  [PostManager, PostQueryBuilder],
  (manager, queryBuilder) => {
    return {
      id: manager.getId(),
      query: queryBuilder.build(),
    };
  }
);
```
