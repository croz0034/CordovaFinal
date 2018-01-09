const croz0034 = {
    URL: '',
    DATA: '',
    SPELLROSTER: [],
    CLASSROSTER: [],
    PAGE: 1,
    BOOKMARK : "",
    init: function(){
    croz0034.organizeSpells();
    croz0034.organizeClasses();
    croz0034.pageConstruct();
        
    },
    orientation: function(){
        let p1 = document.getElementById('list-page');
        if (p1.classList.contains('active')){croz0034.PAGE= 1};
        let p2 = document.getElementById('list-page');
        if (p2.classList.contains('active')){ croz0034.PAGE= 2};
    },
    pageConstruct: function(classTar){
        let page = croz0034.PAGE;
        if (page == 1){
            let stage = document.getElementById("list-page");
            stage.innerHTML = '';
            let heading = document.createElement('header');
            stage.appendChild(heading);
            let additions = document.createElement('h1');
            additions.textContent = "Classes";
            heading.appendChild(additions);
            let Job;
            let Armour;
            
        for( i of croz0034.CLASSROSTER){
            if (i.Jobtype == 1) { Job = "Melee Fighter"}
            else if (i.Jobtype == 2 ) { Job = "Magic Caster"}
            else{Job = "Restricted Class"}
            
            if (i.Armour >= 4 || i.Shield >= 3){ Armour = "Strong"}
            else if (i.Armour == 3 || i.Shield == 2){ Armour = "Moderate"}
            else if (i.Armour == 2 || i.Shield == 1){ Armour = "Weak"}
            else { Armour = "virtually non-existent"};
            
            let spellplate = document.createElement('div');
            
            spellplate.addEventListener('click', croz0034.AbilityPage);
            
            spellplate['data-key'] = i.Name;
            spellplate.classList.add("item-card");
            stage.appendChild(spellplate);
            additions = document.createElement('img');
            additions.src = "img/" + i.Name + ".svg"
            additions.classList.add("icon");
            additions.alt = "icon for " + i.Name;
            spellplate.appendChild(additions);
            additions = document.createElement('h3');
            additions.textContent = i.Name;
            additions.classList.add("item-title");
            spellplate.appendChild(additions);
            additions = document.createElement('p');
            additions.classList.add('item-desc');
            additions.textContent = "A " + Job + " with " + Armour + " Defensive abilities."
            spellplate.appendChild(additions);    
        }    
        }
        
        if ( page == 2){
            let stage = document.getElementById("details-page");
            stage.innerHTML = '';
            let heading = document.createElement('header');
            stage.appendChild(heading);
            let housing = document.createElement('h1');
            heading.appendChild(housing);
            let additions = document.createElement('a');
            additions.href= "#";
            additions.classList.add("back-btn");
            additions.textContent = `<<`;
            additions.addEventListener('click', croz0034.PageFlip);
            housing.appendChild(additions);
            additions = document.createElement('span');
            additions.class="details-title";
            additions.textContent = classTar;
            housing.appendChild(additions);
            let classcard = document.createElement('div');
            stage.appendChild(classcard);
            
            for( i of croz0034.CLASSROSTER){
                if (i.Name == classTar){
            
            
            additions = document.createElement('img');
            additions.src = "img/" + i.Name + ".png"
            additions.id ="andy";
            additions.alt = "Amtgard rulebook portrayal of a:  " + i.Name;
            classcard.appendChild(additions);
                    
/////////////////// Proficiencies
                    additions = document.createElement('li');
                    additions.textContent = "Sash Colour: " + i.Sash;
                    classcard.appendChild(additions)
                    
                    additions = document.createElement('li');
                    additions.textContent = "Armour: " + i.Armour + " Points" ;
                    classcard.appendChild(additions)
                    
                    let shield;
                    if (i.Shield == 0){shield = "none"} else if (i.Shield == 1){shield = "small"} else if(i.Shield == 2){shield = "medium"} else {shield = "large"};
                    
                    
                    classcard.appendChild(additions)
                    additions = document.createElement('li');
                    additions.textContent = "Max Shield: " + shield;
                    classcard.appendChild(additions)
                     additions = document.createElement('p');
                    additions.textContent = "Weapon Proficiencies: ";
               for (p of i.Weapons){
                   additions.textContent = additions.textContent + ", " + p;
                   
               }; classcard.appendChild(additions);
                    
                    if(i.Jobtype == 2){
                        additions = document.createElement('p');
                        additions.textContent = "Note: Magic classes start with no weapon, armour, or shield profficiencies save for dagger"
                    classcard.appendChild(additions);};
                    if(i.Name == "Barbarian"){
                        additions = document.createElement('p');
                        additions.textContent = "Note: Barbarians are unable to wear enchantments from other classes"
                    classcard.appendChild(additions);}
                    }
            }
/////////////////////// Profficiencies end
            /////////////////// Abilities Start
        let job = classTar;
            
                additions = document.createElement('h4');
                additions.textContent = "Abilities";
                stage.appendChild(additions);
             let x = 0;
    for (x=0; x<7; x++){
        additions = document.createElement("div");
        additions.classList.add('item-card');
        additions.id = "lv" + x;
        stage.appendChild(additions);
    let lvlHead = document.createElement("h4");
    lvlHead.textContent = "lv: " + x;
    additions.appendChild(lvlHead);}
            
                     for (let i of croz0034.SPELLROSTER) {
            x = JSON.stringify(i["class/level"]);
            LTP =  JSON.stringify(job) + ':0';
            L1 =  JSON.stringify(job) + ':1';
            L2 =  JSON.stringify(job) + ':2';
            L3 =  JSON.stringify(job) + ':3';
            L4 =  JSON.stringify(job) + ':4';
            L5 =  JSON.stringify(job) + ':5';
            L6 =  JSON.stringify(job) + ':6';              
            if (x.includes(LTP)) {
                CurrentRow = document.querySelector('#lv0');
                levelRig(i);
            };   
            if (x.includes(L1)) {
                CurrentRow = document.querySelector('#lv1');
                levelRig(i);
            }; 
            if (x.includes(L2)) {
                CurrentRow = document.querySelector('#lv2');
                levelRig(i);
            }; 
            if (x.includes(L3)) {
                CurrentRow = document.querySelector('#lv3');
                levelRig(i);
            }; 
            if (x.includes(L4)) {
                CurrentRow = document.querySelector('#lv4');
                levelRig(i);
            }; 
    
            if (x.includes(L5)) {
                CurrentRow = document.querySelector('#lv5');
                levelRig(i);
            }; 
            if (x.includes(L6)) {
                CurrentRow = document.querySelector('#lv6');
                levelRig(i);
            } }
                function levelRig(i){
        let spellplate = document.createElement('div');
        spellplate.id = i.name;
        spellplate.classList.add("cardstock");
        let spellname = document.createElement('p');
        spellname.textContent = i.name;
        spellname.info = i;
        spellname.addEventListener('click', croz0034.AbilityExpand);
        spellplate.appendChild(spellname);
        spellname = document.createElement('div');
        spellname.id = i.name;
        spellplate.appendChild(spellname);
        if (CurrentRow.id == "lv0"){console.log(CurrentRow); console.log(spellplate)}
        CurrentRow.appendChild(spellplate);
     }
        
        }  
    },
    AbilityPage: function(ev){
        let classTar = this['data-key'];
        console.log(classTar + "selected");
        croz0034.PageFlip();
        croz0034.PAGE = 2;
        croz0034.pageConstruct(classTar);
    },
    PageFlip: function(){
        let p1 = document.getElementById('list-page');
        p1.classList.toggle('active');
        let p2 = document.getElementById('details-page');
        p2.classList.toggle('active');
        
        
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    ,
    AbilityExpand: function(ev){        
let spellType = ["magic ball", "enchantment", "verbal", "specialty arrow", "neutral", "meta-magic"];
let spellSchool = ["command", "death", "flame", "neutral", "protection", "sorcery", "spirit", "subdual"];
let spellRange = ["magic ball", "self", "touch", "20 feet", "50 feet", "unlimited", "self or touch"];
let spellMaterials = ["magic ball", "enchant strip", "--"];
let states = ["cursed", "fragile", "frozen", "immune", "insubstantial", "out of game", "stopped", "stunned", "suppressed", "resistant"];
        
        croz0034.AbilityCollapse(ev);
        let Spell = this.info;
        let bridge = document.getElementById(Spell.name);
        let housing = document.createElement('div');
        housing.id = 'magic';
        housing.classList.add('item-card');
        housing.addEventListener('click', croz0034.AbilityCollapse);
        bridge.appendChild(housing);
    let users = document.createElement('p');
    for (let i of Spell["class/level"]) {
        users.textContent += JSON.stringify(i);
        i++
    }
    housing.appendChild(users)
    let TypeSchoolRange = document.createElement('p');
    TypeSchoolRange.textContent += "Type: " + spellType[Spell.type] + ", ";
    TypeSchoolRange.textContent +="School: " + spellSchool[Spell.school] + ", ";
    TypeSchoolRange.textContent +="Range: " + spellRange[Spell.range];
    housing.appendChild(TypeSchoolRange);
        if (Spell.incant){
    let incantation = document.createElement('p');
    incantation.textContent = "Incantation: " + Spell.incant[0] + " X " + Spell.incant[1];
    housing.appendChild(incantation);};
    if (Spell.materials){let spellmats = document.createElement('p');
    let cloth = Spell.materials[1];
    spellmats.textContent = "Materials: " + Spell.materials[0] + spellMaterials[cloth];
    housing.appendChild(spellmats);}
    if (Spell.effect){let spelleffect = document.createElement('p');
    spelleffect.textContent = "Effect: " + Spell.effect;
    housing.appendChild(spelleffect);}
    if (Spell.limitations){let spelllimitations = document.createElement('p');
    spelllimitations.textContent = "Limitations: " +Spell.limitations;
    housing.appendChild(spelllimitations);}
    if (Spell.note){let spellnote = document.createElement('p');
    spellnote.textContent = "Notes: " + Spell.note;
    housing.appendChild(spellnote);}   
        
}   ,
    AbilityCollapse: function(ev){
        let demolishion = document.getElementById('magic');
        if (demolishion){
            demolishion.parentNode.removeChild(demolishion);
        }
},
organizeSpells: function(){
      let newOrder = [];
    for ( i of abilities){
        newOrder.push(JSON.stringify(i));
    };
    newOrder.sort();
    let oldorder = abilities;
    for( x=0; x <= newOrder.length; x++){
        for (y of oldorder){
            filter = newOrder[x];
            filteritem = JSON.stringify(y)
            if(filteritem.includes(filter)){croz0034.SPELLROSTER.push(JSON.parse(filteritem))}
    }}
    
    
},

organizeClasses: function(){
    let MagicClasses = [];
    let MeleeClasses = [];
    let RestrictedClasses = [];
    let compClasses = [];
    
    for (i of Classes){
        if (i.Jobtype == 1){
            MeleeClasses.push(i)
        }
        else if (i.Jobtype == 2){
            MagicClasses.push(i)
        } else{
            RestrictedClasses.push(i)
        }
    };
 
    
    
    let newOrder = [];
    for ( i of MeleeClasses){
        newOrder.push(i.Name);
        console.log(newOrder);
    };
    newOrder.sort();
    console.log(newOrder);
    let oldorder = Classes;
    for( x=0; x <= newOrder.length; x++){
        for (y of oldorder){
            filter = newOrder[x];
            filteritem = JSON.stringify(y)
            if(filteritem.includes(filter)){croz0034.CLASSROSTER.push(JSON.parse(filteritem))}
    }}
    
    
    newOrder = [];
    for ( i of MagicClasses){
        newOrder.push(i.Name);
        console.log(newOrder);
    };
        newOrder.sort();
    console.log(newOrder);
    for( x=0; x <= newOrder.length; x++){
        for (y of oldorder){
            filter = newOrder[x];
            filteritem = JSON.stringify(y)
            if(filteritem.includes(filter)){croz0034.CLASSROSTER.push(JSON.parse(filteritem))}
    }}
    newOrder = [];
    for ( i of RestrictedClasses){
        newOrder.push(i.Name);
        console.log(newOrder);
    };
        newOrder.sort();
    console.log(newOrder);
    for( x=0; x <= newOrder.length; x++){
        for (y of oldorder){
            filter = newOrder[x];
            filteritem = JSON.stringify(y)
            if(filteritem.includes(filter)){croz0034.CLASSROSTER.push(JSON.parse(filteritem))}
    }
    }
    
    
    
    
}
}
document.addEventListener('DOMContentLoaded', croz0034.init);





