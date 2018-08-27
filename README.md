# digicaching
A virtual geocaching app that lets users collect, combine, and cache digital items to complete collections.
[![Alt text](https://i.imgur.com/eHb0E07.jpg "Video Thumbnail")](https://www.youtube.com/watch?v=PlbsAkes1VU)

## API
_All API requests require JWT Authentication_

_Legend: (optional param); ?queryparam=; {required param};_

**GET**
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

**GET**
`/api/items/(id)`
Retrieves data for one or all items.

**GET**
`/api/collections/(id)`
Retrieves data for one or all collections.

**GET**
`/api/caches/(id)?loc=userLatitude,userLongitude&bounds=North,South,West,East`
Retrieves data for one or all caches. Requires _loc_ query param for current user location to calculate distance. Providing _bounds_ query param and series of bounding box coordinates retrieves all caches inside that region. Cache id query is prioritized over bounding box query.
```
RESULTS:
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

**PUT**
`/api/caches/{cacheID}/claim`
Uses user's lat/lon to test valid claim distance, and checks for user/cache pair in claims table. If valid, adds cache contents to user's inventory (selecting random item if cache is a "mystery box"), updates cache to set openedon to time of claim (and item_id if needed), and adds user_id and cache_id to claims table to prevent repeated openings.
```
BODY:
{
  latitude: *user's latitude*,
  longitude: *user's longitude*
}
```

**POST**
`/api/caches/place`
Removes item from user's inventory and creates cache containing that item at the user's location.
```
BODY:
{
  item_id: *id of item being placed*,
  latitude: *user's latitude*,
  longitude: *user's longitude*
}
```
