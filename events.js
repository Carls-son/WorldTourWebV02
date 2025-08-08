let totalElims = 0;
let totalAssists = 0;
let totalDeaths = 0;
let totalRevives = 0;
let totalGames = 0;
let firstPlaceCount = 0;
let totalPoints = 0;

let pointSystem = new Map([
    ["first", 25],
    ["second", 14],
    ["third", 6],
    ["fourth", 6],
    ["fifth", 2],
    ["sixth", 2],
    ["seventh", 2],
    ["eighth", 2]
]);

let favStadium = new Map([
    ["NOZOMI/CITADEL", 0],
    ["Las Vegas Stadium", 0],
    ["Bernal", 0],
    ["Fortune Stadium", 0],
    ["Kyoto", 0],
    ["SYS$HORIZON", 0],
    ["Las Vegas", 0],
    ["Skyway Stadium", 0],
    ["Seoul", 0],
    ["Monaco", 0]
]);

let favClass = new Map([
    ["Light", 0],
    ["Medium", 0],
    ["Heavy", 0]
]);

document.getElementById("form").addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Form submitted");

    const form = e.target;
    const formData = new FormData(form);

    
    const placement = formData.get('placement');
    const elims = formData.get('elims');
    const assists = formData.get('assists');
    const deaths = formData.get('deaths');
    const revives = formData.get('revives');
    const stadium = formData.get('stadium');
    const build = formData.get('class');
    const favWeapon = formData.get('favWeapon');

    totalGames += 1;
    totalElims += parseInt(elims) || 0;
    totalAssists += parseInt(assists) || 0;
    totalDeaths += parseInt(deaths) || 0;
    totalRevives += parseInt(revives) || 0;

    if (placement === "first") {
        firstPlaceCount += 1;
    }

    totalPoints += pointSystem.get(placement) || 0;

    const stadiumPlayed = document.getElementById("stadium").value;
    favStadium.set(stadiumPlayed, (favStadium.get(stadiumPlayed) || 0) + pointSystem.get(placement) || 0);

    const chosenClass = document.getElementById("class").value;
    favClass.set(chosenClass, (favClass.get(chosenClass) || 0) + 1);

    let maxStadiumKey = null;
    let maxStadiumValue = 0;
    for (const [key, value] of favStadium.entries()) {
        if (key && value > maxStadiumValue) {
            maxStadiumValue = value;
            maxStadiumKey = key;
        }
    }

    let maxClassKey = null;
    let maxClassValue = 0;
    for (const [key, value] of favClass.entries()) {
        if (key && value > maxClassValue) {
            maxClassValue = value;
            maxClassKey = key;
        }
    }
    
    document.getElementById("elimsSum").innerHTML = `${totalElims}`;
    document.getElementById("assistsSum").innerHTML = `${totalAssists}`;
    document.getElementById("deathsSum").innerHTML = `${totalDeaths}`;
    document.getElementById("revivesSum").innerHTML = `${totalRevives}`;
    document.getElementById("kd").innerHTML = `${(totalElims / (totalDeaths || 1)).toFixed(2)}`;
    document.getElementById("kda").innerHTML = `${((totalElims + totalAssists) / (totalDeaths || 1)).toFixed(2)}`;
    document.getElementById("kpg").innerHTML = `${(totalElims / (totalGames || 1)).toFixed(2)}`;
    document.getElementById("win-rate").innerHTML = `${(firstPlaceCount / (totalGames || 1)).toFixed(2)}`;

    document.getElementById("fav-stadium").innerHTML = maxStadiumValue > 0 ? `${maxStadiumKey}` : "N/A";
    document.getElementById("fav-class").innerHTML = maxClassValue > 0 ? `${maxClassKey}` : "N/A";
    document.getElementById("points-earned").innerHTML = `${totalPoints}`;
    form.reset();
});

