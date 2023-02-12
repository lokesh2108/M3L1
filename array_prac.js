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