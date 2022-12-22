migrate((db) => {
  const collection = new Collection({
    "id": "t3573yndj3y45y6",
    "created": "2022-12-21 11:49:15.912Z",
    "updated": "2022-12-21 11:49:15.912Z",
    "name": "img_gen_users",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zejpy60t",
        "name": "field",
        "type": "text",
        "required": true,
        "unique": true,
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
  const collection = dao.findCollectionByNameOrId("t3573yndj3y45y6");

  return dao.deleteCollection(collection);
})
