# digicaching
A virtual geocaching app that lets users collect, combine, and cache digital items to complete collections.

## API
_All API requests require JWT Authentication_

_Legend: (optional param); ?queryparam=; [paramSyntax];_

`/api/users/(id)`
Retrieves data for one or all users:
```
{ 
  id: [UUID],
  email: [user email],
  name: [user name],
  image_url: [link to image],

}
```

`/api/items/(id)`
Retrieves data for one or all items.

`/api/collections/(id)`
Retrieves data for one or all collections.

`/api/caches/(id)?location=[North,South,West,East]`
Retrieves data for one or all caches. Providing _location_ query param and series of bounding box coordinates retrieves all caches inside that region. If id is included, distance to that specific cache is included.
```
{
  id: [UUID],
  item_id: [Integer (ID of Item)],
  createdon: [timestamp],
  openedon: [timestamp or null],
  longitude: [float],
  latitude: [float],
  _if ID included:_
  distance: [float (meter distance)]
}
```