function weaponsUsed() {
    const classSelect = document.getElementById("class");
    const selectedClass = classSelect.value;
    const favWeapon = document.getElementById("favorite-weapon");
    if (selectedClass === "Light") {
        favWeapon.innerHTML = `
            <input type="checkbox" name="favWeapon" value="93R"> 93R<br>
            <input type="checkbox" name="favWeapon" value="ARN-120"> ARN-120<br>
            <input type="checkbox" name="favWeapon" value="DAGGER"> DAGGER<br>
            <input type="checkbox" name="favWeapon" value="LH1"> LH1<br>
            <input type="checkbox" name="favWeapon" value="M11"> M11<br>
            <input type="checkbox" name="favWeapon" value="M26 MATTER"> M26 MATTER<br>
            <input type="checkbox" name="favWeapon" value="RECURVE BOW"> RECURVE BOW<br>
            <input type="checkbox" name="favWeapon" value="SH1900"> SH1900<br>
            <input type="checkbox" name="favWeapon" value="SR-84"> SR-84<br>
            <input type="checkbox" name="favWeapon" value="SWORD"> SWORD<br>
            <input type="checkbox" name="favWeapon" value="THROWING KNIVES"> THROWING KNIVES<br>
            <input type="checkbox" name="favWeapon" value="V95"> V95<br>
            <input type="checkbox" name="favWeapon" value="XP-54"> XP-54<br>
        `;
    } else if (selectedClass === "Medium") {
        favWeapon.innerHTML = `
            <input type="checkbox" name="favWeapon" value="AKM"> AKM<br>
            <input type="checkbox" name="favWeapon" value="CB-01 REPEATER"> CB-01 REPEATER<br>
            <input type="checkbox" name="favWeapon" value="CERBERUS CERBERUS"> CERBERUS 12GA<br>
            <input type="checkbox" name="favWeapon" value="CL-40"> CL-40<br>
            <input type="checkbox" name="favWeapon" value="DUAL BLADES"> DUAL BLADES<br>
            <input type="checkbox" name="favWeapon" value="FAMAS"> FAMAS<br>
            <input type="checkbox" name="favWeapon" value="FCAR"> FCAR<br>
            <input type="checkbox" name="favWeapon" value="MODEL 1887"> MODEL 1887<br>
            <input type="checkbox" name="favWeapon" value="PIKE-556"> PIKE-556<br>
            <input type="checkbox" name="favWeapon" value="R.357"> R.357<br>
            <input type="checkbox" name="favWeapon" value="RIOT SHEILD"> RIOT SHEILD<br>
        `;
    } else if (selectedClass === "Heavy") {
        favWeapon.innerHTML = `
            <input type="checkbox" name="favWeapon" value=".50 AKIMBO"> .50 AKIMBO<br>
            <input type="checkbox" name="favWeapon" value="FLAMETHROWER"> FLAMETHROWER<br>
            <input type="checkbox" name="favWeapon" value="KS-23"> KS-23<br>
            <input type="checkbox" name="favWeapon" value="LEWIS GUN"> LEWIS GUN<br>
            <input type="checkbox" name="favWeapon" value="M134 MINIGUN"> M134 MINIGUN<br>
            <input type="checkbox" name="favWeapon" value="M60"> M60<br>
            <input type="checkbox" name="favWeapon" value="MGL32"> MGL32<br>
            <input type="checkbox" name="favWeapon" value="SA1216"> SA1216<br>
            <input type="checkbox" name="favWeapon" value="SHAK-50"> SHAK-50<br>
            <input type="checkbox" name="favWeapon" value="SLEDGEHAMMER"> SLEDGEHAMMER<br>
            <input type="checkbox" name="favWeapon" value="SPEAR"> SPEAR<br>
        `;
    } else {
        favWeapon.innerHTML = `
            <h2>*SELECT A CLASS*</h2>
        `;
    }
}

document.getElementById("class").addEventListener('change', weaponsUsed);
document.addEventListener('DOMContentLoaded', weaponsUsed);


document.addEventListener('change', function(e) {
    if (e.target.name === 'favWeapon' && e.target.type === 'checkbox') {
        const checked = document.querySelectorAll('input[name="favWeapon"]:checked');
        if (checked.length > 5) {
            e.target.checked = false;
            alert("You can only select up to 5 weapons.");
        }
    }
});

