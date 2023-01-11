migrate((db) => {
  const collection = new Collection({
    "id": "v4nvfl4i48ur2q2",
    "created": "2023-01-10 12:27:13.066Z",
    "updated": "2023-01-10 12:27:13.066Z",
    "name": "users",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v4nvfl4i48ur2q2");

  return dao.deleteCollection(collection);
})
