function initialize() {
    const game_container = document.querySelector(".game_container");

    const dragon_quest_8 = {game_img: "assets/dragon_quest_8.jpg", game_name: "Dragon Quest 8", game_link:"https://www.youtube.com/watch?v=AmIR60Jws88"};

    const rogue_galaxy = {game_img: "assets/rogue_galaxy.jpg", game_name: "Rogue Galaxy", game_link:"https://www.youtube.com/watch?v=QvRwID8DmHg"};

    const radiata_stories = {game_img: "assets/radiata_stories.jpg", game_name: "Radiata Stories", game_link:"https://www.youtube.com/watch?v=pWwzum7H4Jg"};

    const final_fantasy_12 = {game_img: "assets/final_fantasy_XII.jpg", game_name: "Final Fantay XII", game_link:"https://www.youtube.com/watch?v=2IYu8ca8lus"};

    const dragon_quest_11 = {game_img: "assets/dragon_quest_11.jpg", game_name: "Dragon Quest 11", game_link:"https://www.youtube.com/watch?v=bg0oBJ9cXYM"};

    const skyrim = {game_img: "assets/skyrim.jpg", game_name: "Skyrim", game_link:"https://www.youtube.com/watch?v=JSRtYpNRoN0"};

    const the_witcher_3 = {game_img: "assets/the_witcher_3.jpg", game_name: "The Witcher 3", game_link:"https://www.youtube.com/watch?v=53MyR_Z3i1w"};

    const gothic_3 = {game_img: "assets/gothic_3.jpg", game_name: "Gothic 3", game_link:"https://www.youtube.com/watch?v=33MtGmlKkkQ"};

    const oblivion = {game_img: "assets/oblivion.jpg", game_name: "Oblivion", game_link:"https://www.youtube.com/watch?v=qJnnPh44Rlo"};

    const fable = {game_img: "assets/fable.jpg", game_name: "Fable", game_link:"https://www.youtube.com/watch?v=Awaa0OhDNj4"};

    const dragon_age_origins = {game_img: "assets/dragon_age_origins.jpg", game_name: "Dragon Age Origins", game_link:"https://www.youtube.com/watch?v=mRcrlgN7Dk4"};

    const dragon_quest_5 = {game_img: "assets/dragon_quest_5.jpeg", game_name: "Dragon Quest 5", game_link:"https://www.youtube.com/watch?v=7RhPZk5ORQc"};

    let games = [dragon_quest_8, rogue_galaxy, radiata_stories, final_fantasy_12, dragon_quest_11, skyrim, the_witcher_3, gothic_3, oblivion, fable, dragon_age_origins, dragon_quest_5];

    games.forEach((i => {
        game_container.innerHTML += `
        <li class="game">
            <a href="${i.game_link}"  class="game_link" target="_blank">
            <img src="${i.game_img}" alt="imagem do jogo ${i.game_name}" class="game_img">
        <h3 class="game_title">${i.game_name}</h3>
        </a>
    `;
}));
}

initialize();


