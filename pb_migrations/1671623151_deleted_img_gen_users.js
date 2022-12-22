migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x8pxqv6bd6qo9oo");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "x8pxqv6bd6qo9oo",
    "created": "2022-12-21 11:44:47.845Z",
    "updated": "2022-12-21 11:44:47.845Z",
    "name": "img_gen_users",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
