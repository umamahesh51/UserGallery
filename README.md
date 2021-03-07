#User-Blog-Gallery
It is a basic react application where we have a gallery of Users.
The UserCard component has image and first, last name and email of user.
User Gallery will fetch info from <a href = "https://reqres.in/api/users?page=1">Rest API</a>
And for each object in the response it will create a new UserCard Component and add it to the UserGallery.

It has a button to Load more users. When clicked on it, it will fetch the user details from <a href = "https://reqres.in/api/users?page=2">Rest API</a>

