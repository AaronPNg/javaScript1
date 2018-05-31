function Picture(name, location) {
    this.name = name;
    this.location = location;
}
var album = [];
var names = ["1a","2b","3c","4d","5e"];
var locations = ["there","here","over there","over here","no where"];
for(var i=0; i<=4; i++) {
  album.push(new Picture(names[i], locations[i]));
}
print(album[0].name, album[0].location);
print(album[1].name, album[1].location);
print(album[2].name, album[2].location);
print(album[3].name, album[3].location);
print(album[4].name, album[4].location);