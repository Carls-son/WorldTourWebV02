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

    const summary = document.getElementById("summary");
    summary.innerHTML = `
        <h2>Summary</h2>
        <p><strong>Stadium:</strong> ${stadium}</p>
        <p><strong>Class:</strong> ${build}</p>
        <p><strong>Placement:</strong> ${placement}</p>
        <p><strong>Eliminations:</strong> ${elims}</p>
        <p><strong>Assists:</strong> ${assists}</p>
        <p><strong>Deaths:</strong> ${deaths}</p>
        <p><strong>Revives:</strong> ${revives}</p>
        <p><strong>Favorite Weapon:</strong> ${favWeapon}</p>
    `;
});

document.getElementById("class").addEventListener('change', function(e) {
    const selectedClass = e.target.value;
    const favWeapon = document.getElementById("favorite-weapon");
    if (selectedClass === "Light") {
        favWeapon.innerHTML = `
            <input type="checkbox" id="favWeapon" name="favWeapon" value="93R"> 93R<br>
            <input type="checkbox" name="favWeapon" value="ARN120"> ARN-120<br>
            <input type="checkbox" name="favWeapon" value="DAGGER"> DAGGER<br>
            <input type="checkbox" name="favWeapon" value="LH1"> LH1<br>
            <input type="checkbox" name="favWeapon" value="M11"> M11<br>
            <input type="checkbox" name="favWeapon" value="M26MATTER"> M26 MATTER<br>
            <input type="checkbox" name="favWeapon" value="BOW"> RECURVE BOW<br>
            <input type="checkbox" name="favWeapon" value="SH1900"> SH1900<br>
            <input type="checkbox" name="favWeapon" value="SNIPER"> SR-84<br>
            <input type="checkbox" name="favWeapon" value="SWORD"> SWORD<br>
            <input type="checkbox" name="favWeapon" value="KNIVES"> THROWING KNIVES<br>
            <input type="checkbox" name="favWeapon" value="V95"> V95<br>
            <input type="checkbox" name="favWeapon" value="XP54"> XP-54<br>
        `;
    } else if (selectedClass === "Medium") {
        favWeapon.innerHTML = `
            <input type="checkbox" id="favWeapon" name="favWeapon" value="93R"> AKM<br>
            <input type="checkbox" name="favWeapon" value="ARN120"> CB-01 REPEATER<br>
            <input type="checkbox" name="favWeapon" value="DAGGER"> CERBERUS 12GA<br>
            <input type="checkbox" name="favWeapon" value="LH1"> CL-40<br>
            <input type="checkbox" name="favWeapon" value="M11"> DUAL BLADES<br>
            <input type="checkbox" name="favWeapon" value="M26MATTER"> FAMAS<br>
            <input type="checkbox" name="favWeapon" value="BOW"> FCAR<br>
            <input type="checkbox" name="favWeapon" value="SH1900"> MODEL 1887<br>
            <input type="checkbox" name="favWeapon" value="SNIPER"> PIKE-556<br>
            <input type="checkbox" name="favWeapon" value="SWORD"> R.357<br>
            <input type="checkbox" name="favWeapon" value="KNIVES"> RIOT SHEILD<br>
        `;
    } else if (selectedClass === "Heavy") {
        favWeapon.innerHTML = `
            <input type="checkbox" id="favWeapon" name="favWeapon" value="93R"> .50 AKIMBO<br>
            <input type="checkbox" name="favWeapon" value="ARN120"> FLAMETHROWER<br>
            <input type="checkbox" name="favWeapon" value="DAGGER"> KS-23<br>
            <input type="checkbox" name="favWeapon" value="LH1"> LEWIS GUN<br>
            <input type="checkbox" name="favWeapon" value="M11"> M134 MINIGUN<br>
            <input type="checkbox" name="favWeapon" value="M26MATTER"> M60<br>
            <input type="checkbox" name="favWeapon" value="BOW"> MGL32<br>
            <input type="checkbox" name="favWeapon" value="SH1900"> SA1216<br>
            <input type="checkbox" name="favWeapon" value="SNIPER"> SHAK-50<br>
            <input type="checkbox" name="favWeapon" value="SWORD"> SLEDGEHAMMER<br>
            <input type="checkbox" name="favWeapon" value="KNIVES"> SPEAR<br>
        `;
    } else {
        favWeapon.innerHTML = `
            <h3>SELECT A CLASS</h3>
        `;
    }
});

