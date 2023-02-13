// step1 
var fav_Movies = ["Vikram","Leo", "Stranger Things", "Dark", "Zodiac"]
window.console.log(fav_Movies[1]);

//step2 
var movies = new Array(5);
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
window.console.log(movies[0]);


// step3
var movies = new Array(5);
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies.splice(2,0,"Matrix");
window.console.log(movies.length);
//window.console.log(movies[2]);


// step4 
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
delete movies[0];
window.console.log(movies);

// step5
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
for(i in movies){
    window.console.log(parseInt(i)+1 + ":" + movies[i] + "<br>");
}

//step 6
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
k=1;
for( i of movies){
    window.console.log(k +":"+ i);
    k+=1;
}

// step 7
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
movies.sort()
k=1;
for( i of movies){
    window.console.log(k +":"+ i);
    k+=1;
}


// step 8
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
var leastFavMovies =[];
leastFavMovies[0]= "Vivegam";
leastFavMovies[1]= "Varisu";
leastFavMovies[2]= "Mersal";

window.console.log("Movies I like:\n\n");
for(var i in movies){
    window.console.log(parseInt(i)+1 + ":" + movies[i]+ "<br>");
}
window.console.log("\n\n\n");


window.console.log("Movies I regret watching:\n\n");
for(var i in leastFavMovies){
    window.console.log(parseInt(i)+1 + ":" + leastFavMovies[i]+ "<br>");
}

// step 9
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
var leastFavMovies =[];
leastFavMovies[0]= "Vivegam";
leastFavMovies[1]= "Varisu";
leastFavMovies[2]= "Mersal";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies);


// step 10
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
var leastFavMovies =[];
leastFavMovies[0]= "Vivegam";
leastFavMovies[1]= "Varisu";
leastFavMovies[2]= "Mersal";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(-1));


// step 11
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
var leastFavMovies =[];
leastFavMovies[0]= "Vivegam";
leastFavMovies[1]= "Varisu";
leastFavMovies[2]= "Mersal";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.shift());



// step 12
var movies = [];
movies[0]= "Vikram";
movies[1]= "Leo";
movies[2]= "Stranger Things";
movies[3]= "Dark";
movies[4]= "Zodiac";
movies[5]="RRR";
movies[6]="Pathaan";
var leastFavMovies =[];
leastFavMovies[0]= "Vivegam";
leastFavMovies[1]= "Varisu";
leastFavMovies[2]= "Mersal";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
var indexes=[]
movies.forEach((movie,index) => {
    if(leastFavMovies.includes(movie)){
        indexes.push(index);
    }
});
var likemovies =["96","Petta","KGF"]
//window.console.log(indexes);
indexes.forEach((index) => {
    movies[index] = likemovies.shift();
});

//window.console.log(movies);

// step 13
var multimovies = [["Varisu", 1], ["KGF", 2], ["Dark", 3], ["leo", 4], ["Zodiac", 5]];

var Mname = multimovies.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(Mname.map(movie => movie[0]));

// step 14

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var display = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  window.console.log("\n"); 
  employees.forEach(function(i) {
    window.console.log(i);
  });
};
display(employees);


// step 15

var values = [58, '', 'abcd', true, null, false, 0];

var filterVal = function(values){
    return values.filter(function(i) {
  return i !== false && i !== null && i !== 0  && i !== "";
});
};

window.console.log(filterVal(values));

// step 16
var Random = function(i) {
    return i[Math.floor(Math.random() * i.length)];
  };
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(Random(num));

// step 17
var LargestNumber = function(i){
    return Math.max(...i);
}

var num = [12 , -2, 201 , 35 , -10 ,6 , 71 ];
window.console.log(LargestNumber(num));
