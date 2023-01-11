migrate((db) => {
  const collection = new Collection({
    "id": "c2d9uldr53bircs",
    "created": "2023-01-10 12:30:20.822Z",
    "updated": "2023-01-10 12:30:20.822Z",
    "name": "keys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pqxm3wpx",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c2d9uldr53bircs");

  return dao.deleteCollection(collection);
})
