# digicaching
A virtual geocaching app that lets users collect, combine, and cache digital items to complete collections.

## API
_All API requests require JWT Authentication_

_Legend: (optional param); ?queryparam=;_

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

`/api/caches/(id)?loc=userLongitude,userLatitude&bounds=West,East,North,South`
Retrieves data for one or all caches. Requires _loc_ query param for current user location to calculate distance. Providing _bounds_ query param and series of bounding box coordinates retrieves all caches inside that region. Cache id query is prioritized over bounding box query.
```
{
  id: [UUID],
  item_name: [string],
  item_description: [string],
  item_image_url: [string]
  createdon: [timestamp],
  openedon: [timestamp or null],
  longitude: [float],
  latitude: [float],
  distance: [float (meter distance)]
}
```

