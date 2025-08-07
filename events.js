let totalElims = 0;
let totalAssists = 0;
let totalDeaths = 0;
let totalRevives = 0;

document.getElementById("form").addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Form submitted");

    const form = e.target;
    const formData = new FormData(form);

    const stadium = formData.get('stadium');
    const build = formData.get('class');
    const placement = formData.get('placement');
    const elims = formData.get('elims');
    const assists = formData.get('assists');
    const deaths = formData.get('deaths');
    const revives = formData.get('revives');
    const favWeapon = formData.get('favWeapon');

    totalElims += parseInt(elims) || 0;
    totalAssists += parseInt(assists) || 0;
    totalDeaths += parseInt(deaths) || 0;
    totalRevives += parseInt(revives) || 0;

    const summary = document.getElementById("summary");
    summary.innerHTML = `
        <p><strong>Stadium:</strong> ${stadium}</p>
        <p><strong>Class:</strong> ${build}</p>
        <p><strong>Placement:</strong> ${placement}</p>
        <p><strong>Eliminations:</strong> ${totalElims}</p>
        <p><strong>Assists:</strong> ${totalAssists}</p>
        <p><strong>Deaths:</strong> ${totalDeaths}</p>
        <p><strong>Revives:</strong> ${totalRevives}</p>
        <p><strong>Favorite Weapon:</strong> ${favWeapon}</p>
    `;
    form.reset();
});

document.getElementById("class").addEventListener('change', function(e) {
    const selectedClass = e.target.value;
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
            <h3>SELECT A CLASS</h3>
        `;
    }
});

document.addEventListener('change', function(e) {
    if (e.target.name === 'favWeapon' && e.target.type === 'checkbox') {
        const checked = document.querySelectorAll('input[name="favWeapon"]:checked');
        if (checked.length > 5) {
            e.target.checked = false;
            alert("You can only select up to 5 weapons.");
        }
    }
});

