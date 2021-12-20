
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

$("#container").css( {
    "width": "40%",
    "height": "60rem",
    "margin-left": "30%",
    "margin-top": "2rem",
    "border": "1px solid black",
    "border-radius": "80px"
})

$("button").css( {
    "font-size": "2rem",
    "margin-left": "30%",
    "margin-top": "2rem"
})

let index = 0;
Display();

$("#precedent").click(function () {
    index--;
    Display();
})
$("#next").click(function () {
    index++;
    Display();
})

function Display() {
    if (document.getElementById("toggle") === null) {
        document.getElementById("nom").innerHTML = arrObj[index].person + " (" + arrObj[index].age + ")";
        $("img").attr("src", arrObj[index].avatar);
    }
    else {
        let list = document.getElementById("list");

        for (let x = 0; x < arrObj.length; x++) {
            let image = document.createElement("img");
            list.append(image);
            $($("img").get(x)).attr("src", arrObj[x].avatar);
            document.getElementById("nom").innerHTML += arrObj[x].person + " (" + arrObj[x].age + ")";
        }
    }
}
