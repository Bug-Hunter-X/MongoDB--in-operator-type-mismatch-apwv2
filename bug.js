```javascript
//Incorrect usage of $in operator
db.collection.find({ field: { $in: [1, 2, '3'] } });
```