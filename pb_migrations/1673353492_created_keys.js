migrate((db) => {
  const collection = new Collection({
    "id": "0juqx1kcny2b4gk",
    "created": "2023-01-10 12:24:52.687Z",
    "updated": "2023-01-10 12:24:52.687Z",
    "name": "keys",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k3tipmsk",
        "name": "api_key",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("0juqx1kcny2b4gk");

  return dao.deleteCollection(collection);
})
